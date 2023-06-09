import React, { useEffect } from 'react';
import useFirestoreAdd from '../hooks/UseFirestoreAdd';
import { TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const AddFirestoreData = () => {
    const navigation = useNavigation();
    const [addDocument, isAdding, error] = useFirestoreAdd();

    const handleAddDish = () => {
        const dishData1 = {
        id: 26,
        image:
            'https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Dish%2FSushi%20Saito%2FRamen.jpg?alt=media&token=f3c10e32-baa7-4cce-993c-e4f03a7fa528',
        name: 'Ramen',
        price: 11.99,
        'short description':
            'A Japanese noodle soup dish with a flavorful broth, topped with various ingredients such as sliced pork, soft-boiled egg, green onions, and seaweed.',
        side: false,
        };

        addDocument(dishData1, 'Dish');
    };

    const handleAddRestaurant = () => {
        const restaurantData = {
        address: '789 Elm Street, San Francisco, CA',
        dish: [],
        genre: 'Chinese',
        id: 7,
        image:
            'https://firebasestorage.googleapis.com/v0/b/deliveroo-2-c6550.appspot.com/o/Restaurant%2FDin%20Tai%20Fung.jpg?alt=media&token=41d6d095-25e7-42d2-aea2-b27a8db0bcd1',
        location: new firebase.firestore.GeoPoint(31.37213, 74.185995),
        name: 'Din Tai Fung',
        rating: 4.7,
        'short description':
            'Experience the culinary delights of Din Tai Fung. Our menu features a wide selection of delectable Chinese dishes, including our famous dumplings. Indulge in the flavors of authentic Chinese cuisine in a modern and welcoming ambiance.',
        };

        addDocument(restaurantData, 'Restaurant');
    };

    const handleAddDeviceOS = () => {
        const deviceData = {
            deviceOS: Constants.platform?.ios ? 'ios' : 'android'
        };

        addDocument(deviceData, 'Devices');
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            {isAdding && <Text>Adding document...</Text>}
            {error && <Text>Error adding document: {error.message}</Text>}

            <TouchableOpacity
                onPress={handleAddDish}
                disabled={isAdding}
                className="bg-[#00B8C0] rounded-md p-4 mb-4 w-40 items-center"
            >
                <Text className="text-white">Add Dish</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleAddRestaurant}
                disabled={isAdding}
                className="bg-[#00B8C0] rounded-md p-4 mb-4 w-40 items-center"
            >
                <Text className="text-white">Add Restaurant</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleAddDeviceOS}
                disabled={isAdding}
                className="bg-[#00B8C0] rounded-md p-4 mb-4 w-40 items-center"
            >
                <Text className="text-white">Add Device Info</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')}
                disabled={isAdding}
                className="bg-[#00B8C0] rounded-md p-4 mb-4 w-40 items-center"
            >
                <Text className="text-white">Dashboard</Text>
            </TouchableOpacity>

        </SafeAreaView>
  );
};

export default AddFirestoreData;
