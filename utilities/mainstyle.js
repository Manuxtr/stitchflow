import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../utilities/apptheme";

const screenWidth = Dimensions.get("window").width

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
    paddingBottom:50,
   paddingVertical:10

},
measureHeader:{
    marginBottom:30,
   
},
title:{
    fontSize:30,
    textAlign:"center",
    fontWeight:"800",
    color:appColors.navy,
    fontFamily:"AvegasRoyale-Bold"
    

},
subtitle:{
    fontSize:18,
    color:appColors.darkblue,
    textAlign:"center",
    fontFamily:"Paterna"


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
},

// measurement input styles
section:{
    marginBottom:24,
    paddingHorizontal:20,
    width:"100%"
},
inputTitle:{
    fontSize:18,
    fontWeight:"700",
    color:appColors.navy,
    marginBottom:8,

},
unit:{
    fontSize:14,
    color:appColors.navy,
    marginBottom:12
},
label:{
    fontSize:16,
    fontWeight:"800",
    color:appColors.darkblue,
    marginBottom:6,
},
inputwrapper:{
    flexDirection:"row",
    alignItems:"center",
    borderWidth:1,
    borderColor:appColors.grey,
    borderRadius:10,
    backgroundColor:appColors.darkblue,
   
  

},
inputfield:{
    flex:1,
    paddingVertical:12,
    paddingHorizontal:12,
    fontSize:15,
    color:"white",
    fontWeight:"400"
},
munit:{
    paddingRight:10
},


// call to action styles

ctaView:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    flex:1,
    gap:20,
    paddingBottom:20


},
savebtn:{
    width:150,
    height:50,
    backgroundColor:appColors.darkblue,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
},
resetbtn:{
    width:150,
    height:50,
    backgroundColor:appColors.darkblue,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
},
ctatext:{
    color:"white",
    fontSize:17,
    fontWeight:800,
    fontFamily:"Paterna"
},
card:{
    width:"100%",
    height:200,
    backgroundColor:appColors.navy,
    borderRadius:50,
    display:"flex",
    shadowOpacity:17,
    shadowRadius:4,
    shadowOffset:{width:0,height:8},
    elevation:5,
    marginTop:20
   
     
},
scrollcontent:{
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:20,
    paddingTop:30,
    
    

},
cardcontent:{
position:"absolute",
top:50,
left:9,
display:"flex",
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
gap:14,
marginTop:20
},
viewMeasurements:{
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:appColors.red,
    height:50,
    width:"100%",
    borderRadius:50,
    display:"flex",
    flexDirection:"row",
    gap:10,
  
}
,
ViewMtext:{
    color:"white",
    fontWeight:"400"
},
textinput:{
    borderWidth:1,
    flex:1,
    height:40,
   borderRadius:50,
   borderColor:appColors.navy,
},
// sign up
googlebtn:{
    height:50,
    display:"flex",
    flexDirection:"row",
    gap:14,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:appColors.navy,
    width:300,
    borderRadius:10

},
orsection:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
},
line:{
    width:"30%",
    borderTopWidth:1,
    borderTopColor:appColors.navy
},
ortext:{
    fontSize:16,
    color:appColors.navy,
    fontWeight:"400"
},
inputField:{
    width:300,
    height:50,
    borderWidth:1,
    borderColor:appColors.navy,
    borderRadius:12
    
},
eyeview:{
    display:"flex",
    flexDirection:"row",
    width:300,
    height:50,
    borderWidth:1,
    borderColor:appColors.navy,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center"

    
}




})