import { View, StyleSheet, SafeAreaView, StatusBar, Platform, Text, Pressable, Alert, ScrollView, Image } from "react-native"
import { Color } from "../../../globalStyling"

const Macros = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={macrosStyling.container}>
                <ScrollView style={{display: "flex",flex: 1,}}>
                    <View  style={macrosStyling.backBtnContainer}>
                        <View style={macrosStyling.backBtn}>
                            <Pressable onPress={() => navigation.navigate('Nutrition')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
                    <View style={macrosStyling.headerContainer}>
                        <Text style={macrosStyling.headerTitle}>
                            Diary
                        </Text>
                    </View>
                    <View style={macrosStyling.statsContainer}>
                        <View style={macrosStyling.containerTitle}>
                            <Text style={macrosStyling.TitleTxt}>
                                Calories Remaining
                            </Text>
                        </View>
                        <View style={macrosStyling.contentContainer}>
                            <View style={macrosStyling.goalContainer}>
                                <Text style={macrosStyling.textTop}>2,100</Text>
                                <Text style={macrosStyling.textBottom}>Goal</Text>
                            </View>
                            <View style={macrosStyling.signContainer}>
                                <Text style={macrosStyling.textTop}>-</Text>
                            </View>
                            <View style={macrosStyling.foodContainer}>
                                <Text style={macrosStyling.textTop}>2,100</Text>
                                <Text style={macrosStyling.textBottom}>Food</Text>
                            </View>
                            <View style={macrosStyling.signContainer}>
                                <Text style={macrosStyling.textTop}>=</Text>
                            </View>
                            <View style={macrosStyling.remainsContainer}>
                                <Text style={macrosStyling.textTop}>2,100</Text>
                                <Text style={macrosStyling.textBottom}>Remaining</Text>
                            </View>
                        </View>
                    </View>
                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Breakfast</Text>
                        <Text style={macrosStyling.addFood}>406</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => {Alert.alert('Add breakfast')}}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Lunch</Text>
                        <Text style={macrosStyling.addFood}>325</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => {Alert.alert('Add Lunch')}}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Dinner</Text>
                        <Text style={macrosStyling.addFood}>725</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => {Alert.alert('Add Lunch')}}>
                            <Text style={macrosStyling.addFood}>Add Dinner</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

const macrosStyling = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
        alignItems: 'center',
        overflow: "hidden",
        width: 360,
    },
    headerContainer: {
        width: 360,
        height: 60,
        backgroundColor: Color.ligtGreen,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 500,
        color: Color.white
    },
    statsContainer: {
        width: 360,
        height: 100,
        backgroundColor: Color.ligtGreen
    },
    containerTitle: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10
    },
    TitleTxt: {
        fontSize: 20,
        color: Color.white
    },
    contentContainer: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    goalContainer: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTop: {
        fontSize: 30,
        fontWeight: 400,
        color: Color.white
    },
    textBottom: {
        fontSize: 20,
        fontWeight: 400,
        color: Color.white
    },
    signContainer: {
        width: '10%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodContainer: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    remainsContainer:{
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealHeader: {
        width: 360,
        height: 50,
        backgroundColor: Color.ligtGreen,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    mealType: {
        fontSize: 25,
        fontWeight: 300,
        color: Color.white
    },
    addFood:{
        fontSize: 20,
        fontWeight: 300,
        color: Color.white
    },
    foodContainerList: {
        width: 360,
        height: 250,
        backgroundColor: Color.ligtGreen
    },
    listItem: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemHeader: {
        width: '30%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    food: {
        fontSize: 22,
        fontWeight: 300,
        color: Color.white,
        display: 'flex',
    },
    foodDefault: {
        fontSize: 16,
        fontWeight: 300,
        color: Color.white
    },
    foodCal: {
        fontSize: 16,
        fontWeight: 300,
        color: Color.white
    },
    backBtnContainer: {
        width: '100%',
        height: '5%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: Color.ligtGreen
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
    
})

export default Macros