import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../firebase/config'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(()=>{
                navigation.replace("LoginScreen")
            })
            .catch(error => alert(error.message))
    }
        
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Text className="font-bold text-lg mb-2">Email: </Text>
            <Text className="text-md mb-4">{ auth.currentUser?.email }</Text>
            <TouchableOpacity 
                className="rounded-lg bg-[#00B8C0] px-5 py-2"
                onPress={() => navigation.navigate("Dashboard")}
            >
                <Text className="text-center text-white text-md font-bold">Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProfileScreen