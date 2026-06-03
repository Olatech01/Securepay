import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { HeaderProps } from '@/constants/types'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'
import { useRouter } from 'expo-router'
// import { useCart } from '@/context/CartContext'

export default function Header({ title, showBack, showSearch, showCart, showMenu, showLogo, showNotification }: HeaderProps) {

    const router = useRouter()
    // const { itemCount } = useCart()
    return (
        <View className='flex-row items-center justify-between px-4 py-3 bg-white'>
            <View className='flex-row items-center justify-between flex-1'>
                {showLogo && (
                    <View className=''>
                        <Image source={require("../assets/images/user.png")} className='' style={{ width: 50, height: 50 }} resizeMode='contain' />
                    </View>
                )}
                {showBack && (
                    <TouchableOpacity onPress={() => router.back()} className='mr-3 bg-[#A4A9AE]/20 h-[47px] flex-row items-center justify-center w-[47px] rounded-full'>
                        <Ionicons name='chevron-back-outline' size={24} color="#A4A9AE" />
                    </TouchableOpacity>
                )}

                {showMenu && (
                    <TouchableOpacity onPress={() => router.back} className='mr-3'>
                        <Ionicons name='menu-outline' size={28} color={COLORS.primary} />
                    </TouchableOpacity>
                )}

                {title && (
                    <Text className='text-xl font-bold text-primary text-center flex-1'>
                        {title}
                    </Text>
                )}

                {showNotification && (
                    <TouchableOpacity onPress={() => router.push('/(tabs)')} className='mr-3 bg-[#A4A9AE]/20 h-[47px] flex-row items-center justify-center w-[47px] rounded-full'>
                        <Ionicons name='notifications-outline' size={28} color="#A4A9AE" />
                    </TouchableOpacity>
                )}



                {/* {(!title && !showSearch) && <View className='flex-1' />} */}
            </View>
            {/* <View className='flex-row items-center gap-4'>
                {showSearch && (
                    <TouchableOpacity onPress={() => router.back} className='mr-3'>
                        <Ionicons name='search-outline' size={28} color={COLORS.primary} />
                    </TouchableOpacity>
                )}

                {showCart && (
                    <TouchableOpacity onPress={() => router.push('/(tabs)/cart')}>
                        <View className='relative'>
                            <Ionicons name='bag-outline' size={28} color={COLORS.primary} />
                            <View className='absolute -top-1 -right-1 bg-accent rounded-full w-4 h-4 items-center justify-center'>
                                <Text className='text-white text-[10px] font-bold'>
                                    {itemCount}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            </View> */}
        </View>
    )
}