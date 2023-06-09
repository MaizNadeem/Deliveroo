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
            <Text className="font-bold text-lg mb-2">Email: { auth.currentUser?.email }</Text>
            <TouchableOpacity 
                onPress={handleSignOut}
                className="rounded-lg bg-[#00B8C0] px-10 py-2"
            >
                <Text className="text-center text-white text-lg font-bold">Sign out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProfileScreen