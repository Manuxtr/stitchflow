import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { Link } from "expo-router";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { UseAuth } from "../../config/AuthContest";
import { db } from "../../config/firebaseconfig";
import { appColors } from "../../utilities/apptheme";
import { appStyles } from "../../utilities/mainstyle";


export default function History() {

  const { user } = UseAuth();
  const [loading, setLoading] = useState(false);

  const [measurementHistory, setMeasurementHistory] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [currentUser, setCurrentUser] = useState()

  // delete couments

  const handleDelete = async (bookingId) => {
    setLoading(true)
    try {
      await deleteDoc(doc(db, "measurements", bookingId))
      Alert.alert("Message", "measurements deleted", [{ text: "okay" }])
    } catch (error) {
      console.error("Delete error:", error);
      Alert.alert("Error", "An error occurred while deleting measurements", [{ text: "Dismiss" }])
    }
    setLoading(false)

  }
  // fetching using details from signup

  useEffect(() => {
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
    user !== undefined && fetchuser()
  }, [user])

  // function to pick image from gallery
  const pickImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        Alert.alert("Permission to access gallery is required!");
        return;
      }
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!pickerResult.canceled) {
        setProfileImage(pickerResult.assets[0].uri);
        Alert.alert("PROFILE IMAGE UPLOAD SUCCESSFUL");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      Alert.alert("Error", "An error occurred while uploading the image.");
    }
  };
  // fetch user data
  useEffect(() => {
    // realtime update from db
    setLoading(true);
    const q = query(collection(db, "measurements"), where("createdBy", "==", user.uid));
    const unsubscribe = onSnapshot(
      q,
      (snapShot) => {
        const measurementData = [];
        snapShot.forEach((doc) => {
          measurementData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        // sorting according recent date
        measurementData.sort((a, b) => {
          const dateA = a.createdAt?.toDate?.() || new Date(0);
          const dateB = b.createdAt?.toDate?.() || new Date(0);
          return dateB - dateA;
        });
        setMeasurementHistory(measurementData);
        // console.log(".....", measurementData);

        setLoading(false);
      },
      (er) => {
        console.log(er);
      }
    );

    return () => unsubscribe();
  }, [user.uid]);

  const renderMeasurementItems = ({ item }) => {
    if (!item) return null;

    // Safely handle the date
    let formattedDate = "N/A";
    try {
      const createdDate = item.createdAt?.toDate ? item.createdAt.toDate() : (item.createdAt ? new Date(item.createdAt) : new Date());
      formattedDate = createdDate.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch (e) {
      console.log("Date error", e);
    }

    const safeGender = (typeof item.gender === 'string' ? item.gender : "N/A").toUpperCase();
    const safeUnit = typeof item.unit === 'string' ? item.unit : "N/A";
    const measurementsObj = (item.measurements && typeof item.measurements === 'object' && !Array.isArray(item.measurements)) ? item.measurements : {};

    return (
      <View style={appStyles.measurementCard}>
        <View style={appStyles.measurementHeader}>
          <View>
            <Text style={appStyles.measurementDate}>{formattedDate}</Text>
          </View>
          <View style={appStyles.genderBadge}>
            <Text style={appStyles.genderText}>{safeGender}</Text>
          </View>
        </View>

        <View style={appStyles.measurementDetails}>
          <Text style={appStyles.unitText}>Unit: {safeUnit}</Text>
          <View style={appStyles.measurementsGrid}>
            {Object.entries(measurementsObj).map(([key, value]) => (
              <View key={key} style={appStyles.measurementItem}>
                <Text style={appStyles.measurementLabel}>{String(key)}:</Text>
                <Text style={appStyles.measurementValue}>
                  {typeof value === 'object' ? JSON.stringify(value) : String(value)} {safeUnit === 'inches' ? '"' : 'cm'}
                </Text>
              </View>
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Link href={{ pathname: "updatemeasurement/[uid]", params: { uid: item.id } }}>
              <View>
                <FontAwesome5 name="edit" size={24} color={appColors.navy} />
                <Text style={{ fontSize: 14, fontWeight: "800", color: appColors.navy }}>Edit</Text>
              </View>
            </Link>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <MaterialIcons name="delete" size={24} color={appColors.navy} />
                <Text style={{ fontSize: 14, fontWeight: "800", color: appColors.navy }}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }





  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ flex: 1, paddingHorizontal: 7 }}>
          {/* card */}
          <View style={appStyles.card}>
            {/* card content */}
            <View style={appStyles.cardcontent}>
              <TouchableOpacity onPress={pickImage}>
                {profileImage ? (
                  <Image
                    source={{ uri: profileImage }}
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 27,
                      borderWidth: 2,
                      borderColor: "white",
                    }}
                  />
                ) : (
                  <FontAwesome name="user-circle" size={54} color="white" />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "800",
                  color: "white",
                  fontFamily: "Paterna",
                }}
              >
                Hi {currentUser?.fullname}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  fontFamily: "AvegasRoyale-Bold",
                }}
              >
                Date Joined: {currentUser?.createdAt ? new Date(currentUser.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}

              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "700", color: appColors.navy }}
            >
              ORDER MANAGEMENT
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              marginTop: 20,
            }}
          >
            <MaterialIcons
              name="delivery-dining"
              size={44}
              color={appColors.navy}
            />
            <TextInput
              keyboardType="default"
              placeholder="enter tracking id"
              style={appStyles.textinput}
              placeholderTextColor="black"
            />
          </View>

          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "center" }}
            >
              <View style={appStyles.viewMeasurements}>
                <FontAwesome5 name="eye" size={24} color={appColors.navy} />
                <Text style={appStyles.ViewMtext}>View Measurements</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ width: '100%', marginTop: 20 }}>
              <View style={{ marginBottom: 15 }}>

              </View>

              {loading ? (
                <View style={{ paddingVertical: 40, alignItems: 'center' }}>
                  <ActivityIndicator size="large" color={appColors.navy} />
                  <Text style={{ marginTop: 10, color: appColors.navy }}>Loading measurements...</Text>
                </View>
              ) : measurementHistory.length === 0 ? (
                <View style={appStyles.emptyState}>
                  <MaterialIcons name="inbox" size={60} color="#ccc" />
                  <Text style={appStyles.emptyStateText}>No measurements found</Text>
                  <Text style={appStyles.emptyStateSubtext}>Start by adding measurements in the Measurements tab</Text>
                </View>
              ) : (
                <FlatList
                  data={measurementHistory}
                  renderItem={renderMeasurementItems}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={{ gap: 12, paddingBottom: 50 }}

                />
              )}



            </View>
          </View>



        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
