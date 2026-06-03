import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'
import { ServiceItemProps } from '@/constants/types'

export default function ServiceItem({ item, isSelected, onPress }: ServiceItemProps) {
    return (
        <TouchableOpacity className='mr-4 items-center justify-center rounded-lg items-center' onPress={onPress}>
            <View className={`w-[76px] h-[75px] rounded-[10px] items-center justify-center mb-2 ${isSelected ? 'bg-[#456EFE]' : 'bg-surface '}`}>
                <Ionicons name={item.icon as any} size={30} color={isSelected ? '#FFF' : "#456EFE"} />
            </View>
            <Text className="text-[13px] font-semibold text-[#8E949A]">
                {item.name}
            </Text>
        </TouchableOpacity>
    )
}