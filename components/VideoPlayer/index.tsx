import React , {useRef} from 'react'
import { View, Text } from 'react-native';
import {  Video } from 'expo-av';

interface VideoPlayerProps {
    videoUri:string,
    thubmnailURI:string;
}
const index = (props:VideoPlayerProps) => {
    const {videoUri ,thubmnailURI} = props;
    const Videoref = useRef<Video>(null)
    const onRefAssign=(VideoElement:Video)=>{      
        console.warn("video is mounted")
        const playbackObject= VideoElement;
        const source={uri:videoUri};
        const initialStatus={};
        playbackObject.loadAsync()
    }
    return (
        <View>
           <Video
             source={{uri:videoUri}}
             posterSource={{uri:thubmnailURI}}
             style={{width:'100%' , aspectRatio:16/9 , }} 
             posterStyle={{resizeMode:'cover'}} 
             usePoster={false}  
             useNativeControls
             resizeMode="contain"       
           />
        </View>
    )
}

export default index
