import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './components/app-container';
import Main from './screens/main'

export default function App() {
  return (
    <AppContainer>
    <Main />
    </AppContainer>
  );
}

