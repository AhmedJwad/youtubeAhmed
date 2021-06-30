import React from 'react'
import { View, Text ,Image} from 'react-native'
import { Commet } from '../../src/models'
interface VdeoComments {
    comment:Commet;
      
}
const VideoComment = ({comment}:VdeoComments) => {
    return (       
        <View style={{flexDirection:'row', alignItems:'center', padding:10, marginVertical:10 }}>        
        <Image style={{width:35 , height:35 , borderRadius:20}} source={{uri:comment.User?.image}} />        
       <Text style={{color:'white',  marginLeft:10}}>{comment.commet}</Text>                     
      </View>   
      
    )
}

export default VideoComment
