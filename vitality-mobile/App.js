import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import Login from './app/screens/LoginScreen/Login';
import Register from './app/screens/RegisterScreen/Register';
import WeightHeight from './app/screens/WeightHeightScreen/WeightHeight';
import Gender from './app/screens/GenderScreen/Gender';
import Age from './app/screens/AgeScreen/Age';
import Goal from './app/screens/GoalsScreen/Goal';
import Diet from './app/screens/DietScreen/Diet';
import ActivityLevel from './app/screens/ActivityLevelScreen/ActivityLevel';
import Success from './app/Components/SuccessScreen/success';
import Nutrition from './app/screens/NutritionScreen/Nutrition';
import Macros from './app/screens/MacrosScreen/Macros';
import FoodListing from './app/screens/FoodListingScreen/FoodListing';
import FoodDetail from './app/screens/FoodDetailScreen/FoodDetail';
import WelcomeKitchen from './app/screens/KitchenWelcome/KitchWelcome';
import Recipes from './app/screens/RecipesScreen/RecipesScreen';
import RecipesDescription from './app/screens/RecipeDescription/RecipeDescription';
import WorkoutDashboard from './app/screens/WorkoutScreen/WorkoutScreen';
import VideoListing from './app/screens/VideoListing/VideoListing';
import ExerciseListing from './app/screens/ExerciseListing/ExerciseListing';
import PlaygroundDashboard from './app/screens/PlaygroundDashboard/PlaygroundScreen';
import SelectActivity from './app/screens/CreatePartyScreens/SelectActivityScreen/SelectScreen';
import ActivityInfo from './app/screens/CreatePartyScreens/ActivityInfo/ActivityInfo';
import InviteFriends from './app/screens/CreatePartyScreens/InviteScreen/InviteScreenStyling';
import Trophy from './app/screens/CreatePartyScreens/TrophyScreen/TrohpyScreen';
import onGoingActivity from './app/screens/CreatePartyScreens/OngoingActivity/onGoingActivity';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Weight/Height"
          component={WeightHeight}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Age"
          component={Age}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Goal"
          component={Goal}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Diet"
          component={Diet}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityLevel}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Nutrition"
          component={Nutrition}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name="Macros"
          component={Macros}
          options={{headerShown:false}}
        /> */}
        {/* <Stack.Screen
          name="FoodListing"
          component={FoodListing}
          options={{headerShown:false}}
        /> */}
        {/* <Stack.Screen
          name="FoodDetail"
          component={FoodDetail}
          options={{headerShown:false}}
        /> */}
        {/* <Stack.Screen
          name="WelcomeKitchen"
          component={WelcomeKitchen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="RecipeDashboard"
          component={Recipes}
          options={{headerShown:false}}
        /> 
        <Stack.Screen
          name="RecipeDescription"
          component={RecipesDescription}
          options={{headerShown:false}}
        /> */}
        {/* <Stack.Screen
          name="WorkoutDashboard"
          component={WorkoutDashboard}
          options={{headerShown:true, headerTitle: 'Discover', headerStyle: {backgroundColor: '#127369'}, headerTitleStyle:{color: '#fff', fontSize: 30}}}
        />
        <Stack.Screen
          name="VideoListing"
          component={VideoListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExerciseListing"
          component={ExerciseListing}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="RunningDashboard"
          component={PlaygroundDashboard}
          options={{headerShown:true, headerTitle: 'Playground', headerStyle: {backgroundColor: '#127369'}, headerTitleStyle:{color: '#fff', fontSize: 30}}}
        /> */}
        {/* <Stack.Screen
          name="SelectActivity"
          component={SelectActivity}
          options={{headerShown:false}}
        /> */}
        {/* <Stack.Screen
          name="ActivityInfo"
          component={ActivityInfo}
          options={{headerShown:false}}
        /> */}
        {/* <Stack.Screen
          name="InviteFriends"
          component={InviteFriends}
          options={{headerShown:false}}
        /> */}
        {/* <Stack.Screen
          name="Trophy"
          component={Trophy}
          options={{headerShown:false}}
        /> */}
        <Stack.Screen
          name="onGoingActivity"
          component={onGoingActivity}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}