import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Color } from '../../../globalStyling';

const styles = StyleSheet.create({
    stepsCard: {
        width: 320,
        height: 300,
        borderRadius: 10,
        backgroundColor: Color.darkGreen,
    },
    stepsTextContainer: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepsTitle: {
        fontSize: 30,
        fontWeight: 600,
        color: Color.white
    },
    stepsCardContent: {
        borderWidth: 1,
        width: '100%',
        height: '50%'
    },
    stepsCardStats: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50
    },
    stepsStats: {
        fontSize: 30,
        fontWeight: 500,
        color: Color.white
    }
});

const SteptsTracker = ({steps, km, calories}) => {
  return (
    <View style={styles.stepsCard}>
        <View style={styles.stepsTextContainer}>
            <Text style={styles.stepsTitle}>
                {steps} steps
            </Text>
        </View>
        <View style={styles.stepsCardContent}>

        </View>
        <View style={styles.stepsCardStats}>
            <Text style={styles.stepsStats}>
                {km}
            </Text>
            <Text style={styles.stepsStats}>
                {calories}
            </Text>

        </View>
    </View>
  );
};

export default SteptsTracker;