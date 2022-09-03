import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { View,Text,StyleSheet,Image} from 'react-native'
import { TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import profile_image from '../assets/images/profile_image.png'
import empty_list from '../assets/images/empty_list.png'


export default function LogScreen(){
     

     return(
            <SafeAreaView>
                    <View style={styles.appName_container}>
                       <Text style={styles.appName}>Assignments</Text>

                       <Image style={styles.image} source={profile_image}/>
                    </View>

                    <View style={styles.empty_imageContainer}>
                        <Image style={styles.empty_image}source={empty_list}/>
                        <Text style={styles.title}>There are no assignments.</Text>
                        <Text style={styles.title}> Add an assignment</Text>
                   

                    </View>


                   <View style={styles.touchable_view}>
                         <TouchableOpacity style={styles.touch_opacity}>
                         <AntDesign  name = "pluscircle" size={60} color ="#f97068"/>  
                         </TouchableOpacity> 
                   </View>

           
           </SafeAreaView>
)} 


const styles=StyleSheet.create({
 
  touchable_view:{
     flex:1,
  },

  touch_opacity:{
     position:'absolute',
     marginTop:120,
     marginLeft:280,
     
  },

  appName_container:{
     flexDirection:'row',  
     marginLeft:30, 
      

  },

  appName: { 
     textAlign: 'center',
     fontFamily: 'Gt-Walsheim',
     fontSize: 26,
     marginTop: 19, 
     textShadowColor: '#f97068', 
     textShadowRadius: 2, 
     textShadowOffset: { width: 1 },
     letterSpacing: 2,
},

 image: {
     flex:4,
     resizeMode: 'contain',
     width: 60,
     height:60,
     marginLeft:80,
     
   },

   empty_imageContainer: {
     height:400,
     marginTop: 50
     
   },

   empty_image: {
     flex:4,
     resizeMode: 'contain',
     width: '80%',
     marginHorizontal:50,
     marginTop:70
   },

   title: {
     color:"grey",
     textAlign:'center',
     fontSize: 22,
     fontWeight:"bold",
     fontFamily: 'Gt-Walsheim',
     lineHeight: 30,
     paddingBottom: 0
   }

})

