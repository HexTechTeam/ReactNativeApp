import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './.expo-shared/Screens/HomeScreen';
import LogScreen from './.expo-shared/Screens/LogScreen';

export default function Flex(){

  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
     <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen 
       options={{headerShown:false,}}
       name="Onboarding" component={HomeScreen} />
      
      <Stack.Screen name="Assignment" component={LogScreen} />
      
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

