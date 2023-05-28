import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00D1BC' />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView 
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {/* Restaurant Cards */}
                <RestaurantCard
                    id={1}
                    imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90'
                    title='Yo! Sushi'
                    rating={4.5}
                    genre='Japanese'
                    address='123 Main St'
                    short_description='This is a test description'
                    dishes={[]}
                    long={20}
                    lat={10}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow