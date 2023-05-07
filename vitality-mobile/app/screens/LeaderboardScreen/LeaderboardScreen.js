import { View, ScrollView, SafeAreaView } from "react-native";
import Header from "../../Components/PlaygroundHeader/PlaygroundHeader";
import LeaderboardItem from "../../Components/LeaderboardItem/LeaderboardItem";
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '@env'
import Indicator from "../../Components/ActivityIndicator/indicator";
import FirstPlace from "../../Components/FirstPlace/FirstPlace";
import Place from "../../Components/Place/Place";
import { leaderboardStyle } from "./LeaderboardStyling";

const Leaderboard = ({navigation}) => {
    const [JWT, setJWT] = useState('');
    const [ list, setList ] = useState([])
    const [ topThree, setTopThree ] = useState([])
    const [ isLoading, setLoading ] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('jwt')
            .then(token => {
                setJWT(token);
            })
            .catch(error => {
                console.log(error);
            });
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
          try {
            setLoading(true);
            const response = await axios.get(`${BASE_URL}/leaderboard_route/level_leaderboard`, {
              headers: {
                Authorization: JWT,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            setTopThree(response.data.message.slice(0, 3));
            setList(response.data.message);
          } catch (error) {
            console.log(error.response.data);
          } finally {
            setLoading(false);
          }
        };
      
        const intervalId = setInterval(fetchLeaderboard, 60000);
      
        fetchLeaderboard();
      
        return () => clearInterval(intervalId);
    }, [JWT]);

    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={leaderboardStyle.container}>
                <ScrollView>
                    <Header action1={()=> navigation.navigate('PlaygroundDashboard')} action3={() => navigation.navigate('Invitations')}/>
                    { isLoading ? (
                            <Indicator/>
                        ) : (
                            <>
                            <View style={leaderboardStyle.headerContainer}>
                                <View style={leaderboardStyle.boardContainer}>
                                    {list[2] && <Place position={'3'} avatar={list[2].photo_url} />}
                                    {list[0] && <FirstPlace avatar={list[0].photo_url}/>}
                                    {list[1] && <Place position={'2'} avatar={list[1].photo_url}/>}
                                </View>
                            </View>
                            <View style={leaderboardStyle.leaderboard}>
                                <ScrollView>
                                    {
                                        list.map((item, index) => (
                                            <LeaderboardItem position={index + 1} name={item.full_name} level={item.level}/>
                                        ))
                                    }   
                                </ScrollView>
                            </View>    
                            </>
                        )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Leaderboard