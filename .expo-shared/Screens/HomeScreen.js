import React from 'react'
import { View,Image,Text, TouchableOpacity} from 'react-native'


export default function HomeScreen(){

     return(
    <View style={{
     flex: 1,
   
     paddingTop:45}}>

      <Image style={{
          flex:4,
          margin:15,
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20}}

        source={{uri:'https://i.pinimg.com/736x/f5/8c/d0/f58cd04d858e7dbd2aadbbae6a875cf6.jpg'}}/>
    
      <View style={{flex:2,}}>
          <Text style={{
               color:"black",
               textAlign:'center',
               fontSize:25,
               fontWeight:"bold"
              
             }}>
                Manage and prioritize your Assigments easily
          </Text>

          <Text style={{
               marginVertical:8,
              fontWeight:'bold',
               color:'grey',
               textAlign:'center',
            }}>Increase your productivity by managing your personal and team Assigments and do them based on priority!
          </Text>

          <View style={{flex:1, marginVertical:10,}}>

             <TouchableOpacity style={{
                backgroundColor:'#BF9270',
                marginHorizontal:99,
                marginTop:30,
                borderRadius:40}}>
               <Text style={{
                    padding:15,
                    fontSize:24,
                    fontWeight:'bold'}}>
                      Get Started >>
               </Text>
             </TouchableOpacity>
          </View>



      </View>
    
    </View>
     );
}; 