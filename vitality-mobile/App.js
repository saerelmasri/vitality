import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import Login from './app/screens/LoginScreen/Login';
import Register from './app/screens/RegisterScreen/Register';
import VerifyNumber from './app/screens/VerifyNumberScreen/verifyNumber';
import WeightHeight from './app/screens/WeightHeightScreen/WeightHeight';
import Gender from './app/screens/GenderScreen/Gender';
import Age from './app/screens/AgeScreen/Age';
import Goal from './app/screens/GoalsScreen/Goal';
import Diet from './app/screens/DietScreen/Diet';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Diet/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});