import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,ScrollView,TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { appStyles } from "../../utilities/mainstyle";



export default function History(){
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={{flex:1,paddingHorizontal:7}}>
                    {/* card */}
                    <View style={appStyles.card}>
                        {/* card content */}
                        <View style={appStyles.cardcontent}>
                            <TouchableOpacity>
                                <FontAwesome name="user-circle" size={54} color="white" />
                            </TouchableOpacity>
                            <Text style={{fontSize:36,fontWeight:"600",color:"white",fontFamily:"Paterna"}}>Hi Tochukwu</Text>
                            <Text style={{fontSize:18,color:"white",fontFamily:"AvegasRoyale-Bold"}}>Date Joined: {new Date().getFullYear()}</Text>
                        </View>
                    </View>
                </View>
              
            </SafeAreaView>
        </SafeAreaProvider>
    )
}