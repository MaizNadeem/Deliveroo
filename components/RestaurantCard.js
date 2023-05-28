import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    geopoint,
}) => {

    return (
        <TouchableOpacity className='bg-white mr-3 shadow rounded-lg'>
            <Image 
                source={{ uri: imgUrl }}
                className='h-36 w-64 rounded-t-lg'
            />
            <View className='px-3 pb-4 '>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <StarIcon color='#F59E0B' size={15} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-yellow-500'>{rating}</Text> · {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon color='green' opacity={0.4} size={15} />
                    <Text className='text-xs text-gray-500'>Nearby · {address.length > 25 ? `${address.substring(0, 25)}...` : address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard