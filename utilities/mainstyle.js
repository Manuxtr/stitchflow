import { StyleSheet,Dimensions } from "react-native";
const screenWidth = Dimensions.get("window")
import {appColors} from "../utilities/apptheme"


export const appStyles = StyleSheet.create({

HeaderView:{
    backgroundColor:"white"
    
},
Appname:{
    fontSize:30,
    textAlign:"center",
    color:appColors.navy,
    fontWeight:"800",

},
introText:{
    textAlign:"center",
    fontSize:13,
    color:appColors.darkblue,
},
areaView:{
    backgroundColor:"white",
    display:"flex",
    justifyContent:"space-between",
    flex:1,
    marginBottom:20
    
    
},
getstartedView:{
    display:"flex",
    width:"100%",
    height:50,
    backgroundColor:appColors.navy,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:100,
    


},
linktext:{
    color:appColors.grey,
    fontSize:20,
    fontWeight:"600"
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
    color:appColors.navy,
    letterSpacing:4.9,
    textAlign:"center",
    fontWeight:"900",
    fontFamily:"ReilycElegantDemo-Regular"
},
desigerName:{
    fontSize:16,
    fontWeight:"bold",
    color:appColors.darkblue,
    fontFamily:"Paterna"

},
iconDiplay:{
    display:"flex",
    flexDirection:"row",
    gap:30


},
iconView:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

},

introText2:{
    textAlign:"center",
    fontSize:20,
    color:appColors.darkblue,
    paddingBottom:10,
},
// measurement styles
scrollcontent:{

},
measureHeader:{
    marginBottom:30,
   
},
title:{
    fontSize:30,
    textAlign:"center",
    fontWeight:"800",
    color:appColors.navy,
    

},
subtitle:{
    fontSize:18,
    color:appColors.darkblue,
    textAlign:"center",


},
gendersection:{
    marginBottom:24,
},
gendertitle:{
    fontSize:15,
    fontWeight:"bold",
    color:appColors.darkblue,
    marginBottom:12,
    textAlign:"center"  

},
genderView:{
    display:"flex",
    flexDirection:"row",
    gap:13,
    justifyContent:"center",
    alignItems:"center",
},
genderbtn:{
    width:150,
    borderWidth:2,
    backgroundColor:appColors.grey,
    borderColor:appColors.darkblue,
    paddingVertical:12,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"
},
genderbtnactive:{
    backgroundColor:appColors.navy,
    borderColor:appColors.red,
},
gendertext:{
    fontSize:15,
    fontWeight:"600",
    color:appColors.darkblue
},
genderTextActive:{
    color:"white"

},
unitbtn:{
     width:150,
    borderWidth:2,
    backgroundColor:appColors.grey,
    borderColor:appColors.navy,
    paddingVertical:12,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"

},
unitbtnactive:{
    backgroundColor:appColors.navy,
    borderColor:appColors.red,

},
unittextactive:{
    color:"white"
},
unittext:{
    fontSize:15,
    fontWeight:"600",
    color:appColors.darkblue
}





})