import { StyleSheet, View, Pressable, Image, Text, TouchableOpacity, Alert } from "react-native"
import { Color } from '../../../globalStyling'

const Gender = () => {
    return(
        <View style={genderStylings.mainContainer}>
            <View  style={genderStylings.backBtnContainer}>
                <View style={genderStylings.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>

           <View style={genderStylings.contentContainer}>
                <View style={genderStylings.headerContainer}>
                    <Text style={genderStylings.headerText}>What is your <Text style={genderStylings.span}>gender</Text></Text>
                </View>
                <View style={genderStylings.descriptionContainer}>
                    <Text style={genderStylings.descriptionText}>To give you a better experience we need to know your gender</Text>
                </View>

                <View style={genderStylings.btnsContainer}>
                    <TouchableOpacity style={genderStylings.genderBtn}  onPress={() => {console.log('Male Pressed');}}>
                        <Image style={genderStylings.imgGender} source={require('../../assets/app-img/male.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={genderStylings.genderBtn} onPress={() => {console.log('Female Pressed');}}>
                        <Image source={require('../../assets/app-img/female.png')}></Image>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={genderStylings.nextBtn} onPress={() => {console.log('Next Pressed');}}>
                    <Image source={require('../../assets/app-img/nextBtn.png')}></Image>

                </TouchableOpacity>

           </View>



        </View>
    )
}

const genderStylings = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.grey,
        display: "flex",
        alignItems: 'center',
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    backBtnContainer: {
        width: '100%',
        height: '10%',
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
    contentContainer: {
        width: '100%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
    },
    headerContainer: {
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
        width: '100%',
        height: '7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    descriptionText: {
        textAlign: 'center',
        paddingLeft: 55,
        paddingRight: 55,
    },
    btnsContainer: {
        width: '70%',
        height: '55%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    genderBtn: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: Color.darkGreen,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextBtn: {
        width: '50%',
        height: '10%',
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Gender