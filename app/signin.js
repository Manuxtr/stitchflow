import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link ,useRouter} from "expo-router";
import { Alert, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appColors } from "../utilities/apptheme";
import { appStyles } from "../utilities/mainstyle";
import { useState } from 'react';
import { useAuth } from '../config/AuthContest';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseconfig';





export default function Signin() {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const {login} = useAuth()
const [isLaoading,setIsLoading] = useState(false)


const router = useRouter()

const handleLogin = async () => {
    setIsLoading(true)
    try {
        const userCredentail = await signInWithEmailAndPassword(auth,email,password);
        await login({
            uid:userCredentail.uid,
            email:userCredentail.user.email
        });
        setIsLoading(false)
        router.replace("/(tabs)/homepage")
    } catch (error) {
        Alert.alert("login error","an error occured,try again")
        setIsLoading(false)
        
    }

}
 

    return (
        <SafeAreaProvider>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 210 }}>
                        <Text>Sign in account</Text>
                        <TouchableOpacity style={appStyles.googlebtn}>
                            <Image
                                source={require("../assets/images/googlelogo.png")}
                            />
                            <Text style={{ color: "white", fontSize: 16 }}>Google</Text>
                        </TouchableOpacity>
                        {/* or section */}
                        <View style={appStyles.orsection}>
                            <View style={appStyles.line}></View>
                            <Text style={appStyles.ortext}>OR</Text>
                            <View style={appStyles.line}></View>
                        </View>
                        {/* form */}
                        <View style={{ flex: 1, gap: 20 }}>



                            <TextInput
                                keyboardType="email-address"
                                placeholder="e.g danny@gmail.com "
                                placeholderTextColor="black"
                                style={appStyles.inputField}
                                value={email}
                                onChangeText={setEmail}
                                
                            />
                            <View style={appStyles.eyeview}>
                                <TextInput
                                    keyboardType="default"
                                    secureTextEntry={true}
                                    placeholder="enter password"
                                    placeholderTextColor="black"
                                    style={{ flex: 1 }}
                                    value={password}
                                    onChangeText={setPassword}
                                
                                />
                                <TouchableOpacity>
                                    <FontAwesome5 name="eye" size={24} color={appColors.navy} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={handleLogin}>
                                <View style={{ height: 50, width: 300, backgroundColor: appColors.navy, justifyContent: "center", alignItems: "center", borderRadius: 15 }}>
                                    <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>Sign in</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Link href={"/signup"}>
                                    <Text>{"New here?? go to sign up"}</Text>
                                </Link>
                            </View>
                            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
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