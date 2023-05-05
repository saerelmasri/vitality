import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { height, width } = Dimensions.get('window')
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'
import Indicator from "../../Components/ActivityIndicator/indicator";
import { BASE_URL } from '@env'

const Settings = ({navigation}) => {
    const [ JWT, setJWT ] = useState('')
    const [ user, setUser ] = useState('')
    const [ image, setImage ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('jwt')
            .then(token => {
                setJWT(token);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    
 
    useEffect(() => {
        const fetchFullName = async () => {
            if(JWT){
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/user_route/user_details`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setUser(res.data.message[0]['full_name']);
                    setImage(res.data.message[0]['photo_url']);
                }).catch(err => {
                    console.log(err.response);
                })
            }
        }
        fetchFullName()        
    }, [JWT])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            await axios({
                method: 'POST',
                url: `${BASE_URL}/photos_route/addProfilePhoto`,
                data: {
                    "photoData": result.assets[0].uri
                },
                headers: {
                    'Authorization': JWT,
                }
              }).then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.log(error.response);
              });
        }
    }
    return(
            <View style={settingStyle.container}>
                <ScrollView>
                { isLoading ? (
                    <Indicator/>
                ): (
                    <>
                        <View style={settingStyle.profileContainer}>
                            <View style={settingStyle.avatarContent} >
                                <View style={settingStyle.picture}>
                                    { image ? (
                                    <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 150 }}/>
                                    ): (
                                        <Image source={require('../../assets/app-img/default.jpg')} style={{ width: 120, height: 120, borderRadius: 100 }}/>
                                        
                                    )}
                                </View>
                            </View>
                            <View style={settingStyle.name}>
                                <TouchableOpacity onPress={pickImage}>
                                    <Text style={{fontSize: 22, fontWeight: 500, color: 'white'}}>
                                        Change image
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>

                            <View style={settingStyle.name}>
                                <Text style={{fontSize: 30, fontWeight: 500}}>
                                    {user}
                                </Text>
                            </View>
                        </View>

                        <View style={settingStyle.optionsContainer}>
                            <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeHeight')}>
                                <Text style={settingStyle.optionTxt}>Change Height</Text>
                                <MaterialCommunityIcons name="arrow-right-thin" color={'black'} size={50} />
                            </TouchableOpacity>
                            <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeWeight')}>
                                <Text style={settingStyle.optionTxt}>Change Weight</Text>
                                <MaterialCommunityIcons name="arrow-right-thin" color={'black'} size={50} />
                            </TouchableOpacity>
                            <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeGoal')}>
                                <Text style={settingStyle.optionTxt}>Change goal</Text>
                                <MaterialCommunityIcons name="arrow-right-thin" color={'black'} size={50} />
                            </TouchableOpacity>
                            <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeActivity')}>
                                <Text style={settingStyle.optionTxt}>Change activity level</Text>
                                <MaterialCommunityIcons name="arrow-right-thin" color={'black'} size={50} />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                </ScrollView>
            </View>
    );
}

const settingStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerContent: {
        width: width,
        height: height / 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.grey
    },
    profileContainer: {
        width: width,
        height: height / 3,
        backgroundColor: Color.grey,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    avatarContent: {
        width: width / 4,
        height: height / 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%'
    },
    picture:{
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    name: {
        width: width / 1,
        height: height/ 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn: {
        width: width / 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionsContainer: {
        width: width,
        height: height / 3,
        backgroundColor: Color.grey,
        marginTop: ' 20%'
    },
    option: {
        height: height / 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: ' 10%',
        paddingRight: ' 10%',
    },
    optionTxt: {
        fontSize: 22
    }
    
})


export default Settings