import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';
import Login from './app/screens/LoginScreen/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
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