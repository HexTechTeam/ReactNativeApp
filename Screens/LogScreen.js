import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { View } from 'react-native'
import { TouchableOpacity} from 'react-native';



export default function LogScreen(){
     

     return(

<View style={{flex:1}}>
  
     <TouchableOpacity style={{position:'absolute',marginTop:580,marginLeft:275,}}>

        <AntDesign name="pluscircle" size={60} color="grey"/>  

     </TouchableOpacity>          

</View>
     )
} 


