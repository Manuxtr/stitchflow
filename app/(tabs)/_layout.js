import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function _Layout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:"red"}}>
            <Tabs.Screen
            name="homepage"
            options={{
                title:"feed",
                headerShown:true,
                tabBarIcon:() => <MaterialCommunityIcons name="home-heart" size={24} color="black" />
                
            }}
            />
            <Tabs.Screen
            name="measurements"
            options={{
                title:"measurements",
                headerShown:true,
                tabBarIcon:() => <MaterialCommunityIcons name="tape-measure" size={24} color="black"/>

            
            }}
            />
            <Tabs.Screen
            name="history"
            options={{
                title:"history",
                headerShown:true,
                tabBarIcon:() => <MaterialCommunityIcons name="history" size={24} color="black"/>
            
            }}
            />
            <Tabs.Screen
            name="settings"
            options={{
                title:"settings",
                headerShown:true,
                tabBarIcon:() => <Ionicons name="settings" size={24} color="black" />
            
            }}
            />
        </Tabs>
    )
}

