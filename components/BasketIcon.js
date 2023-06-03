import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectBasketTotal, selectBasketItems } from '../features/basketSlice'

const BasketIcon = () => {

    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const navigation = useNavigation()

    if (items.length === 0) return null

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity 
                className="mx-5 bg-[#00B8C0] p-4 rounded-lg flex-row items-center space-x-1"
                onPress={() => navigation.navigate("BasketScreen")}
            >
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={basketTotal} currency='USD' />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon