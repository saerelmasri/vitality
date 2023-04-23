import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Color } from '../../../globalStyling';


const CaloriesTracker = ({Goal, Food, BaseGoalStats, FoodStats}) => {
    return(
        <View style={styles.caloriesCard}>
            <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>
                    Calories
                </Text>
                <Text style={styles.cardSubTitle}>
                    Remaining = {Goal} - {Food}
                </Text>
            </View>
            <View style={styles.cardContent}>
                <View style={styles.cardCalories}>
                </View>
                <View style={styles.cardCaloriesStats}>
                    <View style={styles.baseGoalContainer}>
                        <Text style={styles.goalTitle}>
                            Base Goal
                        </Text>
                        <Text style={styles.goalSubTitle}>
                            {BaseGoalStats}
                        </Text>
                    </View>
                    <View style={styles.foodContainer}>
                    <Text style={styles.foodTitle}>
                            Food
                        </Text>
                        <Text style={styles.foodSubTitle}>
                            {FoodStats}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    caloriesCard: {
        width: 320,
        height: 300,
        borderRadius: 10,
        backgroundColor: Color.darkGreen,
    },
    cardTextContainer:{
        borderColor: Color.white,
        width: '80%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 15
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: 500,
        color: Color.white
    },
    cardSubTitle: {
        fontSize: 20,
        fontWeight: 300,
        color: Color.white
    },
    cardContent: {
        borderColor: Color.white,
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row'
    },
    cardCalories: {
        borderColor: Color.white,
        width: '65%',
        height: '100%'
    },
    cardCaloriesStats: {
        borderColor: Color.white,
        width: '35%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    baseGoalContainer: {
        borderColor: Color.white,
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 15
    },
    foodContainer: {
        borderColor: Color.white,
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 15
    },
    goalTitle: {
        fontSize: 20,
        fontWeight: 500,
        color: Color.white
    },
    goalSubTitle: {
        fontSize: 15,
        fontWeight: 400,
        color: Color.white
    },
    foodTitle: {
        fontSize: 20,
        fontWeight: 500,
        color: Color.white
    },
    foodSubTitle: {
        fontSize: 15,
        fontWeight: 400,
        color: Color.white
    },
});


export default CaloriesTracker