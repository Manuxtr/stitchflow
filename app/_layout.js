import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { ActivityIndicator,View } from "react-native";
import { AuthProvider } from "../config/AuthContest";


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsloaded] = useFonts({
    "AvegasRoyale-Italic": require("../fonts/AvegasRoyale-Italic.ttf"),
    "AvegasRoyale-Regular": require("../fonts/AvegasRoyale-Regular.ttf"),
    "AvegasRoyale-Bold": require("../fonts/AvegasRoyale-Bold.ttf"),
    "Paterna": require("../fonts/Paterna.otf"),
    "ReilycElegantDemo-Regular": require("../fonts/ReilycElegantDemo-Regular.otf"),
  });
;

  useEffect(() => {
    if (fontsloaded ) {
      SplashScreen.hideAsync();
    }
  }, [fontsloaded]);

  // If there's an error loading fonts, you might want to log it
  


  return (
    <AuthProvider>
      {!fontsloaded ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="signin" options={{ title: "sign in" }} />
          <Stack.Screen name="signup" options={{ title: "sign up" }} />
        </Stack>
      )}
    </AuthProvider>
  );
}
