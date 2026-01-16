import { View,Text,ScrollView,KeyboardAvoidingView,TouchableOpacity,Image,TextInput,Alert } from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../utilities/mainstyle";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { appColors } from "../utilities/apptheme";
import { Link } from "expo-router";
import { useFormik } from "formik";
import { useAuth } from "../config/authcontext";
import { useState } from "react";
import { signUpSchema } from "../components/signupvalidation";
import { useRouter } from "expo-router";
import { Value } from "react-native/types_generated/Libraries/Animated/AnimatedExports";



export default function Signup(){
    const [signup] = useAuth()
    const [isLoading,setIsLoading] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
     const [showComPassword,setShowComPassword] = useState(false)

     const router = useRouter()

    //  password visibility

    const {handleBlur,handleChange,handleSubmit,handleReset,errors,touched,values} = useFormik({
        initialValues:{fullname:"",username:"",phone:"",email:"",password:"",passwordComfirmation:""},
        onSubmit:async () => {
            setIsLoading(false)
            try {
                const {success,error} = await signup(values);
                if(!success){
                    Alert.alert("signup failed",error || "please try again")
                    setIsLoading(false)
                    return
                }   
                setIsLoading(false)
                router.replace("/(tabs)/homepage")
            } catch (error) {
                Alert.alert("error","an error occures")
                setIsLoading(false)
            }
        },
        validateOnMount:signUpSchema
    })



    return(
        <SafeAreaProvider>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={{justifyContent:"center",alignItems:"center",marginTop:90}}>
                        <Text>Create new account</Text>
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
                            keyboardType="default"
                            placeholder="e.g Daniel Praise"
                            placeholderTextColor="black"
                            style={appStyles.inputField}
                            // value=""
                            // onChangeText={}
                            // onBlur={}
                            />
                            <TextInput
                            keyboardType="default"
                            placeholder="e.g @danny001"
                            placeholderTextColor="black"
                            style={appStyles.inputField}
                            // value=""
                            // onChangeText={}
                            // onBlur={}
                            />
                            <TextInput
                            keyboardType="phone-pad"
                            placeholder="e.g 09132810490"
                            placeholderTextColor="black"
                            style={appStyles.inputField}
                            // value=""
                            // onChangeText={}
                            // onBlur={}
                            />
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
                                placeholder="create password"
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
                            <View style={appStyles.eyeview}>
                                <TextInput
                                keyboardType="default"
                                secureTextEntry={false}
                                placeholder="confirm password"
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
                                <Link href={"/signin"}>
                                    <Text>{"Already have an account?? go to sign in"}</Text>
                                </Link>
                            </View>
                        </View>
                      
                        
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    )
}