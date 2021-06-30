import React from 'react'
import { View, Text , Image , Pressable , ScrollView} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import styles  from './styles';
import {useNavigation} from '@react-navigation/native'
import {Video} from '../../src/models'
type VidoeListItemProps={
        video:Video;    
    
}

const VideoListItem = (props:VidoeListItemProps) => {
   const {video}=props;  
   const Navigation=useNavigation();
   const minutes=Math.floor(video.duration / 60);
   const second=video.duration % 60;
    
   let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + "m";
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + "k";
  }
  const openVdeoPage=()=>{
      Navigation.navigate("videoScreen" , {id:video.id})
  }

    return (     
                   
           <Pressable onPress={openVdeoPage} style={styles.videoCard}>
               {/* Video component */}
           {/* thamnail */}
            <View>
            <Image style={styles.thabmnail} source={{uri:video.thumbnail}}/>
            <View style={styles.timerContainer}>
                <Text style={styles.time}>{minutes}:{second < 10 ? '0' : ''}{second}</Text>
            </View>
            </View>
           {/* Ttle row */}
           <View style={styles.titleRow}>
               {/* avator */}
               <Image style={styles.avator} source={{uri:video.User?.image}}/>

               {/* middle container with title and subtitle  */}
               <View style={styles.middleContainer}>
                   <Text style={styles.title}>{video.title}</Text>
                   <Text style={styles.subtitle}>{video.User?.name} {viewsString}  {video.createdAt}</Text>
                   
               </View>

               {/* icon */}
               <Entypo name="dots-three-vertical" size={16} color="white" />
           </View>
           </Pressable>
           
       
    )
   
}

export default VideoListItem
