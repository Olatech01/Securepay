import { ScrollView, Text, TouchableOpacity } from "react-native";
import Header from "../Header";
import { View } from "react-native";
import { Image } from "react-native";



export default function Success() {
    return (
        <ScrollView>
            <Header showBack title="Success" showNotification />

            <View className="flex-col items-center px-4 mt-4">
                <Text className="text-[#456EFE] font-semibold text-[32px]">
                    Transfer Successful
                </Text>
                <Text className="text-[#A4A9AE] text-[16px] font-medium text-center mt-4">
                    Your money has been tranfered successfully
                </Text>
            </View>

            <Image source={require("../../assets/images/success.png")} width={367} height={302} className="mt-10" />

            <View className="px-4" style={{
                marginTop: 60
            }}>
                <TouchableOpacity className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8">
                    <Text className="text-white text-[16px] font-semibold">
                        View Receipt
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}