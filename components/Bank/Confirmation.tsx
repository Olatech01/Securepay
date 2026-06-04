import { ScrollView, Text, TouchableOpacity } from "react-native";
import Header from "../Header";
import { View } from "react-native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";



export default function Confirmation({onContinue}: any) {
    return (
        <ScrollView>
            <Header showBack title="Confirmation" showNotification />

            <View className="mt-6 px-4">
                <Text className="text-[19px] font-semibold text-[#23303B]">
                    Recipient
                </Text>
                <View className="flex-row h-[81px] border rounded-[5px] border-gray-100 px-3 items-center justify-between mt-4">
                    <View className="flex-row items-center">
                        <Image
                            source={require("../../assets/images/user.png")}
                            style={{ width: 50, height: 50 }}
                            resizeMode="contain"
                        />
                        <View className="ml-3">
                            <Text className="text-[20px] font-semibold text-[#23303B]">
                                Jonathan
                            </Text>
                            <Text className="text-[#A4A9AE] text-[16px] font-semibold">
                                1******6134
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity className="mt-3">
                        <Ionicons name="create-outline" size={18} color="#333333" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="mt-6 px-4">
                <Text className="text-[19px] font-semibold text-[#23303B]">
                    Bank
                </Text>
                <View className="flex-row h-[81px] border rounded-[5px] border-gray-100 px-3 items-center justify-between mt-4">
                    <View className="flex-row items-center gap-2">
                        <Image
                            source={require("../../assets/images/byline.png")}
                            style={{ width: 52, height: 51 }}
                            resizeMode="contain"
                        />
                        <View className="">
                            <Text className="text-[16px] font-medium text-[#23303B]">
                                Byline Bank
                            </Text>
                        </View>
                    </View>
                    <View
                        className="h-[20px] w-[20px] rounded-full items-center justify-center"
                        style={{
                            borderWidth: 2,
                            borderColor: "#4361EE",
                        }}
                    >
                        <View className="h-[10px] w-[10px] rounded-full bg-[#4361EE]" />
                    </View>
                </View>
            </View>

            <View className="mt-6 px-4">
                <Text className="text-[19px] font-semibold text-[#23303B]">
                    Transfer Details
                </Text>

                <View className="bg-[#A4A9AE]/10 min-h-[201px] rounded-[12px] w-full px-3 py-4 mt-4">
                    <View className="flex-row border-b border-gray-300 pb-2 rounded-[5px] items-center justify-between mt-4 mb-8">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Transfer Amount
                        </Text>
                        <Text className="text-[19px] font-semibold">
                            $250.00
                        </Text>
                    </View>
                    <View className="flex-row border-b border-gray-300 rounded-[5px] pb-2 items-center justify-between mt-4 mb-8">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Transfer Fee
                        </Text>
                        <Text className="text-[19px] font-semibold">
                            $0.00
                        </Text>
                    </View>
                    <View className="flex-row rounded-[5px] items-center justify-between mt-4">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Total
                        </Text>
                        <Text className="text-[19px] font-semibold">
                            $250.00
                        </Text>
                    </View>
                </View>
            </View>

            <View className="px-8">
                <TouchableOpacity onPress={onContinue} className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8">
                    <Text className="text-white text-[16px] font-semibold" >
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}