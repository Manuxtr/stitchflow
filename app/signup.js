import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, useRouter } from "expo-router";
import { useFormik } from "formik";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, } from "react-native-safe-area-context";
import { signUpValidation } from "../components/signupvalidation";
import { useAuth } from "../config/AuthContest";
import { appColors } from "../utilities/apptheme";
import { appStyles } from "../utilities/mainstyle";





export default function Signup() {

    const { signUp } = useAuth();
    const [isLoading, setisLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showcomPassword, setShowcomPassword] = useState(false)

    const router = useRouter();

    //   password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const togglePasswordVisibility2 = () => {
        setShowcomPassword(!showcomPassword)
    }

    const { handleBlur, handleChange, handleSubmit, errors, values } = useFormik({
        initialValues: { username: "", fullname: "", phone: "", email: "", password: "", passwordConfirmation: "" },
        onSubmit: async () => {
            setisLoading(true);
            try {
                // call signUp from AuthContext
                const { success, error } = await signUp(values);
                if (!success) {
                    Alert.alert("Signup failed", error || "Please try again");
                    setisLoading(false);
                    return;
                }
                setisLoading(false);
                router.replace("/(tabs)/homepage");
            } catch (err) {
                console.error("Signup error:", err);
                Alert.alert("Signup failed", "An unexpected error occurred");
                setisLoading(false);
            }
        },
        validationSchema: signUpValidation
    });

    return (
        <SafeAreaProvider>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, }}
                keyboardVerticalOffset={Platform === "IOS" ? 90 : 10}
            >
                <ScrollView>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 90 }}>
                        <Text>Create new account</Text>
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
                                keyboardType="default"
                                placeholder="e.g Daniel Praise"
                                placeholderTextColor="black"
                                style={appStyles.inputField}
                                value={values.fullname}
                                onChangeText={handleChange("fullname")}
                                onBlur={handleBlur("fullname")}

                            />
                            {/* <View>
                                { touched.fullname && errors.fullname && (
                                <Text>{errors.fullname}</Text>)}
                            </View> */}

                            <TextInput
                                keyboardType="default"
                                placeholder="e.g @danny001"
                                placeholderTextColor="black"
                                style={appStyles.inputField}
                                value={values.username}
                                onChangeText={handleChange("username")}
                                onBlur={handleBlur("username")}
                            />
                            {/* <Text>{errors.username}</Text> */}
                            <TextInput
                                keyboardType="phone-pad"
                                placeholder="e.g 09132810490"
                                placeholderTextColor="black"
                                style={appStyles.inputField}
                                value={values.phone}
                                onChangeText={handleChange("phone")}
                                onBlur={handleBlur("phone")}
                            />
                            {/* <View><Text>{errors.phone}</Text></View> */}
                            <TextInput
                                keyboardType="email-address"
                                placeholder="e.g danny@gmail.com "
                                placeholderTextColor="black"
                                style={appStyles.inputField}
                                value={values.email}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                            />
                            {/* <View><Text>{errors.email}</Text></View> */}
                            <View style={appStyles.eyeview}>
                                <TextInput
                                    keyboardType="default"
                                    secureTextEntry={!showPassword}
                                    placeholder="create password"
                                    placeholderTextColor="black"
                                    style={{ flex: 1 }}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility}>
                                    <FontAwesome5 name={showPassword ? "eye-slash" : "eye"} size={24} color={appColors.navy} />
                                </TouchableOpacity>
                            </View>
                            {/* <View><Text style={{color:"red",fontSize:12}}>{errors.password}</Text></View> */}
                            <View style={appStyles.eyeview}>
                                <TextInput
                                    keyboardType="default"
                                    secureTextEntry={!showcomPassword}
                                    placeholder="confirm password"
                                    placeholderTextColor="black"
                                    style={{ flex: 1 }}
                                    value={values.passwordConfirmation}
                                    onChangeText={handleChange("passwordConfirmation")}
                                    onBlur={handleBlur("passwordConfirmation")}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility2}>
                                    <FontAwesome5 name={showcomPassword ? "eye-slash" : "eye"} size={24} color={appColors.navy} />
                                </TouchableOpacity>
                            </View>
                            <View><Text>{errors.passwordConfirmation}</Text></View>
                            <TouchableOpacity onPress={handleSubmit}>
                                <View style={{ height: 50, width: 300, backgroundColor: appColors.navy, justifyContent: "center", alignItems: "center", borderRadius: 15 }}>
                                    {isLoading ? <ActivityIndicator size={"small"} color="red" /> :
                                        <Text style={{ fontSize: 15, color: "white", fontWeight: "600" }}>Sign up</Text>}
                                </View>
                            </TouchableOpacity>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
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

