import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description, data }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the restaurant data using the references
    const fetchRestaurants = async () => {
      const fetchedRestaurants = await Promise.all(data.map(async (ref) => {
        const doc = await ref.get();
        if (doc.exists) {
          return doc.data();
        }
      }));
      setRestaurants(fetchedRestaurants.filter(Boolean));
    };

    fetchRestaurants();
  }, [data]);

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00B8C0' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 5
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RestaurantCard
            id={item.id}
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.genre}
            address={item.address}
            short_description={item['short description']}
            dishes={item.dish}
            geopoint={item.location}
          />
        )}
      />
    </View>
  )
}

export default FeaturedRow
