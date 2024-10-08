import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigation/appNavigator';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet } from 'react-native';

const App = () => {
  useEffect(() => {
    // Hide the splash screen when the component mounts.
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
