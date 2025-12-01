import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions, } from "react-native";
import { Link } from "expo-router";
import { appStyles} from "../utilities/mainstyle"



const screenWidth = Dimensions.get("window")

export default function Index (){
  return(
   <SafeAreaProvider>
      <SafeAreaView style ={appStyles.areaView}>
        {/* header */}
      <View style={appStyles.HeaderView}>
        <Text style={appStyles.Appname} >Stitch flow</Text>
        <Text style={appStyles.introText}>your fashion partner</Text>
     </View>
       {/* body */}
       <View>
          <Image
          source={require("../assets/images/stitchlg.png")}
          style={myStyles.logo}
          />
       </View>
     <View>
      <Text>When you choose Stitch Flow Fashion, you're choosing ease,comfort and relaibility</Text>
     </View>
     {/* bottom */}
     <View style={{paddingHorizontal:30}} >
      <Link href="/(tabs)/homepage">
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
    height:420
  }

})

