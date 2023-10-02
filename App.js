import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainNavigator from './Navigation';

export default function App() {
  //Contenedor de la navegacion base
  return (
    <MainNavigator />
  );
}

const styles = StyleSheet.create({
});
