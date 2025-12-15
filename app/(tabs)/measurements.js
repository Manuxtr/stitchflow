import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View ,Platform} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appColors } from "../../utilities/apptheme";
import { appStyles } from "../../utilities/mainstyle";
import Ionicons from '@expo/vector-icons/Ionicons';



const MALE_MEASUREMENT = [
    {key:"chest",label:"chest",placeholder:"e.g 40"},
    {key:"waist",label:"waist",placeholder:"e.g 20"},
    {key:"hip",label:"hip",placeholder:"e.g 30"},
    {key:"shoulder",label:"shoulder",placeholder:"e.g 36"},
    {key:"sleeve",label:"sleeve",placeholder:"e.g 10"},
    {key:"inseam",label:"inseam",placeholder:"e.g 17.5"},
    {key:"neck",label:"neck",placeholder:"e.g 12.5"},
]
const FEMALE_MEASUREMENT = [
    {key:"bust",label:"bust",placeholder:"e.g 40"},
    {key:"waist",label:"waist",placeholder:"e.g 20"},
    {key:"hip",label:"hip",placeholder:"e.g 30"},
    {key:"shoulder",label:"shoulder",placeholder:"e.g 36"},
    {key:"sleeve",label:"sleeve",placeholder:"e.g 10"},
    {key:"inseam",label:"inseam",placeholder:"e.g 17.5"},
    {key:"underbust",label:"underbust",placeholder:"e.g 12.5"},
]

export default function Measurements(){

    const [gender ,setGender] = useState(null)
    const [measurements ,setMeasurements] = useState("inches")
    const [unit , setUnits] = useState({})
    // const [imgUrl,setimgUrl] = useState("")

    const measurementFields = gender === "male" ? MALE_MEASUREMENT : FEMALE_MEASUREMENT ;

    const handleMeasurementChange = (key,value) => {
        setMeasurements((prev) => ({
            ...prev,
            [key]:value
        }));

    };

    const HandleReset =() =>{
        setMeasurements({})
        setGender(null)
        setUnits("inches")
    }


    return(
        <SafeAreaProvider>
            <KeyboardAvoidingView 
            behavior={Platform.OS ==="ios" ? "padding" : "height"}
            style={{flex:1}}
            >
                <ScrollView contentContainerStyle={appStyles.scrollcontent} >
                <View>
                    {/* header */}
                   <View style={appStyles.measureHeader}>
                    <Text style={appStyles.title}>Measurements</Text>
                    <Text style={appStyles.subtitle}>kindly provide your body measurements for acurate fitting</Text>
                   </View>
                   {/* gender selection */}
                   <View style={appStyles.gendersection}>
                    <Text style = {appStyles.subtitle}>Select your gender</Text>
                    <View style={appStyles.genderView}>
                        <TouchableOpacity
                        style={[appStyles.genderbtn, gender === "male" && appStyles.genderbtnactive]}
                        onPress={() => {
                            setGender("male")
                            setMeasurements({})
                        }}
                        >
                            <Text style={[appStyles.gendertext,gender === "male" && appStyles.genderTextActive]}> Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => {
                            setGender("female")
                            setMeasurements({})
                        }}
                        style={[appStyles.genderbtn, gender === "female" && appStyles.genderbtnactive]}
                        >
                            <Text  style={[appStyles.gendertext,gender === "female" && appStyles.genderTextActive]}>Female</Text>
                        </TouchableOpacity>
                    </View>
                    {/* unit selection */}
                    <View>
                        <Text style={appStyles.subtitle}>Unit of measurement</Text>
                        <View style={appStyles.genderView}>
                            <TouchableOpacity 
                            style={[appStyles.unitbtn, unit === "inches" && appStyles.unitbtnactive]}
                            onPress={() => {
                                setUnits("inches")
                            }}
                            >
                                <Text
                                style={[appStyles.unittext,unit === "inches" && appStyles.unittextactive]}
                                >Inches</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                             onPress={() => {
                                setUnits("cm")
                            }}
                             style={[appStyles.unitbtn, unit === "cm" && appStyles.unitbtnactive]}
                            >
                                <Text style={[appStyles.unittext,unit === "cm" && appStyles.unittextactive]} >Centimeters</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                   </View>
                </View>
                {/* measurement input */}
                {gender &&  (
                        <View style={appStyles.section}>
                            <Text style={appStyles.inputTitle}>Enter Measurements</Text>
                            <Text style={appStyles.unit}>(in {unit === "inches" ? "inches" : "cm"})</Text>
                            {measurementFields.map((field) => (
                                <View key={field.key}>
                                    <Text style={appStyles.label}>{field.label}</Text>
                                    <View style={appStyles.inputwrapper}>
                                        <TextInput
                                        placeholder={field.placeholder}
                                        keyboardType="decimal-pad"
                                        style={appStyles.inputfield}
                                        placeholderTextColor="white"
                                        value={measurements[field.key] || ""}
                                        onChangeText={(value) => handleMeasurementChange(field.key,value) }
                                        />
                                        <Text style={appStyles.munit}>{unit === "inches" ? "inches" : "cm"}</Text>
                                    </View>
                                </View>
                            ))
                              
                            }
                
                        </View>
                        
                    )
                }
                {/* CALL TO ACTION */}
                {gender && (
                    <View style = {appStyles.ctaView}>
                        <TouchableOpacity style={appStyles.savebtn}>
                            <Text style={appStyles.ctatext}>Save</Text>
                        </TouchableOpacity>
                         <TouchableOpacity
                         onPress={HandleReset}
                         style={appStyles.resetbtn}>
                            <Text  style={appStyles.ctatext}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                )}
           
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    )
}