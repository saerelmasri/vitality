import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text } from "react-native";
import { Color } from "../../../globalStyling";

const FoodListing = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={foodStyling.container}>
                <ScrollView style={{display: "flex",flex: 1,}}>
                    <View  style={foodStyling.backBtnContainer}>
                        <View style={foodStyling.backBtn}>
                            <Pressable onPress={() => {Alert.alert('Hola')}}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
                    <View style={foodStyling.headerMeal}>
                        <Text style={foodStyling.headerTitle}>
                            Breakfast
                        </Text>
                    </View>

                    <View style={foodStyling.searchContainer}>
                        <View style={foodStyling.searchContainer}>

                        </View>

                    </View>
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const foodStyling = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
        alignItems: 'center',
        overflow: "hidden",
        width: 360,
        backgroundColor: Color.ligtGreen
    },
    backBtnContainer: {
        width: 360,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
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
    headerMeal: {
        width: 360,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 300,
        color: Color.white
    },
    searchContainer: {
        borderWidth: 1,
        width: 360,
        height: 60  
    }

})

export default FoodListing