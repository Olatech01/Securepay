import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function Profile() {
    return (
        <SafeAreaView edges={["top"]} className="flex-1 bg-white">
            <Header showLogo title="Profile" showNotification/>
            
            <View className="px-2 mt-4">
                <View className="flex-row items-center justify-between rounded-[5px] px-4 h-[64px] bg-white shadow-lg mt-4">
                    <Text className="text-[18px] font-semibold">
                        Manage Profile
                    </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color="#000" />
                </View>
                <View className="flex-row items-center justify-between rounded-[5px] px-4 h-[64px] bg-white shadow-lg mt-4">
                    <Text className="text-[18px] font-semibold">
                        Submit Complain
                    </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color="#000" />
                </View>
                <View className="flex-row items-center justify-between rounded-[5px] px-4 h-[64px] bg-white shadow-lg mt-4">
                    <Text className="text-[18px] font-semibold">
                        Settings
                    </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color="#000" />
                </View>
                <View className="flex-row items-center justify-between rounded-[5px] px-4 h-[64px] bg-white shadow-lg mt-4">
                    <Text className="text-[18px] font-semibold">
                        Contact
                    </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color="#000" />
                </View>
                <View className="flex-row items-center justify-between rounded-[5px] px-4 h-[64px] bg-white shadow-lg mt-4">
                    <Text className="text-[18px] font-semibold">
                        Log Out
                    </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color="#000" />
                </View>
            </View>
        </SafeAreaView>
    )
}