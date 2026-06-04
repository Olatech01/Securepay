import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../Header";
import { Ionicons } from "@expo/vector-icons";
import { BANk_LISTS } from "@/constants";



export default function BankList({onContinue} : any) {

    const handleNext = () => {
        onContinue()
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            <Header showBack title="Bank Transfer" showNotification />

            <View className="px-4 mt-4">
                <Text className="text-[20px] font-semibold">
                    Transfer to Bank
                </Text>
                <Text className="text-[#A4A9AE] mt-1 text-[16px] font-medium">
                    Search or select recipients bank
                </Text>
                <View className="mt-6">
                    <View className="flex-row items-center rounded-[10px] gap-2 bg-[#A4A9AE]/20 px-3 h-[48px]">
                        <Ionicons name="search-outline" size={17} color="#8E949A" />
                        <TextInput
                            placeholder="Search..."
                            className="text-[18px] text-[#000000]90 font-medium flex-1"
                        />
                    </View>
                </View>
            </View>

            <View className="px-4 mt-10">
                {BANk_LISTS.map((bank) => (
                    <View key={bank.id} className="mt-6 h-[64px] border border-[#F0F0F0] rounded-[10px] px-3 flex-row items-center justify-between">
                        <View className="flex-row items-center gap-2">
                            <Image source={bank.icon} style={{
                                width: 41,
                                height: 41
                            }}/>
                            <Text className="text-[16px] font-medium">
                                {bank.name}
                            </Text>
                        </View>
                        <View
                            className="h-[20px] w-[20px] rounded-full items-center justify-center"
                            style={{
                                borderWidth: 2,
                                borderColor: "#C8C8D0",
                            }}
                        >
                            {/* {isSelected && <View className="h-[10px] w-[10px] rounded-full bg-[#4361EE]" />} */}
                        </View>
                    </View>
                ))}
            </View>

            <View className="px-8">
                <TouchableOpacity onPress={handleNext} className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8">
                    <Text className="text-white text-[16px] font-semibold">
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}