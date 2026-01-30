import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,StyleSheet,Dimensions,Image } from "react-native";
import { Link } from "expo-router";
import { appStyles} from "../utilities/mainstyle"



const screenWidth = Dimensions.get("window").width

export default function Index (){

  return(
   <SafeAreaProvider>
      <SafeAreaView style ={appStyles.areaView}>
        {/* header */}
      <View style={appStyles.HeaderView}>
        <Text style={appStyles.Appname} >STITCH FLOW</Text>
        <Text style={appStyles.introText}>your fashion partner</Text>
     </View>
       {/* body */}
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Image
          source={require("../assets/images/stitchlg.png")}
          style={myStyles.logo}
          />
          <Text style={appStyles.introText2}>{"When you choose Stitch Flow Fashion, you're choosing ease,comfort and relaibility"}</Text>
       </View>
     {/* bottom */}
     <View style={{paddingHorizontal:30,paddingTop:12}} >
      <Link href="/signin">
        <View style={appStyles.getstartedView}><Text style={appStyles.linktext}>GET STARTED</Text></View>
      </Link>
     </View>
      </SafeAreaView>
   </SafeAreaProvider>
  )

}
const myStyles = StyleSheet.create({
  logo:{
    width:screenWidth,
    height:420,
    paddingVertical:30,
    backgroundColor:"white",
    resizeMode:"contain",
  },


})

