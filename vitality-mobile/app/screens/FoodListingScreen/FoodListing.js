import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, Dimensions, TextInput } from "react-native";
import { Color } from "../../../globalStyling";

const { height, width } = Dimensions.get('window')


const FoodListing = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={foodStyling.container}>
                <ScrollView>
                    <View style={foodStyling.backBtnContainer}>
                        <View style={foodStyling.backBtn}>
                            <Pressable onPress={() => Alert.alert('image clicked')}>
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
                        <View style={foodStyling.searchIconContainer}>

                        </View>
                        <TextInput style={foodStyling.searchInput} placeholder="Search food"></TextInput>
                    </View>

                    <View style={foodStyling.foodItemList}>
                        <View style={foodStyling.foodItem}>
                            <View style={foodStyling.foodInfo}>
                                <Text style={foodStyling.foodTxt}>Banana</Text>
                                <Text style={foodStyling.foodTxt}>105 cal, 1 medium</Text>
                            </View>
                            <View style={foodStyling.addContainer}>
                                <Pressable onPress={() => {Alert.alert('Press')}}>
                                    <Image source={require('../../assets/app-img/addBtn.png')}/>
                                </Pressable>

                            </View>

                        </View>

                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
}

const foodStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        height: height
    },
    backBtnContainer: {
        width: width,
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
        width: width,
        height: height / 13,
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
        width: width - 20,
        height: height / 13,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 10
    },
    searchIconContainer: {
        width: width /7,
        height: '100%',
    },
    searchInput: {
        fontSize: 20,
        width: '80%',
        paddingLeft: 10
    },
    foodItem: {
        width: width - 20,
        height: height / 10,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row'

    },
    foodItemList: {
        borderWidth: 1,
        width: width,
        height: height / 1.3,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    foodInfo: {
        width: '70%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20
    },
    foodTxt: {
        fontSize: 18,
        fontWeight: 500
    },
    addContainer: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default FoodListing