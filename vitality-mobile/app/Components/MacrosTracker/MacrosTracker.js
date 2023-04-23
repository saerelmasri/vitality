import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../../globalStyling";

const Macro = () => {
    return(
        <View style={nutritionStyle.card}>
            <View style={nutritionStyle.top}>
                <View style={nutritionStyle.test}></View>
            </View>
            <View style={nutritionStyle.bottom}>
                <View style={nutritionStyle.stats}>
                    <View style={nutritionStyle.statsInfo}>
                        <View style={nutritionStyle.square}></View>
                        <Text style={nutritionStyle.nutritionTitle}>Carbohydrates</Text>
                    </View>
                    <Text style={nutritionStyle.nutritionTitle}>27%</Text>
                </View>
                <View style={nutritionStyle.stats}>
                    <View style={nutritionStyle.statsInfo}>
                        <View style={nutritionStyle.square}></View>
                        <Text style={nutritionStyle.nutritionTitle}>Fat</Text>
                    </View>
                        <Text style={nutritionStyle.nutritionTitle}>38%</Text>
                </View>
                <View style={nutritionStyle.stats}>
                <View style={nutritionStyle.statsInfo}>
                    <View style={nutritionStyle.square}></View>
                        <Text style={nutritionStyle.nutritionTitle}>Protein</Text>
                    </View>
                    <Text style={nutritionStyle.nutritionTitle}>27%</Text>
                </View>
            </View>
        </View>
            
    )
}

const nutritionStyle = StyleSheet.create({
    card: {
        width: '90%',
        height: '80%',
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: Color.darkGreen,
        display: 'flex',
        flexDirection: 'column'
    },
    top:{
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    bottom:{
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    test: {
        borderWidth: 1,
        borderColor: Color.white,
        width: 150,
        height: 150,
        borderRadius: 500
    },
    stats: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    square: {
        width: '20%',
        height: '50%',
        backgroundColor: Color.white,
        marginRight: 10
    },
    nutritionTitle: {
        fontSize: 20,
        fontWeight: 400,
        color: Color.white
    },
    statsInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '50%'
    }
    
    
})

export default Macro