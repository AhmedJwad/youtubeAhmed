
import { StyleSheet } from "react-native"
const styles =StyleSheet.create({
    videoPlayer:{
        width:"100%",
        aspectRatio:16/9,
    } , 
    VideoInfoContainer:{
        margin:10,       
    },
     title:{
         color:'white',
         fontSize:18,
         fontWeight:'500',
         marginVertical:10,
     },
     subtitle:{
        color:'grey',
        fontSize:14,
        fontWeight:'500'
     },
     tags:{
        color:'#0094e3',
        fontSize:14,
        fontWeight:'500',
        marginBottom:5,         
     }  ,
     ActionListContainer:{
       marginVertical:10,
     },
     ActionListItem:{
         width:70,
         height:60,
         justifyContent:'center',
         alignItems:'center' ,        

     },
     actonText:{
         color:'white',         
     } ,
     avatar:{
         width:50,
         height:50,
        borderRadius:25
     }         
})

export default styles;