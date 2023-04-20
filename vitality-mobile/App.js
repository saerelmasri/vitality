import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen/>
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