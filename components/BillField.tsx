import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FieldConfig } from "@/constants/types";
// import { FieldConfig } from "@/constants/fieldConfigs";

interface BillFieldProps {
  field: FieldConfig;
  value: string;
  isLast: boolean;
  showPassword: boolean;
  onChangeText: (text: string) => void;
  onTogglePassword: () => void;
}

export default function BillField({
  field,
  value,
  isLast,
  showPassword,
  onChangeText,
  onTogglePassword,
}: BillFieldProps) {
  const isSecure = field.secureTextEntry && !showPassword;

  return (
    <View className={isLast ? "" : "mb-4"}>
      <Text className="text-[12px] text-[#8A8A9A] mb-1.5">{field.label}</Text>

      <View className="flex-row items-center gap-2">
        {/* Input */}
        <View className="flex-1 h-[46px] bg-[#F2F3F7] rounded-[10px] flex-row items-center px-4">
          <TextInput
            placeholder={field.placeholder}
            placeholderTextColor="#AAAAB8"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isSecure}
            keyboardType={field.keyboardType || "default"}
            className="flex-1 text-[14px] text-[#23303B]"
          />
          {field.secureTextEntry && (
            <TouchableOpacity onPress={onTogglePassword} hitSlop={8}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#AAAAB8"
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Fingerprint */}
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
}