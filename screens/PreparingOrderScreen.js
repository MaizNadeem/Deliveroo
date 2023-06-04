import React, { useEffect } from 'react'
import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../features/basketSlice';

const PreparingOrderScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(()=>{
        setTimeout(() => {
            dispatch(clearBasket())
            navigation.navigate("DeliveryScreen")
        }, 4000)
    }, [])

    return (
        <SafeAreaView className="bg-[#00B8C0] flex-1 justify-center items-center">
            <StatusBar backgroundColor="#00B8C0" barStyle="dark-content" />
                <Animatable.View
                    animation="slideInUp"
                    iterationCount={1}
                >
                    <Video
                      source={require('../assets/Order.mp4')}
                      resizeMode="cover"
                      className="h-96 w-96"
                      shouldPlay
                      isLooping
                    />
                </Animatable.View>
                <Animatable.Text
                  animation="slideInUp"
                  iterationCount={1}
                  className="text-xl text-white font-bold text-center"
                >
                  Waiting for Restaurant{'\n'}
                  to accept your order...
                </Animatable.Text>
                <Animatable.View
                    animation="slideInUp"
                    iterationCount={1}
                >
                    <Progress.Circle size={60} indeterminate={true} color="white" className="m-8" />
                </Animatable.View>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen