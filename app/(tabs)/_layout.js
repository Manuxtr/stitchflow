import { Tabs } from "expo-router";

export default function _Layout(){
    <Tabs>
    <Tabs.Screen
    name="homepage"
    options={{
        headerShown:true,
        title:"feed",
    }}
    />
    <Tabs.Screen
    name="measurements"
    options={{
        headerShown:true,
        title:"measurements"
    }}
    />
    <Tabs.Screen
    name="history"
    options={{
        headerShown:true,
        title:"history"
    }}
    />
    <Tabs.Screen
    name="settings"
    options={{
        headerShown:true,
        title:"history"
    }}
    />
</Tabs>
}
