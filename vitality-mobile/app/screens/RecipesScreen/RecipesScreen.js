import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, Dimensions, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Color } from "../../../globalStyling";
import RecipeComponent from "../../Components/RecipeComponent/Recipe";
const { height, width } = Dimensions.get('window')

const Recipes = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={recipesStyling.container}>
                <ScrollView>
                    <View style={recipesStyling.header}>
                        <Text style={recipesStyling.text}>What you want to cook today?</Text>
                    </View>

                    <View style={recipesStyling.searchContainer}>
                        <View style={recipesStyling.searchIconContainer}>
                        </View>
                        <TextInput style={recipesStyling.searchInput} placeholder="Search food"></TextInput>
                    </View>

                    <View style={recipesStyling.aiBtn}>
                        <Pressable onPress={() => {Alert.alert('Pressed')}}>
                            <View style={recipesStyling.chefTxt} >
                                <Text style= {{fontSize: 20, fontWeight: 500, color: Color.white,}}>
                                    Don’t know what to cook?Check our new AI chef!
                                </Text>
                            </View>
                            <Image source={require('../../assets/app-img/chef.jpg')} style={{resizeMode: 'cover', height: 123, width: 340, borderRadius: 10, opacity: 0.5}}/>
                        </Pressable>
                    </View>

                    <View style={recipesStyling.btnContainer}>
                        <TouchableOpacity style={recipesStyling.btn}>
                            <Text style={recipesStyling.btnTxt}>Breakfast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recipesStyling.btn}>
                            <Text style={recipesStyling.btnTxt}>Lunch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recipesStyling.btn}>
                            <Text style={recipesStyling.btnTxt}>Snack</Text>
                        </TouchableOpacity>
                    </View>

                   
                    <View style={recipesStyling.recipesContainer}>
                        <RecipeComponent level={'Easy'} name={'Healthy Banana Oatmeal Pancakes'}/>
                    </View>
                   

                    
                    
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

const recipesStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    header: {
        width: width,
        height: height / 12,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10
    },
    text: {
        fontSize: 18,
        fontWeight: 400,
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
    aiBtn: {
        width: width - 20,
        height: height / 6,
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        
    },
    chefTxt: {
        position: 'absolute',
        zIndex: 1,
        width: '40%',
        height: '100%',
        paddingLeft: '3%',
        display: 'flex',
        justifyContent: 'center',
        opacity: 1
    },
    btnContainer: {
        width: width,
        height: height / 12,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '5%'
    },
    btn: {
        width: '30%',
        height: '70%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        fontSize: 17,
        fontWeight: 400
    },
    recipesContainer: {
        width: width,
        height: height / 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    recipesScroll: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    }
})

export default Recipes