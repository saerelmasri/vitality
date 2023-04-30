import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const Challenge = ({name, reward, action}) => {
    
    return(
        <TouchableOpacity style={runningStyling.challengeHeader} onPress={action}>
            <View style={runningStyling.txtContainer}>
                <Text style={{fontSize: 22}}>{name}</Text>
                <Text style={{fontSize: 15}}>{reward}</Text>
            </View>
            <View style={runningStyling.iconContainer}>

            </View>
        </TouchableOpacity>
    );
}

const runningStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        width: "100%",
    },
    header: {
        width: width, 
        height: height / 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    imageContainer: {
        height: height / 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContent: {
        width: '80%',
        height: '90%',
        borderRadius: 10,
        backgroundColor: Color.grey,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    imageTextContent: {
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 500,
        color: Color.white
    },
    btnContainer: {
        height: height / 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    challengesContainer: {
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10
    },
    challengeHeader: {
        height: height / 9,
        width: width / 1.2,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    txtContainer: {
        height: '80%',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '2%'
    },
    iconContainer: {
        height: '80%',
        width: '20%'
    }
    

})


export default Challenge