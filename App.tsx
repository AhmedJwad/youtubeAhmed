import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React ,{useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify , {Auth , DataStore} from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {User}  from './src/models';


 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    const saveUserToDb=async()   =>{
      // get user from cagnite
      const userInfo=await Auth.currentAuthenticatedUser();
      if(!userInfo)
      {
        return;
      }
      const userId= userInfo.attributes.sub;
     
      //check user exist in database
      const user=(await DataStore.query(User )).find(user=>user.sub===userId);
      if(!user)
      {
       await DataStore.save(new User({  
         sub:userId,              
         name:userInfo.attributes.email,
         subscribers:0,
       }))
      }else
      {
        console.warn('user already exist in database');
      }


      //if not save user in database
    }
    saveUserToDb();
  }, [])
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {<Navigation colorScheme={'dark'} />}       
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
