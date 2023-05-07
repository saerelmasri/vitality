import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import Login from '../screens/LoginScreen/Login';
import Register from '../screens/RegisterScreen/Register';
import WeightHeight from '../screens/WeightHeightScreen/WeightHeight';
import Gender from '../screens/GenderScreen/Gender';
import Age from '../screens/AgeScreen/Age';
import Goal from '../screens/GoalsScreen/Goal';
import Diet from '../screens/DietScreen/Diet';
import ActivityLevel from '../screens/ActivityLevelScreen/ActivityLevel';
import Success from '../Components/SuccessScreen/success';
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const RegistrationStack = () => {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      <Stack.Screen name="Weight/Height" component={WeightHeight} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#8AA6A3',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
      <Stack.Screen name="Gender" component={Gender} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#8AA6A3',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
      <Stack.Screen name="Age" component={Age} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#8AA6A3',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
      <Stack.Screen name="Goal" component={Goal} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#8AA6A3',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
      <Stack.Screen name="Diet" component={Diet} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#8AA6A3',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
      <Stack.Screen name="Activity" component={ActivityLevel} options={{headerShown:true, headerTitle: '', headerStyle: {backgroundColor: '#8AA6A3',  elevation: 0}, headerTitleStyle:{color: '#fff', fontSize: 30}}}/>
      <Stack.Screen name="Success" component={Success} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default RegistrationStack
