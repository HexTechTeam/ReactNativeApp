import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import LogScreen from './Screens/LogScreen';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts} from 'expo-font'

export default function Flex(){
  const [isReady] = useFonts({
    'Gt-Walsheim': require('./assets/fonts/GT-Walsheim-Pro-Regular.ttf')
  })

  useEffect(() => {
    (async () => {
      if (isReady) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        options={{headerShown:false,}}
        name="onboarding" component={HomeScreen} 
      />
      <Stack.Screen 
        name="assignment" 
        component={LogScreen} 
      />
      </Stack.Navigator>
     </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

