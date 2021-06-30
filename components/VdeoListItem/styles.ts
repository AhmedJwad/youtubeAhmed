import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    thabmnail:{
        width:'100%',
        aspectRatio:16/9,
    },
    timerContainer:{
        backgroundColor:"#00000099",
        width:60,
        height:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        position:'absolute',
        right: 5,
        bottom:5     
    },
    time:{
        color:'white',
        fontWeight:'bold'
    },
    videoCard:{
        marginVertical:15,
    },
    titleRow:{
        flexDirection:'row',
        padding:10,
    },
    avator:{
        width:50,
        height:50,
        borderRadius:25,
    },
    middleContainer:{
        marginHorizontal:10,
        flex:1,
    },
     title:{
         color:'white',
         fontSize:18,
         fontWeight:'500',
         marginBottom:5,
     },
     subtitle:{
        color:'grey',
        fontSize:14,
        fontWeight:'500'
     }
});
export default styles;