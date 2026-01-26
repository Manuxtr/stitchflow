import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { UseAuth } from "../../config/AuthContest";
import { db } from "../../config/firebaseconfig";
import { appStyles } from "../../utilities/mainstyle";

export default function Settings() {
    // All useState hooks must be at the top
    
    const [currentUser, setCurrentUser] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [profileImage, setProfileImage] = useState(null)
    const { logout, user } = UseAuth()




    const handleLogout = async () => {
        setIsLoading(true)
        try {
            await logout()
        } catch (error) {
            console.error("Logout error:", error);
            Alert.alert("Error", "Logout failed");
            setIsLoading(false);
        }
    }

        useEffect(() => {
        if (!user) return;

        const fetchuser = async () => {
            try {
                const userData = await getDoc(doc(db, "users", user.uid))
                if (userData.exists()) {
                    setCurrentUser(userData.data())
                }
            } catch (error) {
                console.error("Fetch user error:", error);
                Alert.alert("Error", "An error occurred while fetching user data")
            }
        }

        fetchuser()
    }, [user])

    // function to pick image from gallery
    const pickImage = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResult.granted === false) {
                Alert.alert("Permission to access gallery is required!");
                return;
            }
            const pickerResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ["images"],
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });
            if (!pickerResult.canceled) {
                setProfileImage(pickerResult.assets[0].uri);
                Alert.alert("PROFILE IMAGE UPLOAD SUCCESSFUL");
            };
        } catch (error) {
            console.error("Image upload error:", error);
            Alert.alert("Error", "An error occurred while uploading the image.");
        }
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, gap: 50, paddingHorizontal: 7 }}>
                {/* profile info */}
                <View style={appStyles.card}>
                    {/* card content */}
                    <View style={appStyles.cardcontent}>
                        <TouchableOpacity onPress={pickImage}>
                            {profileImage ? (
                                <Image
                                    source={{ uri: profileImage }}
                                    style={{ width: 54, height: 54, borderRadius: 27, borderWidth: 2, borderColor: "white" }}
                                />
                            ) :
                                <FontAwesome name="user-circle" size={54} color="white" />}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 19, fontWeight: "800", color: "white", fontFamily: "Paterna" }}> Hi {currentUser?.fullname}</Text>
                        <Text style={{ fontSize: 14, color: "white", fontFamily: "AvegasRoyale-Bold" }}> {currentUser?.createdAt ? new Date(currentUser.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}</Text>
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
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15 }}>

                            {isLoading ? <ActivityIndicator size={"small"} color={"red"} />
                                :
                                <Text>Logout</Text>}
                            <AntDesign name="login" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}