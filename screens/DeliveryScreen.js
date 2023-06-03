import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'

const DeliveryScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          handleGoBack
        );
        return () => backHandler.remove();
    }, []);
    
    const handleGoBack = () => {
        navigation.navigate('Dashboard');
        return true; // Return true to prevent default back button behavior
    };

    return (
        <View className="bg-[#00B8C0] flex-1">
            <StatusBar backgroundColor="#00B8C0" barStyle="dark-content" />
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} >
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View>
                        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                        <Text className="text-4xl font-bold">30-45 Minutes</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen