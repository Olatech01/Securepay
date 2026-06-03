import { Stack } from "expo-router";
import '@/global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Toast from "react-native-toast-message";
import { UserProvider } from "@/context/UserContext";


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast />
    </GestureHandlerRootView>
  )
}
