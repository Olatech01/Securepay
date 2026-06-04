import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Bill = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

interface BillCardProps {
  billing: Bill;
  isSelected: boolean;
  onPress: () => void;
}

export default function BillCard({ billing, isSelected, onPress }: BillCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} className="mt-3">
      <View
        className="h-[64px] flex-row px-3 rounded-[12px] bg-white items-center justify-between"
        style={{
          borderWidth: 1.5,
          borderColor: isSelected ? "#4361EE" : "#F0F0F0",
        }}
      >
        {/* Icon + Name */}
        <View className="flex-row items-center gap-2">
          <View
            className="h-[34px] w-[34px] rounded-[8px] justify-center items-center"
            style={{ backgroundColor: billing.color + "22" }}
          >
            <Ionicons name={billing.icon as any} size={17} color={billing.color} />
          </View>
          <Text className="text-[15px] font-medium text-[#23303B]">{billing.name}</Text>
        </View>

        {/* Radio */}
        <View
          className="h-[20px] w-[20px] rounded-full items-center justify-center"
          style={{
            borderWidth: 2,
            borderColor: isSelected ? "#4361EE" : "#C8C8D0",
          }}
        >
          {isSelected && <View className="h-[10px] w-[10px] rounded-full bg-[#4361EE]" />}
        </View>
      </View>
    </TouchableOpacity>
  );
}