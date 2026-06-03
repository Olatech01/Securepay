import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'
import { ActionsItemProps } from '@/constants/types'

export default function ActionItem({ item, isSelected, onPress }: ActionsItemProps) {
    return (
        <TouchableOpacity className='mr-4 h-[128.8px] w-[141px] bg-[#FFFFFF] shadow-lg border items-center justify-center border-[#E0E0E0] rounded-lg items-center' style={{shadowColor: '#666666', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5}} onPress={onPress}>
            <View className={`w-14 h-14 rounded-[100%] items-center justify-center mb-2 ${isSelected ? 'bg-primary' : 'bg-surface '}`}>
                <Ionicons name={item.icon as any} size={24} color={isSelected ? '#FFF' : COLORS.primary} />
            </View>
            <Text className="text-[16px] font-semibold">
                {item.name}
            </Text>
        </TouchableOpacity>
    )
}