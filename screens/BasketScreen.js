import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, addToBasket, selectBasketTotal } from '../features/basketSlice'

const BasketScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch()

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    useEffect(()=>{
        const groupedItems = items.reduce((results, item)=>{
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])

    if (items.length == 0) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center">
                <Image 
                    source={require("../assets/Basket.png")}
                    className="h-20 w-20"
                />
                <Text className="text-lg text-gray-400 p-4">Looks empty in here...</Text>
                <TouchableOpacity 
                        className="rounded-lg bg-[#00B8C0] px-5 py-2"
                        onPress={() => navigation.navigate("Dashboard")}
                    >
                        <Text className="text-center text-white text-lg font-bold">Order Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
    
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00B8C0] bg-white shadow-xs">
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">{restaurant.title}</Text>
                </View>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="rounded-full bg-gray-100 absolute top-6 right-6"
                >
                    <XCircleIcon color="#00B8C0" size={35} />
                </TouchableOpacity>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image 
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Delivery%20Guy.png?alt=media&token=3111e8f6-a485-43db-8353-4a534e643fd7' }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">Delivery in 30-45 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00B8C0]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00B8C0]">{items.length} x</Text>
                            <Image 
                                source={{uri: items[0]?.image}}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">
                                <Currency quantity={items[0]?.price} currency='USD'/>
                            </Text>
                            <TouchableOpacity
                                className="py-2 pl-2"
                                onPress={() => dispatch(addToBasket(items[0]))}
                            >
                                <Text className="text-[#00B8C0] text-xs text-center">Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className="py-2 pl-2"
                                onPress={() => dispatch(removeFromBasket({ id: key }))}
                            >
                                <Text className="text-[#00B8C0] text-xs text-center">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View className="p-5 pb-10 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency='USD'/>
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={5.99} currency='USD'/>
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">
                            <Currency quantity={basketTotal + 5.99} currency='USD'/>
                        </Text>
                    </View>
                    <TouchableOpacity 
                        className="rounded-lg bg-[#00B8C0] p-4"
                        onPress={() => navigation.navigate("PreparingOrderScreen")}
                    >
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen