import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs ,Redirect} from "expo-router";
import { useAuth } from '../../config/AuthContest';




export default function _Layout() {
    
    const {loading,user} = useAuth()
    if(loading)
        return null
    if(!user){
        return <Redirect href={"/signin"}/>
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

