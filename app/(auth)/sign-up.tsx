import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";



export default function Page() {
    const router = useRouter();
    return (
        <View className="flex-1 bg-[#23303B] justify-center py-15 px-5">
            <Text className="text-white text-[30px] mb-8 font-normal">
                Create Your Account
            </Text>
            <View>
                <TextInput
                    className="h-[63px] w-[316px] px-4 bg-[#F7F7F7] rounded-[10px] mt-5  text-[14px] text-[#333]"
                    placeholder="Name"
                    placeholderTextColor="#666"
                    keyboardType="default"
                />
                <TextInput
                    className="h-[63px] w-[316px] px-4 bg-[#F7F7F7] rounded-[10px] mt-5  text-[14px] text-[#333]"
                    placeholder="Email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                />
                <TextInput
                    className="h-[63px] w-[316px] px-4 bg-[#F7F7F7] rounded-[10px] mt-5  text-[14px] text-[#333]"
                    placeholder="Mobile Number"
                    placeholderTextColor="#666"
                    keyboardType="phone-pad"
                />

                <View className="relative h-[63px] flex-row justify-between mt-5 items-center w-[316px] px-4 bg-[#F7F7F7] rounded-[10px]">
                    <TextInput
                        className="text-[14px] text-[#333]"
                        placeholder="Password"
                        placeholderTextColor="#666"
                        keyboardType="default"
                        secureTextEntry
                    />
                    <TouchableOpacity className="">
                        <Ionicons name="eye-off" size={20} color="#666" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className="w-[316px] h-[63px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-5"
                    onPress={() => router.push("/(tabs)")}
                >
                    <Text className="text-white text-[20px] font-medium">
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="mt-10">
                <View className="flex-row justify-center mt-5">
                    <Text className="text-[#8E949A] text-[18px] font-medium">
                        Already have an account?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/sign-up")}>
                        <Text className="text-[#FFFFFF] text-[18px] font-medium">
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}