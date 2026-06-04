import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../Header";
import { useState } from "react";



export default function AccountDetails({ onContinue }: any) {
    const [amount, setAmount] = useState("");

    const quickAmounts = ["100", "150", "200"];

    const handleNext = () => {
        onContinue()
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            <Header showBack title="Bank Transfer" showNotification />

            <View className="px-4 mt-6">
                <Text className="text-[19px] font-semibold">
                    Add Account Details
                </Text>

                <TextInput
                    placeholder="Account Name"
                    className="h-[60px] w-full bg-[#F7F7F7] rounded-[10px] mt-4 px-3"
                />

                <TextInput
                    placeholder="Account Number"
                    keyboardType="numeric"
                    className="h-[60px] w-full bg-[#F7F7F7] rounded-[10px] mt-4 px-3"
                />

                <Text className="text-[19px] font-semibold mt-8">
                    Enter Amount
                </Text>

                <View>
                    <View className="h-[60px] rounded-[10px] bg-[#F7F7F7] mt-6 flex-row items-center justify-center px-4">

                        <Text className="text-[28px] font-normal mr-1">
                            $
                        </Text>

                        <TextInput
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType="numeric"
                            placeholder="0"
                            placeholderTextColor="#9ca3af"
                            className="text-[28px] font-medium text-gray-400"
                        />
                    </View>
                    <View className="flex-row gap-3 mt-4">
                        {quickAmounts.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setAmount(item)}
                                className={`flex-1 h-[50px] rounded-[10px] items-center justify-center ${amount === item
                                    ? "border border-[#456EFE] bg-white"
                                    : "bg-[#F4F4F4]"
                                    }`}
                            >
                                <Text
                                    className={`text-[18px] font-semibold ${amount === item
                                        ? "text-[#456EFE]"
                                        : "text-[#8E949A]"
                                        }`}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <Text className="text-[19px] font-semibold mt-8">
                    Payment Purpose
                </Text>

                <TextInput
                    placeholder="Purpose of payment (Optional)"
                    className="h-[60px] w-full bg-[#F7F7F7] rounded-[10px] mt-4 px-3"
                />

                <View className="px-8">
                    <TouchableOpacity onPress={handleNext} className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8">
                        <Text className="text-white text-[16px] font-semibold">
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}