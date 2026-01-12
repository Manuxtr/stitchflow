import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, TouchableOpacity, View ,TextInput, Image,Alert} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../utilities/mainstyle";
import { Link } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { appColors } from '../../utilities/apptheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';



export default function History(){
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
                Alert.alert("An error occurred while uploading the image.");  
            }
        };

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1}}>
                <View style={{paddingHorizontal:7}}>
                    {/* card */}
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
                            <Text style={{fontSize:18,color:"white",fontFamily:"AvegasRoyale-Bold"}}>Date Joined  {new Date().toLocaleString('en-US', {month:"short", year: 'numeric' })}</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
                        <Text style={{fontSize:20,fontWeight:"700",color:appColors.navy}}>ORDER MANAGEMENT</Text>
                    </View>
                      
                        <TouchableOpacity style={{flexDirection:"row",alignItems:"center",gap:10}}>
                            <View style={appStyles.viewMeasurements}>
                            <FontAwesome5 name="eye" size={24} color={appColors.navy} />
                            <Text style={appStyles.ViewMtext}>View Measurements</Text>
                             </View>
                        </TouchableOpacity>
                   
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10,marginTop:20}}>
                        <MaterialIcons name="delivery-dining" size={44} color={appColors.navy}/>
                        <TextInput
                        keyboardType="default"
                        placeholder="enter tracking id"
                        style={appStyles.textinput}
                        placeholderTextColor="black"
                        />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:20}}>
                       <TouchableOpacity>
                         <View>
                            <FontAwesome5 name="edit" size={24} color={appColors.navy} />
                            <Text style={{fontSize:14,fontWeight:"800",color:appColors.navy}}>Edit</Text>
                        </View>
                       </TouchableOpacity>
                       <TouchableOpacity>
                          <View style={{justifyContent:"center",alignItems:"center"}}>
                            <MaterialIcons name="delete" size={24} color={appColors.navy} />
                            <Text style={{fontSize:14,fontWeight:"800",color:appColors.navy}}>Delete</Text>
                         </View>
                       </TouchableOpacity>

                    </View>
                </View>
                    
                {/* <Link href={"/signup"}>
                <Text>TO SIGN IN</Text>
                </Link> */}
              
            </SafeAreaView>
        </SafeAreaProvider>
    )
}