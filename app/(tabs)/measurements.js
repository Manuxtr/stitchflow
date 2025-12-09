import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions,ScrollView,KeyboardAvoidingView,TouchableOpacity} from "react-native";
import { Link } from "expo-router";
import { appStyles } from "../../utilities/mainstyle";
import { useState } from "react";


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

    const measurementFields = gender === "male" ? MALE_MEASUREMENT : FEMALE_MEASUREMENT ;


    return(
        <SafeAreaProvider>
            <KeyboardAvoidingView>
                <ScrollView style = {appStyles.scrollcontent} >
                <View>
                    {/* header */}
                   <View style={appStyles.measureHeader}>
                    <Text style={appStyles.title}>Measurements Screen</Text>
                    <Text style={appStyles.subtitle}>kindly provide your body measurements for acurate fitting</Text>
                   </View>
                   {/* gender selection */}
                   <View style={appStyles.gendersection}>
                    <Text style = {appStyles.gendertitle}>Slect your gender</Text>
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
                        <Text style={appStyles.title}>Unit of measurement</Text>
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
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    )
}