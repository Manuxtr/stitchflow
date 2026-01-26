import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,TouchableOpacity, Alert,ActivityIndicator } from "react-native";

import { appStyles } from "../../utilities/mainstyle";
import * as ImagePicker from 'expo-image-picker';

import { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import  {UseAuth} from "../../config/AuthContest"

export default function Settings(){
    const {logout} = UseAuth()
    const [isLoading,setIsLoading] = useState(false)

    const handleLogout = async () => {
        setIsLoading(true)
        try {
            await logout()

            
        } catch (error) {
            Alert.alert("error","logout failed",error)
            setIsLoading(false)
        }

    }

     const [profileImage,setProfileImage] = useState(null);
    
            // function to pick image from gallery
            const pickImage = async () => {
                try {
                    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if(permissionResult.granted === false){
                        Alert.alert("Permission to access gallery is required!");
                        return;
                    }
                    const pickerResult = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes:["images"],
                        allowsEditing:true,
                        aspect:[1,1],
                        quality:1
                    });
                    if(!pickerResult.canceled){
                        setProfileImage(pickerResult.assets[0].uri);
                        Alert.alert("PROFILE IMAGE UPLOAD SUCCESSFUL");
                    };
                } catch (error) {
                    Alert.alert("An error occurred while uploading the image.",error);  
                }
            };
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1,gap:50,paddingHorizontal:7}}>
                {/* profile info */}
                 <View style={appStyles.card}>
                                        {/* card content */}
                                        <View style={appStyles.cardcontent}>
                                            <TouchableOpacity onPress={pickImage}>
                                                {profileImage ? (
                                                    <Image
                                                    source={{uri:profileImage}}
                                                    style={{width:54,height:54,borderRadius:27,borderWidth:2,borderColor:"white"}}
                                                    />
                                                ) :
                                                    <FontAwesome name="user-circle" size={54} color="white" />}
                                            </TouchableOpacity>
                                            <Text style={{fontSize:19,fontWeight:"800",color:"white",fontFamily:"Paterna"}}>Hi Tochukwu</Text>
                                            <Text style={{fontSize:14,color:"white",fontFamily:"AvegasRoyale-Bold"}}>Date Joined  {new Date().toLocaleString('en-US', {month:"short", year: 'numeric' })}</Text>
                                        </View>
                                    </View>
              <View>
              <View>
                  <TouchableOpacity>
                    <Text>Profile Setting</Text>
                </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Delete account</Text>
                </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>change password</Text>
                </TouchableOpacity>
              </View>
                <TouchableOpacity onPress={handleLogout}>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center", gap:15}}>

                  {isLoading ? <ActivityIndicator size={"small"} color={"red"}/> 
                  :
                    <Text>Logout</Text> }
                    <AntDesign name="login" size={24} color="black" />
                </View>
                </TouchableOpacity>
              </View>
                
            </SafeAreaView>
        </SafeAreaProvider>
    )
}