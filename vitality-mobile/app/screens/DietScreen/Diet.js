import { View, Alert, Pressable, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Color } from "../../../globalStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"
import TypeOfDiet from "../../Components/DietComponent/TypeOfDiet"

const Diet = () => {
    return(
        <View style={dietStyling.mainContainer}>
            <View  style={dietStyling.backBtnContainer}>
                <View style={dietStyling.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={dietStyling.contentContainer}>
                <View style={dietStyling.headerContainer}>
                    <Text style={dietStyling.headerText}>Choose a diet you’d like to follow</Text>
                </View>

                <View style={dietStyling.dietContainer}>
                    <TypeOfDiet title={'Ketogenic Diet'} description={'High-fat, low-carb diet that aims to get the body into a state of ketosis.'} imageName={'keto'}/>
                    <TypeOfDiet title={'Vegan Diet'} description={'Plant-based diet that excludes all animal products including meat, dairy, eggs, and honey.'} imageName={'keto'}/>
                    <TypeOfDiet title={'Vegetarian Diet'} description={'Plant-based foods and excludes meat, fish, and poultry. It may dairy and eggs.'} imageName={'keto'}/>
                    <TypeOfDiet title={'Normal Diet'} description={'Balanced and healthy diet that meets the nutritional needs of an individual.'} imageName={'keto'}/>
                    

                </View>
                
                
                <NextBtn/>
            </View>
        </View>
    )
}

const dietStyling = StyleSheet.create({
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
    dietContainer: {
        width: '100%',
        height: '75%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default Diet