import { useState } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/Header";
// import { bills } from "@/constants/bills";
// import { fieldConfigs } from "@/constants/fieldConfigs";
// import BillCard from "./BillCard";
// import BillField from "./BillField";
import { fieldConfigs } from "@/constants/types";
import { bills } from "@/constants";
import BillField from "./BillField";
import BillCard from "./BillCard";

type FormValues = Record<string, string>;

interface PaybillProps {
    onContinue: (billId: string, formValues: FormValues) => void;
}

export default function Paybill({ onContinue }: PaybillProps) {
    const [selectedBill, setSelectedBill] = useState<string | null>(null);
    const [formValues, setFormValues] = useState<FormValues>({});
    const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});

    const handleSelectBill = (billId: string) => {
        setSelectedBill(billId);
        setFormValues({});
        setShowPasswords({});
    };

    const handleFieldChange = (key: string, value: string) => {
        setFormValues((prev) => ({ ...prev, [key]: value }));
    };

    const togglePasswordVisibility = (key: string) => {
        setShowPasswords((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleNext = () => {
        if (!selectedBill) return;
        onContinue(selectedBill, formValues);
    };

    const activeFields = selectedBill ? fieldConfigs[selectedBill] ?? [] : [];

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            <Header showBack title="Pay Bills" showNotification />

            {/* Bills list */}
            <View className="mt-6 px-4">
                <Text className="text-[19px] font-semibold text-[#23303B]">Your Bills</Text>
                <View className="mt-2">
                    {bills.map((bill) => (
                        <BillCard
                            key={bill.id}
                            billing={bill}
                            isSelected={selectedBill === bill.id}
                            onPress={() => handleSelectBill(bill.id)}
                        />
                    ))}
                </View>
            </View>

            {/* Dynamic fields */}
            {selectedBill && (
                <View className="mt-6 px-4">
                    <Text className="text-[19px] font-semibold text-[#23303B] mb-3">Fill Details</Text>
                    <View
                        className="bg-white rounded-[14px] p-4"
                        style={{ borderWidth: 0.5, borderColor: "#EBEBEB" }}
                    >
                        {activeFields.map((field, index) => (
                            <BillField
                                key={field.key}
                                field={field}
                                value={formValues[field.key] || ""}
                                isLast={index === activeFields.length - 1}
                                showPassword={showPasswords[field.key] || false}
                                onChangeText={(text) => handleFieldChange(field.key, text)}
                                onTogglePassword={() => togglePasswordVisibility(field.key)}
                            />
                        ))}
                    </View>
                </View>
            )}

            {/* Next button */}
            {/* <View className="px-4 mt-6 mb-8">
        <Pressable
          onPress={handleNext}
          style={({ pressed }) => ({
            backgroundColor: selectedBill ? "#4361EE" : "#B0BBF5",
            opacity: pressed ? 0.88 : 1,
          })}
          className="h-[52px] rounded-[14px] items-center justify-center"
        >
          <Text className="text-white text-[16px] font-semibold">Next</Text>
        </Pressable>
      </View> */}
            {selectedBill && (
                <View className="w-full px-4 mb-12">
                    <TouchableOpacity
                        onPress={handleNext}
                        className="w-full h-[60px] bg-[#456EFE] rounded-[10px] justify-center items-center mt-8"
                    >
                        <Text className="text-white text-[16px] font-semibold">Next</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
}