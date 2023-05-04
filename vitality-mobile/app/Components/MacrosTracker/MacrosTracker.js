import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
import axios from "axios";
import { PieChart } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
var JWT = ''
const { height, width } = Dimensions.get('window')

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    barPercentage: 1,
    useShadowColorFromDataset: false
};

const Macro = () => {
    const [ carbs, setCarbs ] = useState(0)
    const [ fats, setFats ] = useState(0)
    const [ protein, setProtein ] = useState(0)

    AsyncStorage.getItem('jwt')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });

    const data = [
        {
            name: "Carbs",
            population: carbs,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Fats",
            population: fats,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Protein",
            population: protein,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ]

    useEffect(()=> {
        const interval = setInterval(() => {
            const getTotalCalories = async() => {
                await axios({
                    method: 'GET',
                    url: 'http://192.168.1.104:5000/foodLog/sumOfNutrients',
                    headers: {
                        'Authorization': JWT,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res=> {
                    setCarbs(res.data.message.carbs);
                    setFats(res.data.message.fats);
                    setProtein(res.data.message.protein);
                }).catch(err => console.error(err.response.data))
            };
    
            getTotalCalories()
        }, 5000)
        return () => clearInterval(interval)
    })

    return(
        <View style={nutritionStyle.card}>
            <PieChart
                data={data}
                chartConfig={chartConfig}
                accessor={"population"}
                width={width}
                height={250}
                paddingLeft="20"
            />
        </View>
            
    )
}

const nutritionStyle = StyleSheet.create({
    card: {
        width: width - 10,
        height: height / 3,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: Color.darkGreen,
        display: 'flex',
        flexDirection: 'column'
    },
    top:{
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingLeft: '25%'
    }, 
    bottom:{
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    test: {
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