import { View,Text,ScrollView,KeyboardAvoidingView,TouchableOpacity,Image,TextInput } from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../utilities/mainstyle";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { appColors } from "../utilities/apptheme";
import { Link } from "expo-router";




export default function Signup(){
    return(
        <SafeAreaProvider>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <Text>Sign in account</Text>
                        <TouchableOpacity style={appStyles.googlebtn}>
                            <Image
                            source={require("../assets/images/googlelogo.png")}
                            />
                            <Text style={{color:"white",fontSize:16}}>Google</Text>
                        </TouchableOpacity>
                        {/* or section */}
                        <View style={appStyles.orsection}>
                            <View style={appStyles.line}></View>
                            <Text style={appStyles.ortext}>OR</Text>
                            <View style={appStyles.line}></View>
                        </View>
                        {/* form */}
                        <View style={{flex:1 ,gap:20}}>
                          
                        
                          
                            <TextInput
                            keyboardType="email-address"
                            placeholder="e.g danny@gmail.com "
                            placeholderTextColor="black"
                            style={appStyles.inputField}
                            // value=""
                            // onChangeText={}
                            // onBlur={}
                            />
                           <View style={appStyles.eyeview}>
                                <TextInput
                                keyboardType="default"
                                secureTextEntry={false}
                                placeholder="enter password"
                                placeholderTextColor="black"
                                style={{flex:1}}
                                // value=""
                                // onChangeText={}
                                // onBlur={}
                                />
                                 <TouchableOpacity>
                                    <FontAwesome5 name="eye" size={24} color={appColors.navy} />
                                 </TouchableOpacity>
                           </View>
               
                           <TouchableOpacity>
                            <View style={{height:50,width:300,backgroundColor:appColors.navy,justifyContent:"center",alignItems:"center",borderRadius:15}}>
                                <Text style={{fontSize:15,color:"white",fontWeight:"600"}}>Sign up</Text>
                            </View>
                           </TouchableOpacity>
                           <View style={{justifyContent:"center",alignItems:"center"}}>
                                <Link href={"/signup"}>
                                    <Text>{"New here?? go to sign up"}</Text>
                                </Link>
                           </View>
                          <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
                             <View>
                                <Text>{"forget password"}</Text>
                           </View>
                          </TouchableOpacity>
                        </View>
                      
                        
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    )
}