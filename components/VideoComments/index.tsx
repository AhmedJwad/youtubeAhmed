import React , {useState} from 'react'
import { View , TextInput , Pressable} from 'react-native';
import { BottomSheetFlatList} from '@gorhom/bottom-sheet'
import VideoComment from '../VideoComment';
import { Feather } from '@expo/vector-icons';
import {Auth, DataStore} from 'aws-amplify';
import {Commet} from '../../src/models';
interface VideoCommentsProp {
    comments:Commet[];
    videoID:string;
}
const VideoComments = ({comments , videoID}:VideoCommentsProp) => {
    const [newComments, setNewcomments] = useState('')
    const sendComments=async()=>{
        const userInfo=await Auth.currentAuthenticatedUser();
        await DataStore.save(new Commet({
            commet:newComments,
            likes:0,
            dislikes:0,
            replies:0,   
            videoID,  
            userID:userInfo.attributes.sub,                   
        }))
        setNewcomments("")
    }
    return (
        <View style={{backgroundColor:"#141414", flex:1}}>
            <View style={{flexDirection:'row', justifyContent:"center", alignItems:'center'}}>
            <TextInput
             placeholder="what do you think"
             value={newComments}          
            onChangeText={setNewcomments}
            placeholderTextColor="grey"
            style={{backgroundColor:'#010101' ,padding:10 , color:"white",  flex:1}}
            />            
            <Pressable onPress={sendComments}>
            <Feather name="send" size={24} color="white" />
            </Pressable>
            </View>         
            <BottomSheetFlatList
             data={comments}
             renderItem={({item}) => <VideoComment comment={item} />}
            />
        </View>
    )
}

export default VideoComments
