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
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

const MealContainer = () => {
    const [ breakfastCal, setBreakfastCal ] = useState(0)
    const [ lunchCal, setLunchCal ] = useState(0)
    const [ dinnerCal, setDinnerCal ] = useState(0)
    const [ food, setFood ] = useState(0)
    const [ calories, setCalories ] = useState('')

    useEffect(() => {
        const getJWT = async () => {
            try {
                const token = await AsyncStorage.getItem('jwt')
                JWT = token
            } catch (error) {
                console.log(error)
            }
        }

        getJWT()
    }, [])

    useEffect(()=> {
        
        const interval = setInterval(() => {

            const getTotalCalories = async() => {
                await axios({
                    method: 'POST',
                    url: 'http://192.168.1.104:5000/foodLog/sumOfCalories',
                    headers: {
                        'Authorization': JWT,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res=> {
                    setBreakfastCal(res.data.message.breakfast);
                    setDinnerCal(res.data.message.dinner);
                    setLunchCal(res.data.message.lunch);
                }).catch(err => console.error(err))
            };

            getTotalCalories()

            const getCalories = async() => {
                await axios({
                    method: 'GET',
                    url: 'http://192.168.1.104:5000/foodLog/getDailyCalories',
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setCalories(res.data.message);
                }).catch(err => {
                    console.log(err.response.data);
                })
            }
            getCalories()
        }, 5000)
        return () => clearInterval(interval)


    })

    useEffect(()=> {
        setFood(Number(breakfastCal) + Number(lunchCal) + Number(dinnerCal));
        
    }, [breakfastCal, lunchCal, dinnerCal])


    const data = [
        {
            name: "Breakfast",
            population: breakfastCal,
            color: "green",
        },
        {
            name: "Lunch",
            population: lunchCal,
            color: "blue",
        },
        {
            name: "Dinner",
            population: dinnerCal,
            color: "red",
        },
    ]

    return(
        <View style={nutritionStyle.card}>
            <View style={nutritionStyle.cardTopContent}>
                <View style={nutritionStyle.containerVisualizer}>
                <PieChart
                    data={data}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    hasLegend={false}
                    style={nutritionStyle.test}
                    width={190}
                    height={120}
                    center={[50,0]}
                />
                </View>
                <View style={nutritionStyle.statsContent}>
                    <View style={nutritionStyle.leftContainer}>
                        <View style={nutritionStyle.leftTopContainer}>
                            <View style={[nutritionStyle.square, {backgroundColor: 'green'}]}></View>
                            <Text style={nutritionStyle.nutritionTitle}>Breakfast</Text>
                        </View>
                        <View style={nutritionStyle.leftBottomContainer}>
                            <View style={[nutritionStyle.square, {backgroundColor: 'red'}]}></View>
                            <Text style={nutritionStyle.nutritionTitle}>Dinner</Text>
                        </View>
                    </View>
                    <View style={nutritionStyle.rightContainer}>
                        <View style={nutritionStyle.leftTopContainer}>
                            <View style={[nutritionStyle.square, {backgroundColor: 'blue'}]}></View>
                            <Text style={nutritionStyle.nutritionTitle}>Lunch</Text>
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
                        {food}
                    </Text>
                </View>
                <View style={nutritionStyle.statsContainer}>
                <Text style={nutritionStyle.statsText}>
                        Goal
                    </Text>
                    <Text style={nutritionStyle.statsText}>
                        {calories}
                    </Text>
                </View>
            </View>
        </View>  
    )
}

const nutritionStyle = StyleSheet.create({
    card: {
        width: width - 10,
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
        width: width - 10,
        height: height / 15,
        borderTopColor: Color.white,
        borderBottomColor: Color.white,
        borderTopWidth: 1,
        borderBottomColorWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '7%',
        paddingRight: '7%'
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
        borderColor: Color.white,
        width: 110,
        height: 110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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