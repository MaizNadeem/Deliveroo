import { View, Text, TouchableOpacity, BackHandler, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PhoneIcon, XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

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
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-shadow-android">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">30-45 Minutes</Text>
                        </View>
                        <Image 
                            source={require('../assets/bike.webp')}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar size={30} indeterminate={true} color='#00B8C0'/>
                    <Text className="mt-3 text-gray-400">Your order at {restaurant.title} is being prepared. </Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.geopointObject._lat,
                    longitude: restaurant.geopointObject._long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.geopointObject._lat,
                        longitude: restaurant.geopointObject._long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor='#00B8C0'
                />
            </MapView>
            <SafeAreaView className="flex-row bg-white items-center space-x-5 h-28">
                <Image 
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Delivery%20Guy.png?alt=media&token=3111e8f6-a485-43db-8353-4a534e643fd7' }}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5 mb-10"
                />
                <View className="flex-1 mb-10">
                    <Text className="text-lg">David Kushner</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <TouchableOpacity className="flex-row items-center mb-10">
                    <PhoneIcon size={25} color='#00B8C0'/>
                    <Text className="text-[#00B8C0] text-lg mr-5 ml-1 font-bold">Call</Text>
                </TouchableOpacity>
            </SafeAreaView>


        </View>
    )
}

export default DeliveryScreen