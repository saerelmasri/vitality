import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { Color } from "../../../globalStyling"

const GoalBtn = ({goalName, action}) => {
    return(
        <TouchableOpacity style={goalStyling.goal}>
            <Text style={goalStyling.goalText} onPress={action}>{goalName}</Text>
        </TouchableOpacity>
    )
}

const goalStyling = StyleSheet.create({
    goal: {
        width: '100%',
        height: '18%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center'
    },
    goalText: {
        fontSize: 25,
        paddingLeft: 20,
        fontWeight: 600
    }
})

export default GoalBtn