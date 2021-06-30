import React , {useRef , useState , useEffect} from 'react'
import { View, Text , Image, SafeAreaView , ScrollView , FlatList,
Pressable} from 'react-native'
import {useRoute} from '@react-navigation/native';
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import VideoListItem from '../../components/VdeoListItem';
import VideoPlayer from '../../components/VideoPlayer'
import BottomSheet , {BottomSheetModalProvider , BottomSheetModal} from '@gorhom/bottom-sheet';
import VideoComments from '../../components/VideoComments';
import VideoComment from '../../components/VideoComment'
import { Video , Commet } from '../../src/models';
import { ActivityIndicator } from 'react-native';
import {DataStore} from 'aws-amplify';


const VideoScreen = () => {
  const [video, setvideo] = useState<Video  | undefined>(undefined)
  const [commets, setCommets] = useState<Commet[]>([])
  const route=useRoute();
  const videoId=route.params?.id;
  useEffect(() => {   
    DataStore.query(Video, videoId).then(setvideo);
  }, [videoId])
  const commentSheetRef=useRef<BottomSheetModal>(null);
  
  const openComments=()=>{
    commentSheetRef.current?.present();
  }
  useEffect(() => {
    const fetchcomment=async()=>{
     const videoComment=(await  (await DataStore.query(Commet))
     .filter(comment=>comment.videoID===video?.id));
     setCommets(videoComment)
     console.log(videoComment)
    }   
   
   fetchcomment();
  }, [video])
  if(!video)
  {
    return<ActivityIndicator/>
  } 
  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + "m"
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + "k"
  }
    return (
      
        <View style={{backgroundColor:'#141414' , flex:1}}>
          {/* video player */}
          <VideoPlayer videoUri={video.videoUrl} thubmnailURI={video.thumbnail}/>       
          <View style={{flex:1}}>
          {/* video info */}
          <View style={styles.VideoInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
                   <Text style={styles.subtitle}>{video.User?.name} {viewsString}  {video.createdAt}</Text>
          </View>
          {/* Action list */}
           <View style={styles.ActionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <View style={styles.ActionListItem}>
              <AntDesign name='like1' size={30} color='lightgrey' />
              <Text style={styles.actonText}>{video.likes}</Text>
            </View>
            <View style={styles.ActionListItem}>
              <AntDesign name='dislike2' size={30} color='lightgrey' />
              <Text style={styles.actonText}>{video.dislikes}</Text>
            </View>
            <View style={styles.ActionListItem}>
            <Entypo name="share" size={30} color="lightgrey" />
              <Text style={styles.actonText}>{video.dislikes}</Text>
            </View>
            <View style={styles.ActionListItem}>
              <AntDesign name='download' size={30} color='lightgrey' />
              <Text style={styles.actonText}>{video.dislikes}</Text>
            </View>
            <View style={styles.ActionListItem}>
              <AntDesign name='download' size={30} color='lightgrey' />
              <Text style={styles.actonText}>{video.dislikes}</Text>
            </View>
            <View style={styles.ActionListItem}>
              <AntDesign name='download' size={30} color='lightgrey' />
              <Text style={styles.actonText}>{video.dislikes}</Text>
            </View>
            <View style={styles.ActionListItem}>
              <AntDesign name='download' size={30} color='lightgrey' />
              <Text style={styles.actonText}>{video.dislikes}</Text>
            </View>
          </ScrollView>
          </View>
          {/* user info */}
          <View style={{flexDirection:'row', alignItems:'center', padding:10, borderColor:"#3d3d3d",
         borderTopWidth:1 , borderBottomWidth:1}}>
            <Image style={styles.avatar} source={{uri:video.User?.image}} />
            <View style={{marginHorizontal:10 , flex: 1,}}>
              <Text style={{color:'white', fontSize:18 , fontWeight:'bold'}}>{video.User?.name}</Text>
              <Text style={{color:'white', fontSize:18 , fontWeight:'bold'}}>{video.User?.subscribers}subscribers</Text>

            </View>
            <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold', padding: 10}}>Subscribe</Text>
          </View>

        {/* comments */}
        <Pressable onPress={openComments} style={{padding:10, marginVertical:10,}}>   
          <Text style={{color:'white'}}>comments 333</Text>   
          {commets.length > 0 &&<VideoComment comment={commets[0]}/>}
        </Pressable>
        {/* All comments */} 
          <BottomSheetModal ref={commentSheetRef} snapPoints={["70%"]} index={0}
            backgroundComponent={({style})=> <View style={[style, {backgroundColor:"#4d4d4d"}]}/>}
            >
            <VideoComments comments={commets} videoID={video.id}/>
          </BottomSheetModal>
          </View>
        </View>
    )
}

const VideoScreenWithRecommendation=()=>{
  const [videos, setVideos] = useState<Video[]>([])
  useEffect(() => {
    //fetch videos    
    DataStore.query(Video).then(setVideos)
}, [])
  return (
    <SafeAreaView style={{backgroundColor:'#141414' , flex:1}}>
     <BottomSheetModalProvider>
     <FlatList
        data={videos}
        // renderItem={({item})=> <VideoScreen video={item}/>} 
        renderItem={({item})=> <VideoListItem video={item}/>}
        ListHeaderComponent={VideoScreen}
        /> 
     </BottomSheetModalProvider>   
   </SafeAreaView>
  )
}

export default VideoScreenWithRecommendation
