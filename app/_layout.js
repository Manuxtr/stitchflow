import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
   const [fontsloaded] = useFonts({
        "AvegasRoyale-Italic":require("../fonts/AvegasRoyale-Italic.ttf"),
        "AvegasRoyale-Regular":require("../fonts/AvegasRoyale-Regular.ttf"),
        "AvegasRoyale-Bold":require("../fonts/AvegasRoyale-Bold.ttf"),
        "Paterna":require("../fonts/Paterna.otf"),
        "ReilycElegantDemo-Regular":require("../fonts/ReilycElegantDemo-Regular.otf"),
    })
    if(!fontsloaded){
        return null
    }

  return(
   <SafeAreaProvider>
     <Stack>
       <Stack.Screen
      name="(tabs)"
      options={{
        headerShown:false,
        title:"tabs"
      }}
      /> 
      <Stack.Screen
      name="index"  
      options={{
        headerShown:false,
        title:"index"
      }}
      />
      <Stack.Screen
      name="signin"
      options={{title:"sign in"}}
      />
      <Stack.Screen
      name="signup"
      options={{title:"sign up"}}
      />
    </Stack>
   </SafeAreaProvider>
  )
}
