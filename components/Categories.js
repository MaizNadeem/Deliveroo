import { FlatList, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { SafeAreaView } from 'react-native-safe-area-context'

const Categories = ({ categories }) => {

    return (
        
            <FlatList
                className='mt-2'
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CategoryCard imgUrl={item.image} title={item.name} />
                )}
                ListHeaderComponent={<View className="ml-4" />}
                ListFooterComponent={<View className="mr-4" />}
            />
    )
}

export default Categories