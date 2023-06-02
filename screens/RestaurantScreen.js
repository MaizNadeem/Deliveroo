import { Text, ScrollView, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';

const RestaurantScreen = () => {

    const [dishesArray, setDishesArray] = useState(null) 

    const navigation = useNavigation()
    const route = useRoute();
    const {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        geopoint,
    } = route.params;

    const dishPromises = dishes.map((dishRef) => {
        return dishRef.get()
          .then((dishSnapshot) => {
            if (dishSnapshot.exists) {
              return dishSnapshot.data();
            } else {
              console.log('Document does not exist');
              return null;
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error);
            return null;
          });
    });
      
    Promise.all(dishPromises)
        .then((dishDataArray) => {
        // The dishDataArray will contain the data from all dishes
        console.log(dishDataArray);
        setDishesArray(dishDataArray); // Update the state with the fetched dish data
    });

    useEffect(() => {

    }, [dishesArray]);

    return (
        <View className="flex-1">
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" />
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
                    <ArrowLeftIcon size={20} color="#00D1BC"/> 
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
                <TouchableOpacity className="flex-row flex-1 items-center space-x-1 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                    <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
                    <ChevronRightIcon color="#00D1BC"/>
                </TouchableOpacity>
            </View>
            <View>
                <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            </View>

            {/* Dish Rows */}

            {dishesArray && dishesArray.map((dish) => (
                <DishRow 
                    key={dish.id}
                    id={dish.id}
                    name={dish.name}
                    description={dish['short description']}
                    price={dish.price}
                    image={dish.image}
                />
            ))}

        </ScrollView>
        </View>
    );
};

export default RestaurantScreen;
