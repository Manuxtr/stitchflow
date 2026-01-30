import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator,View } from "react-native";
import { useAuth } from '../../config/AuthContest';





export default function TabsLayout() {
    const { loading, user } = useAuth()

    if (loading)
        return (
            <View>
                <ActivityIndicator size="large" color="black" />
            </View>
        )
    if (!user) {
        return <Redirect href={"/signin"} />
    }

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "red" }}>
            <Tabs.Screen
                name="homepage"
                options={{
                    title: "feed",
                    headerShown: false,
                    tabBarIcon: () => <MaterialCommunityIcons name="home-heart" size={24} color="black" />

                }}
            />
            <Tabs.Screen
                name="measurements"
                options={{
                    title: "measurements",
                    headerShown: false,
                    tabBarIcon: () => <MaterialCommunityIcons name="tape-measure" size={24} color="black" />


                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "history",
                    headerShown: false,
                    tabBarIcon: () => <MaterialCommunityIcons name="history" size={24} color="black" />

                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "settings",
                    headerShown: false,
                    tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />

                }}
            />
        </Tabs>
    )
}

