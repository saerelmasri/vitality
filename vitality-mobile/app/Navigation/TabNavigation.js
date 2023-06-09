import { Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';



import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
import Nutrition from '../screens/NutritionScreen/Nutrition';
import Macros from '../screens/MacrosScreen/Macros';
import FoodListing from '../screens/FoodListingScreen/FoodListing';
import FoodDetail from '../screens/FoodDetailScreen/FoodDetail';

import WelcomeKitchen from '../screens/KitchenWelcome/KitchWelcome';
import Recipes from '../screens/RecipesScreen/RecipesScreen';
import RecipesDescription from '../screens/RecipeDescription/RecipeDescription';

import WorkoutDashboard from '../screens/WorkoutScreen/WorkoutScreen';
import ExerciseListing from '../screens/ExerciseListing/ExerciseListing';

import PlaygroundDashboard from '../screens/PlaygroundDashboard/PlaygroundScreen';
import ActivityInfo from '../screens/CreatePartyScreens/ActivityInfo/ActivityInfo';
import InviteFriends from '../screens/CreatePartyScreens/InviteScreen/InviteScreenStyling';
import Trophy from '../screens/CreatePartyScreens/TrophyScreen/TrohpyScreen';
import Leaderboard from '../screens/LeaderboardScreen/LeaderboardScreen';
import Invitation from '../screens/InvitationScreen/Invitation';
import InvitationDetail from '../screens/InvitationDetail/InvitationDetail';
import ActivityToStart from '../screens/ActivityToStart/ActivityToStart';
import OnGoingActivity from '../screens/CreatePartyScreens/OngoingActivityScreen/OngoingActivityScreen';

import Success from '../Components/SuccessScreen/success';
import FriendList from '../screens/FriendList/FriendList';
import Profile from '../screens/ProfileScreen/Profile';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CoachDashboard from '../screens/CoachesDashboard/CoachesDashboard';
import CoachInfo from '../screens/CoachInfo/CoachInfo';

const NutritionDashboard = () => {

  return (
    <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Nutrition" component={Nutrition} options={{headerShown:true, headerTitle: 'Nutrition', headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="Macros" component={Macros} options={{headerShown:true, headerTitle: 'Diary', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="FoodListing" component={FoodListing} options={{headerShown:true, headerTitle: '', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="FoodDetail" component={FoodDetail} options={{headerShown:true, headerTitle: '', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="WelcomeKitchen" component={WelcomeKitchen} options={{headerShown:true, headerTitle: '', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="RecipeDashboard" component={Recipes} options={{headerShown:true, headerTitle: '', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="RecipeDescription" component={RecipesDescription} options={{headerShown:true, headerTitle: '', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
    </Stack.Navigator>
  );
}

const Home = () => {
  
    return (
      <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:true, headerTitle: 'Home', headerStyle: {backgroundColor: '#127369' , elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/> 
      </Stack.Navigator>
    );
}

const Workout = () => {
    return (
      <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WorkoutDashboard" component={WorkoutDashboard} options={{headerShown:true, headerTitle: 'Discover', headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="ExerciseListing" component={ExerciseListing} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="CoachDashboard" component={CoachDashboard} options={{headerShown:true, headerTitle: 'Coaches', headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="CoachInfo" component={CoachInfo} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTransparent: true, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
      </Stack.Navigator>
    );
}

const Playground = () => {
  const navigation = useNavigation();
    return (
      <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PlaygroundDashboard" component={PlaygroundDashboard} options={{headerShown:true, headerTitle: 'Playground', headerLeft: null, headerStyle: {backgroundColor: '#127369',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="Leaderboard" component={Leaderboard} options={{headerShown:true, headerTitle: 'LeaderBoard', headerLeft: null, headerStyle: {backgroundColor: '#127369',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="Invitations" component={Invitation} options={{headerShown:true, headerTitle: 'Invitations', headerLeft: null, headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="ActivityInfo" component={ActivityInfo} options={{headerShown:true, headerTitle: 'Create Challenge', headerLeft: () => (
      <Pressable onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={30} />
      </Pressable>
      ) , headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="InviteFriends" component={InviteFriends} options={{headerShown:true, headerTitle: '', headerLeft: null, headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30,}}}/>
        <Stack.Screen name="onGoingActivity" component={OnGoingActivity} options={{tabBarVisible: false }}/>
        <Stack.Screen name="WinnerLoser" component={Trophy} options={{headerShown:false}}/>
        <Stack.Screen name="InvitationDetail" component={InvitationDetail} options={{headerShown:true, headerTitle: 'Invitation Details', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 25}}}/>
        <Stack.Screen name="ActivityToStart" component={ActivityToStart} options={{headerShown:true, headerTitle: 'Challenge Dashboard', headerTitleAlign: "center", headerStyle: {backgroundColor: '#127369', elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 25}}}/>
      </Stack.Navigator>
    );
}

const ProfileDashboard = () => {
  const navigation = useNavigation();
    return (
      <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:true, headerTitle: 'Profile', headerStyle: {backgroundColor: '#127369'}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
        <Stack.Screen name="FriendList" component={FriendList} options={{headerShown:true, headerTitle: 'Friends', headerStyle: {backgroundColor: '#127369'}, headerTitleStyle:{color: '#fff', fontSize: 30}, headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="arrow-left" size={30} />
            </Pressable>
          ),}} />
        <Stack.Screen name="Success" component={Success} options={{headerShown:false}} />
      </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Nutrition"
                component={NutritionDashboard}
                options={{
                    tabBarLabel: 'Nutrition',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="nutrition" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Workout"
                component={Workout}
                options={{
                    tabBarLabel: 'Workout',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Playground"
                component={Playground}
                options={{
                    tabBarLabel: 'Playground',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="trophy" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileDashboard}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabs

