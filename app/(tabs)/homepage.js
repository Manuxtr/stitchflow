import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions,FlatList,TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { eventData } from "../../assets/images/localdata/fashionstyle";
import {appStyles} from "../../utilities/mainstyle"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from "expo-font";


function ImageSeperator(){
    return(
        <View style={{width:"100%",height:50}}>

        </View>
    )}

export default function Homepage(){
    const [fontsloaded] = useFonts({
        "AvegasRoyale-Italic":require("../../fonts/AvegasRoyale-Italic.ttf"),
        "AvegasRoyale-Regular":require("../../fonts/AvegasRoyale-Regular.ttf"),
        "AvegasRoyale-Bold":require("../../fonts/AvegasRoyale-Bold.ttf"),
        "Paterna":require("../../fonts/Paterna.otf"),
        "ReilycElegantDemo-Regular":require("../../fonts/ReilycElegantDemo-Regular.otf"),
        
        

    })
    if(!fontsloaded){
        return null
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                   <View style={appStyles.headerView}><Text style={appStyles.headerText}>DESIGN GALLARY</Text></View> 
                   <View>
                    
                    
                    <FlatList
                    data={eventData}
                    ItemSeparatorComponent={ImageSeperator}
                   
                    renderItem={({item}) => {
                        return(
                            <View style={{paddingHorizontal:4}}>
                                <Image
                                    source={item.imgurl}
                                    style ={appStyles.flatimg}
                                />
                                <View style={appStyles.iconView}>
                                     <Text style={appStyles.desigerName}> Designer: {item.designer}</Text>
                                    <View style ={appStyles.iconDiplay}>
                                    <TouchableOpacity>
                                        <AntDesign name="heart" size={24} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="comment" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                               
                                </View>
                                
                                
                            </View>
                        )
                    }}
                    />
                   </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}