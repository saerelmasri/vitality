import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')


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
        color: Color.white,
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20
    },
    recipesScroll: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    noRecipesText: {
        fontSize: 30,
        color: Color.white,
        marginTop: '10%'
    }
})

export {recipesStyling}