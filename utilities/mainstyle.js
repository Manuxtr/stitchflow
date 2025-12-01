import { StyleSheet,Dimensions } from "react-native";
const screenWidth = Dimensions.get("window")

export const appStyles = StyleSheet.create({
bgstyle:{
    flex:1,
},
HeaderView:{
    backgroundColor:"white"
},
Appname:{
    fontSize:30,
    textAlign:"center",
    color:"blue"

},
introText:{
    textAlign:"center",
    fontSize:15
},
areaView:{
    display:"flex",
    gap:25,
    backgroundColor:"white"
},
getstartedView:{
    display:"flex",
    width:"100%",
    height:50,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100


},
linktext:{
    color:"white",
    fontSize:20
},
flatimg:{
    width:screenWidth,
    

},
headerView:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
},
headerText:{
    fontSize:30,
    color:"red",
    letterSpacing:4.9,
    textAlign:"center",
    fontWeight:"900"
},
desigerName:{
    fontSize:16,
    fontWeight:"bold",
    color:"red"

},
iconDiplay:{
    display:"flex",
    flexDirection:"row",
   


}





})