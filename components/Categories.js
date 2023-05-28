import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
    >
      {/* Category Card */}
        <CategoryCard 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90' 
            title='Testing 1'
        />
        <CategoryCard 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90' 
            title='Testing 2'
        />
        <CategoryCard 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90' 
            title='Testing 3'
        />
        <CategoryCard 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90' 
            title='Testing 4'
        />
        <CategoryCard 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90'
            title='Testing 5'
        />
        <CategoryCard 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90' 
            title='Testing 6'
        />
        <CategoryCard 
            imgUrl='https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Sushi.jpg?alt=media&token=1000358b-f2c9-40cf-a8b9-6fb804c0eb90' 
            title='Testing 7'
        />
    </ScrollView>
  )
}

export default Categories