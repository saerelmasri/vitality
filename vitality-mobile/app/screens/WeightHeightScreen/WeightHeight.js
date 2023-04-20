import { View, Text, TextInput, Image, Pressable, Alert, StyleSheet, Switch } from "react-native";
import { useState } from 'react'
import { Color } from '../../../globalStyling'
import Button from "../../Components/Button/Button";

const WeightHeight = () => {
    const [ isEnable, setIsEnable ] = useState(true)

    const toggleSwitch = () => {
        if(isEnable){
            console.log('Pounds');
        }else{
            console.log('Kilos');
        }

        setIsEnable(previosState => !previosState)
    }


    return(
        <View style={weightHeightStylings.mainContainer}>
            <View style={weightHeightStylings.backBtn}>
                <Pressable onPress={() => Alert.alert('image clicked')}>
                    <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                </Pressable>
            </View>
            
            <View style={weightHeightStylings.headerContainer}>
                <Text style={weightHeightStylings.headerText}>Please provide the following <Text style={weightHeightStylings.span}>information</Text></Text>
            </View>
            <View style={weightHeightStylings.descriptionContainer}>
                <Text style={weightHeightStylings.descriptionText}>To give you a better experience we need to know your weight and height</Text>
            </View>

            <View style={weightHeightStylings.weightHeightContainer}>
                <View style={weightHeightStylings.weightContainer}>
                    <Text style={weightHeightStylings.weightTitle}>What is your weight?</Text>
                    <Switch
                        trackColor={{false: 'red', true: 'green'}}
                        thumbColor={ isEnable ? 'red' : 'green'}
                        onValueChange={toggleSwitch}
                        value={isEnable}
                    />
                </View>
                <View style={weightHeightStylings.heightContainer}>

                </View>

            </View>


        </View>
    );
}

const weightHeightStylings = StyleSheet.create({
    flex: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: Color.grey,
        display: "flex",
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    backBtn: {
        height: 50,
        width: 50,
        marginTop: 0,
        marginLeft: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        height: '95%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerContainer: {
        borderWidth: 1,
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    span: {
        fontWeight: 600
    },
    descriptionContainer: {
        borderWidth: 1,
        width: '100%',
        height: '7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    descriptionText: {
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    weightHeightContainer:{
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column'
    },
    weightContainer: {
        borderWidth: 1,
        width: '100%',
        height: '50%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        alignItems: 'center'
    },
    heightContainer: {
        borderWidth: 1,
        width: '100%',
        height: '50%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        top: 250,
        left: 0,
        right: 0,
        bottom: 0
    },
    weightTitle: {
        fontSize: 30,
        fontWeight: 400,
        color: Color.white,
        marginTop: 20
    }
})


export default WeightHeight