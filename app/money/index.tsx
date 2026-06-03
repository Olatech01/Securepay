import Header from "@/components/Header";
import { RECENT_TRANSFERS } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Details({ onOpenModal }) {
    return (
        <View className="flex-1">
            <Header showBack title="Money Transfer" showNotification />

            {/* Search */}
            <View className="px-4 mt-4">
                <View className="flex-row items-center rounded-[10px] gap-2 bg-[#A4A9AE]/20 px-3 h-[48px]">
                    <Ionicons name="search-outline" size={17} color="#8E949A" />
                    <TextInput
                        placeholder="Search..."
                        className="text-[18px] text-[#000000]90 font-medium flex-1"
                    />
                </View>
            </View>

            {/* Recent Transfers */}
            <View className="px-4 mt-7">
                <Text className="text-[19px] font-semibold text-[#23303B]">
                    Recent Transfers
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="-mx-2"
                >
                    {RECENT_TRANSFERS.map((trans, index) => (
                        <View key={index}>
                            <View className="w-[120px] h-[122px] bg-[#F7F7F7] rounded-[10px] items-center justify-center mx-2 mt-4">
                                <Image
                                    source={trans.icon}
                                    style={{ width: 50, height: 50 }}
                                    resizeMode="contain"
                                />

                                <Text className="text-[14px] font-medium text-[#A4A9AE] mt-2">
                                    {trans.name}
                                </Text>

                                <Text className="text-[16px] font-semibold text-[#23303B] mt-1">
                                    {trans.amount}
                                </Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Form */}
            <View className="px-4 mt-10">
                <Text className="text-[19px] font-semibold text-[#23303B]">
                    Make new transfer
                </Text>

                <TextInput
                    placeholder="Name"
                    className="h-[60px] w-full bg-[#F7F7F7] rounded-[10px] mt-4 px-3"
                />

                <TextInput
                    placeholder="Enter Account Number"
                    keyboardType="numeric"
                    className="h-[60px] w-full bg-[#F7F7F7] rounded-[10px] mt-4 px-3"
                />

                <TextInput
                    placeholder="Purpose of payment (Optional)"
                    className="h-[60px] w-full bg-[#F7F7F7] rounded-[10px] mt-4 px-3"
                />

                {/* Password */}
                {/* <View className="flex-row items-center gap-3 mt-4">
                    <View className="flex-1 h-[60px] bg-[#F7F7F7] rounded-[10px] flex-row items-center px-3">
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            className="flex-1"
                        />

                        <Ionicons
                            name="eye-off-outline"
                            size={20}
                            color="#8E949A"
                        />
                    </View>

                    <View className="w-[60px] h-[60px] bg-[#F7F7F7] rounded-[10px] items-center justify-center">
                        <Ionicons
                            name="finger-print-outline"
                            size={28}
                            color="#456EFE"
                        />
                    </View>
                </View> */}

                {/* Continue */}
                <TouchableOpacity
                    onPress={onOpenModal}
                    className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8"
                >
                    <Text className="text-white text-[16px] font-semibold">
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function Confirmation({ onContinue }) {
    return (
        <View className="flex-1">
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
                                John Doe
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
                    Card
                </Text>
                <View className="flex-row h-[81px] border rounded-[5px] border-gray-100 px-3 items-center justify-between mt-4">
                    <View className="flex-row items-center">
                        <Image
                            source={require("../../assets/images/card1.png")}
                            style={{ width: 82, height: 51 }}
                            resizeMode="contain"
                        />
                        <View className="ml-3">
                            <Text className="text-[20px] font-semibold text-[#23303B]">
                                Debit Card
                            </Text>
                            <Text className="text-[#A4A9AE] text-[16px] font-semibold">
                                Master Card
                            </Text>
                        </View>
                    </View>
                    <View className="bg-[#4B78FE] h-[26px] w-[26px] rounded-[5px] flex-row items-center justify-center">
                        <TouchableOpacity className="mt-3 ">
                            <Ionicons name="chevron-forward-outline" size={18} color="#333333" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View className="mt-6 px-4">
                <Text className="text-[19px] font-semibold text-[#23303B]">
                    Transfer Details
                </Text>

                <View className="bg-[#A4A9AE]/20 h-[201px] rounded-[12px] w-full px-3 py-4 mt-4">
                    <View className="flex-row h-[45px] border-b border-gray-300 rounded-[5px] items-center justify-between mt-4 mb-8">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Transfer Amount
                        </Text>
                        <Text className="text-[19px] font-semibold">
                            $250.00
                        </Text>
                    </View>
                    <View className="flex-row h-[45px] border-b border-gray-300 rounded-[5px] items-center justify-between mt-4 mb-8">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Transfer Fee
                        </Text>
                        <Text className="text-[19px] font-semibold">
                            $0.00
                        </Text>
                    </View>
                    <View className="flex-row h-[45px] border-b border-gray-300 rounded-[5px] items-center justify-between mt-4 mb-8">
                        <Text className="text-[18px] font-medium text-[#8E949A]">
                            Total
                        </Text>
                        <Text className="text-[19px] font-semibold">
                            $250.00
                        </Text>
                    </View>
                </View>
            </View>
            {/* Continue */}
            <View className="w-full px-4">
                <TouchableOpacity
                    onPress={onContinue}
                    className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8"
                >
                    <Text className="text-white text-[16px] font-semibold">
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function Reconfirmation({ onContinue }) {
    return (
        <View className="flex-1">
            <Header showBack title="Confirmaion" showNotification />

            <View className="flex-col items-center px-4 mt-4">
                <Text className="text-[#456EFE] font-semibold text-[32px]">
                    Are You Sure?
                </Text>
                <Text className="text-[#A4A9AE] text-[18px] font-medium text-center mt-4">
                    We care about your privacy. please make sure that you want to transfer money.
                </Text>
            </View>

            <View className="mt-10 px-4">
                <View className="bg-[#A4A9AE]/20 rounded-[10px] mt-6 items-center" style={{ height: 340 }}>
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

                    <View className="mt-4 ">
                        <Text className="bg-[#FF6363] text-[16px] font-medium w-[249px] rounded-[10px] text-[#FF6363]">
                            Transaction status: Pending
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
                    <View className="flex-row h-[45px] w-full px-4 border-b border-gray-300 rounded-[5px] items-center justify-between mt-8">
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
        </View>
    )
}


function Success() {
    return (
        <View>
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
        </View>
    )
}

export default function Money() {
    const [step, setStep] = useState(1);
    const [showAmountModal, setShowAmountModal] = useState(false);
    const [amount, setAmount] = useState("");

    const quickAmounts = ["100", "150", "200"];

    return (
        <SafeAreaView edges={["top"]} className="flex-1 bg-white">

            {step === 1 && (
                <Details onOpenModal={() => setShowAmountModal(true)} />
            )}

            {step === 2 && <Confirmation onContinue={() => setStep(3)} />}

            {step === 3 && <Reconfirmation onContinue={() => setStep(4)} />}

            {step === 4 && <Success />}



            {/* Amount Modal */}
            <Modal
                visible={showAmountModal}
                transparent
                animationType="slide"
            >
                <View className="flex-1 justify-end bg-black/30">

                    <View className="bg-white rounded-t-[30px] px-5 pt-6 pb-10">

                        {/* Header */}
                        <View className="flex-row items-center justify-between">
                            <Text className="text-[20px] font-semibold text-[#23303B]">
                                Enter Amount
                            </Text>

                            <TouchableOpacity
                                onPress={() => setShowAmountModal(false)}
                            >
                                <Ionicons name="close" size={24} color="#23303B" />
                            </TouchableOpacity>
                        </View>

                        {/* Amount Input */}
                        <View className="h-[70px] border border-[#456EFE] rounded-[10px] mt-6 flex-row items-center justify-center px-4">

                            <Text className="text-[32px] font-bold text-[#456EFE] mr-1">
                                $
                            </Text>

                            <TextInput
                                value={amount}
                                onChangeText={setAmount}
                                keyboardType="numeric"
                                placeholder="0"
                                placeholderTextColor="#456EFE"
                                className="text-[32px] font-bold text-[#456EFE]"
                            />
                        </View>

                        {/* Quick Actions */}
                        <Text className="text-[18px] font-semibold text-[#23303B] mt-8">
                            Quick Actions
                        </Text>

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

                        {/* Next Button */}
                        <TouchableOpacity
                            onPress={() => {
                                setShowAmountModal(false);
                                setStep(2);
                            }}
                            className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-10"
                        >
                            <Text className="text-white text-[16px] font-semibold">
                                Next
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}