import { Image, ScrollView, View } from "react-native";
import Header from "../Header";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";




export default function Reconfirmation({ onContinue }: any) {
    return (
        <ScrollView>
            <Header showBack title="Confirmation" showNotification />

            <View className="flex-col items-center px-4 mt-4">
                <Text className="text-[#456EFE] font-semibold text-[32px]">
                    Are You Sure?
                </Text>
                <Text className="text-[#A4A9AE] text-[18px] font-medium text-center mt-4">
                    We care about your privacy. please make sure that you want to transfer money.
                </Text>
            </View>

            <View className="mt-10 px-4">
                <View className="bg-[#A4A9AE]/20 rounded-[10px] mt-6 items-center" style={{ height: 360 }}>
                    <Image
                        source={require("../../assets/images/user.png")}
                        style={{ width: 75, height: 75, position: 'absolute', top: -30, alignSelf: 'center', zIndex: 50 }}
                        resizeMode="contain"
                    />
                    <View className="mt-10 flex-col items-center">
                        <Text className="text-[28px] mt-8 font-semibold text-[#23303B]">
                            Jonathan
                        </Text>
                        <Text className="text-[#A4A9AE] text-[16px] font-medium">
                            1******6134
                        </Text>
                    </View>

                    <Text className="bg-[#FF6363]/10 text-[16px] mt-4 font-medium w-[249px] text-center py-2 rounded-[10px] text-[#FF6363]">
                        Transaction status: Pending
                    </Text>

                    <View className="flex-row mt-4 items-center">
                        <Text className="text-gray-400 text-[16px] font-medium">
                            $
                        </Text>
                        <Text className="text-[18px] font-semibold">
                            250.00
                        </Text>
                    </View>
                    <View className="flex-row h-[45px] w-full px-4 border-b border-gray-300 rounded-[5px] items-center justify-between mt-8">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Card Type
                        </Text>
                        <Text className="text-[18px] font-medium">
                            Debit Card
                        </Text>
                    </View>
                    <View className="flex-row h-[45px] w-full mb-4 px-4 rounded-[5px] items-center justify-between mt-8">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Transfer Fee
                        </Text>
                        <Text className="text-[18px] font-medium">
                            $0.00
                        </Text>
                    </View>
                </View>
            </View>

            <View className="w-full px-4">
                <TouchableOpacity
                    onPress={onContinue}
                    className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8"
                >
                    <Text className="text-white text-[16px] font-semibold">
                        Send Money
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}