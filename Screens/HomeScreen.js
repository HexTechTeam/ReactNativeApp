import React from 'react'
import { View, Image,Text, TouchableOpacity, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashImage from '../assets/images/splash_image.png'

export default function HomeScreen(props){

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.appName}>ASSIGNLY</Text>
      
      <View style={styles.splashImageContainer}>
        <Image style={styles.splashImage}
          source={SplashImage}
        />
      </View>
    
      <View>
          <Text style={styles.title}>
            Manage and prioritize your Assignments easily
          </Text>

          <Text style={styles.description}>
            Increase your productivity by managing your personal and team Assignments and do them based on priority!
          </Text>
      </View>

      <TouchableOpacity 
        onPress={() => {props.navigation.navigate("assignment")}} 
        style={styles.getStartedButton}
      >
        <Text style={styles.getStartedButtonText}>
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
     );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: '#FDF6F6'
  },
  getStartedButtonText: {
    padding: 17,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Gt-Walsheim'
  },
  getStartedButton: {
    backgroundColor: '#f97068',
    marginBottom: 30,
    borderRadius: 40,
    marginTop: 'auto',
  },
  title: {
    color:"black",
    textAlign:'center',
    fontSize: 23,
    fontWeight:"bold",
    fontFamily: 'Gt-Walsheim',
    lineHeight: 30,
    paddingBottom: 12
  },
  description: {
    fontSize: 18,
    color: 'grey',
    textAlign:'center',
    lineHeight: 26,
    fontFamily: 'Gt-Walsheim',
  },
  splashImage: {
    flex:4,
    resizeMode: 'contain',
    width: '100%',
  },
  splashImageContainer: {
    height: 400,
    marginBottom: 30
  },
  appName: { 
    textAlign: 'center',
    fontFamily: 'Gt-Walsheim',
    fontSize: 13,
    marginTop: 10, 
    textShadowColor: '#f97068', 
    textShadowRadius: 2, 
    textShadowOffset: { width: 1 },
    letterSpacing: 2,
  }
})