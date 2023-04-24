import {  StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const recipeDescription = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        zIndex: 1
    },
    backBtnContainer: {
        width: width,
        height: height / 3,
        display: 'flex',
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
    descriptionContainer: {
        width: width,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 1,
        backgroundColor: Color.ligtGreen,
        display: 'flex',
        alignItems: 'center',
        paddingTop: ' 5%'
    },
    titleHeader: {
        width: width - 40,
        height: height / 11,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 500,
        color: Color.white
    },
    nutritionFacts: {
        width: width - 40,
        height: height / 8,
        marginTop: '5%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, 
    factsContent: {
        width: '33%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    factsNumber: {
        fontSize: 25,
        fontWeight: 400
    },
    factsTxt: {
        fontSize: 20,
        fontWeight: 400
    },
    ingredientsContainer: {
        width: width - 40,
        marginTop: '5%',
        padding: 20
    },
    preparationContainer: {
        
        flex: 1,
        width: width - 40,
        marginTop: '5%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      },
      steps: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      },
})

export { recipeDescription }