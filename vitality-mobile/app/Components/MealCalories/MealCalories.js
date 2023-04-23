import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../../globalStyling";

const MealContainer = () => {
    return(
        <View style={nutritionStyle.card}>
            <View style={nutritionStyle.cardTopContent}>
                <View style={nutritionStyle.containerVisualizer}>
                    <View style={nutritionStyle.test}></View>
                </View>
                <View style={nutritionStyle.statsContent}>
                    <View style={nutritionStyle.leftContainer}>
                        <View style={nutritionStyle.leftTopContainer}>
                            <View style={nutritionStyle.square}></View>
                            <Text style={nutritionStyle.nutritionTitle}>Breakfast</Text>
                        </View>
                        <View style={nutritionStyle.leftBottomContainer}>
                            <View style={nutritionStyle.square}></View>
                            <Text style={nutritionStyle.nutritionTitle}>Dinner</Text>
                        </View>
                    </View>
                    <View style={nutritionStyle.rightContainer}>
                        <View style={nutritionStyle.leftTopContainer}>
                            <View style={nutritionStyle.square}></View>
                            <Text style={nutritionStyle.nutritionTitle}>Lunch</Text>
                        </View>
                        <View style={nutritionStyle.leftBottomContainer}>
                            <View style={nutritionStyle.square}></View>
                            <Text style={nutritionStyle.nutritionTitle}>Snacks</Text>
                        </View>

                    </View>
                </View>

            </View>
            <View style={nutritionStyle.cardBottomContent}>
                <View style={nutritionStyle.statsContainer}>
                    <Text style={nutritionStyle.statsText}>
                        Total Calories
                    </Text>
                    <Text style={nutritionStyle.statsText}>
                        0
                    </Text>
                </View>
                <View style={nutritionStyle.statsContainer}>
                <Text style={nutritionStyle.statsText}>
                        Net Calories
                    </Text>
                    <Text style={nutritionStyle.statsText}>
                        0
                    </Text>
                </View>
                <View style={nutritionStyle.statsContainer}>
                <Text style={nutritionStyle.statsText}>
                        Goal
                    </Text>
                    <Text style={nutritionStyle.statsText}>
                        2,000
                    </Text>
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
    cardTopContent: {
        width: '100%',
        height: '70%'
    },
    cardBottomContent: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around'
    },
    statsContainer: {
        width: '100%',
        height: '30%',
        borderTopColor: Color.white,
        borderBottomColor: Color.white,
        borderTopWidth: 1,
        borderBottomColorWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }, 
    statsText: {
        fontSize: 20,
        fontWeight: 400,
        color: Color.white
    },
    containerVisualizer: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    test: {
        borderWidth: 1,
        borderColor: Color.white,
        width: 110,
        height: 110,
        borderRadius: 500
    },
    statsContent: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row'
    },
    leftContainer: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    leftTopContainer:{
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    leftBottomContainer: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20

    },
    square: {
        width: '20%',
        height: '50%',
        backgroundColor: Color.white,
        marginRight: 20
    },
    nutritionTitle: {
        fontSize: 20,
        fontWeight: 400,
        color: Color.white
    },
    rightContainer: {
        width: '50%',
        height: '100%'
    }
})

export default MealContainer