import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../config/AuthContest";

export default function RootLayout() {
  const [fontsloaded] = useFonts({
    "AvegasRoyale-Italic": require("../fonts/AvegasRoyale-Italic.ttf"),
    "AvegasRoyale-Regular": require("../fonts/AvegasRoyale-Regular.ttf"),
    "AvegasRoyale-Bold": require("../fonts/AvegasRoyale-Bold.ttf"),
    Paterna: require("../fonts/Paterna.otf"),
    "ReilycElegantDemo-Regular": require("../fonts/ReilycElegantDemo-Regular.otf"),
  });
  if (!fontsloaded) {
    return null;
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} >
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="signin" options={{ title: "sign in" }} />
          <Stack.Screen name="signup" options={{ title: "sign up" }} />
        </Stack>

      </SafeAreaProvider>
    </AuthProvider>
  );
}
