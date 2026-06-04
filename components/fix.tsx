import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const bills = [
    { id: 'internet', name: 'Internet Bill', icon: 'wifi-outline', color: '#0ea66b', bg: '#e1f5ee' },
    { id: 'electricity', name: 'Electricity Bill', icon: 'flash-outline', color: '#e85d2f', bg: '#faece7' },
    { id: 'water', name: 'Water Bill', icon: 'water-outline', color: '#4361ee', bg: '#e6f1fb' },
    { id: 'other', name: 'Other', icon: 'apps-outline', color: '#888888', bg: '#f1efe8' },
];

type FieldConfig = {
    label: string;
    placeholder: string;
    key: string;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'numeric' | 'email-address';
    withFingerprint?: boolean;
};

const fieldConfigs: Record<string, FieldConfig[]> = {
    internet: [
        { label: 'Provider Name', placeholder: 'e.g. MTN, Airtel, Spectranet', key: 'provider' },
        { label: 'Account Number', placeholder: 'Enter account number', key: 'account' },
        { label: 'Amount (₦)', placeholder: '0.00', key: 'amount', keyboardType: 'numeric' },
    ],
    electricity: [
        { label: 'Distribution Company', placeholder: 'e.g. EKEDC, IKEDC, AEDC', key: 'disco' },
        { label: 'Meter Number', placeholder: 'Enter meter number', key: 'meter' },
        { label: 'Amount (₦)', placeholder: '0.00', key: 'amount', keyboardType: 'numeric' },
    ],
    water: [
        { label: 'Water Board', placeholder: 'e.g. LSWC', key: 'board' },
        { label: 'Customer ID', placeholder: 'Enter customer ID', key: 'customerId' },
        { label: 'Amount (₦)', placeholder: '0.00', key: 'amount', keyboardType: 'numeric' },
    ],
    other: [
        { label: 'Company Name', placeholder: 'Enter company name', key: 'company' },
        { label: 'Reference Number', placeholder: 'Enter reference number', key: 'reference' },
        {
            label: 'Password',
            placeholder: 'Password',
            key: 'password',
            secureTextEntry: true,
            withFingerprint: true,
        },
    ],
};

type FormValues = Record<string, string>;

interface PaybillProps {
    onContinue?: (billId: string, formValues: FormValues) => void;
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
        onContinue?.(selectedBill, formValues);
    };

    const activeFields = selectedBill ? fieldConfigs[selectedBill] : [];

    return (
        <ScrollView
            className="flex-1 bg-[#F5F6FA]"
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            {/* Bills Section */}
            <View className="mt-6 px-4">
                <Text className="text-[19px] font-semibold text-[#23303B] mb-3">Your Bills</Text>

                {bills.map((bill) => {
                    const isSelected = selectedBill === bill.id;
                    return (
                        <TouchableOpacity
                            key={bill.id}
                            onPress={() => handleSelectBill(bill.id)}
                            activeOpacity={0.7}
                            className="mb-3"
                        >
                            <View
                                className="h-[64px] flex-row px-3 rounded-[12px] items-center justify-between bg-white"
                                style={{
                                    borderWidth: 1.5,
                                    borderColor: isSelected ? '#4361EE' : '#F0F0F0',
                                }}
                            >
                                {/* Left: Icon + Name */}
                                <View className="flex-row items-center gap-2">
                                    <View
                                        className="h-[34px] w-[34px] rounded-[8px] justify-center items-center"
                                        style={{ backgroundColor: bill.bg }}
                                    >
                                        <Ionicons name={bill.icon as any} size={17} color={bill.color} />
                                    </View>
                                    <Text className="text-[15px] font-medium text-[#23303B]">{bill.name}</Text>
                                </View>

                                {/* Right: Radio */}
                                <View
                                    className="h-[20px] w-[20px] rounded-full items-center justify-center"
                                    style={{
                                        borderWidth: 2,
                                        borderColor: isSelected ? '#4361EE' : '#C8C8D0',
                                    }}
                                >
                                    {isSelected && (
                                        <View className="h-[10px] w-[10px] rounded-full bg-[#4361EE]" />
                                    )}
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Fill Details Section */}
            {selectedBill && (
                <View className="mt-6 px-4">
                    <Text className="text-[19px] font-semibold text-[#23303B] mb-3">Fill Details</Text>

                    <View className="bg-white rounded-[14px] p-4" style={{ borderWidth: 0.5, borderColor: '#EBEBEB' }}>
                        {activeFields.map((field, index) => {
                            const isSecure = field.secureTextEntry && !showPasswords[field.key];
                            const isLast = index === activeFields.length - 1;

                            return (
                                <View key={field.key} className={isLast ? '' : 'mb-4'}>
                                    <Text className="text-[12px] text-[#8A8A9A] mb-1.5">{field.label}</Text>

                                    <View className="flex-row items-center gap-2">
                                        <View className="flex-1 h-[46px] bg-[#F2F3F7] rounded-[10px] flex-row items-center px-4">
                                            <TextInput
                                                placeholder={field.placeholder}
                                                placeholderTextColor="#AAAAB8"
                                                value={formValues[field.key] || ''}
                                                onChangeText={(text) => handleFieldChange(field.key, text)}
                                                secureTextEntry={isSecure}
                                                keyboardType={field.keyboardType || 'default'}
                                                className="flex-1 text-[14px] text-[#23303B]"
                                                style={{ fontFamily: 'System' }}
                                            />
                                            {field.secureTextEntry && (
                                                <TouchableOpacity onPress={() => togglePasswordVisibility(field.key)}>
                                                    <Ionicons
                                                        name={showPasswords[field.key] ? 'eye-outline' : 'eye-off-outline'}
                                                        size={18}
                                                        color="#AAAAB8"
                                                    />
                                                </TouchableOpacity>
                                            )}
                                        </View>

                                        {/* Fingerprint button only on password field */}
                                        {field.withFingerprint && (
                                            <TouchableOpacity
                                                className="h-[46px] w-[46px] bg-[#F2F3F7] rounded-[10px] items-center justify-center"
                                                activeOpacity={0.7}
                                            >
                                                <Ionicons name="finger-print-outline" size={22} color="#AAAAB8" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            )}

            {/* Next Button */}
            <View className="px-4 mt-6 mb-8">
                <Pressable
                    onPress={handleNext}
                    style={({ pressed }) => ({
                        backgroundColor: selectedBill ? '#4361EE' : '#B0BBF5',
                        opacity: pressed ? 0.88 : 1,
                    })}
                    className="h-[52px] rounded-[14px] items-center justify-center"
                >
                    <Text className="text-white text-[16px] font-semibold">Next</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}