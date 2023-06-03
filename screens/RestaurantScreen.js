import { Text, ScrollView, View, Image, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import BasketIcon from '../components/BasketIcon';
import DishRow from '../components/DishRow';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {

    const [dishes, setDishes] = useState(null) 

    const navigation = useNavigation()
    const route = useRoute();
    const dispatch = useDispatch()

    const {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishesArray,
        geopointObject,
    } = route.params;

    useEffect(() => {

        setDishes(dishesArray)

        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishesArray,
            geopointObject,
        }))

    }, []);

    return (
        <View className="flex-1">
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" />
            <>
                <BasketIcon />
                <ScrollView>
                    <View className="relative">
                        <Image
                            source={{ uri: imgUrl }}
                            className="w-full h-60 bg-gray-300 p-4"
                        />
                        <TouchableOpacity 
                            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                            onPress={()=>navigation.goBack()}
                        >
                            <ArrowLeftIcon size={20} color="#00B8C0"/> 
                        </TouchableOpacity> 
                    </View>
                    <View className="bg-white">
                        <View className="px-4 pt-4">
                            <Text className="text-3xl font-bold">{title}</Text>
                            <View className="flex-row space-x-2 my-2">
                                <View className="flex-row items-center sx-1">
                                    <StarIcon color='#F59E0B' size={15} />
                                    <Text className='text-xs text-gray-500'>
                                        <Text className='text-yellow-500'>{rating}</Text> · {genre}
                                    </Text>
                                </View>
                                <View className="flex-row items-center sx-1">
                                    <MapPinIcon color='green' opacity={0.4} size={15} />
                                    <Text className='text-xs text-gray-500'>Nearby · {address.length > 40 ? `${address.substring(0, 25)}...` : address}</Text>
                                </View>
                            </View>
                            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                        </View>

                    </View>
                    <TouchableOpacity className="flex-row flex-1 bg-white items-center space-x-1 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                        <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
                        <ChevronRightIcon color="#00B8C0"/>
                    </TouchableOpacity>
                    <View>
                        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
                    </View>

                    {/* Dish Rows */}

                    <View className="pb-36">
                        {dishes ? (
                            dishes.map((dish) => (
                                <DishRow
                                    key={dish.id}
                                    id={dish.id}
                                    name={dish.name}
                                    description={dish['short description']}
                                    price={dish.price}
                                    image={dish.image}
                                />
                            ))
                        ) : (
                            <ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} size="large" color="#00B8C0" />
                        )}
                    </View>
                </ScrollView>
            </>
        </View>
    );
};

export default RestaurantScreen;
