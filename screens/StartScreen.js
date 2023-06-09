import React from 'react'
import Background from '../components/AuthComponents/Background'
import Logo from '../components/AuthComponents/Logo'
import Header from '../components/AuthComponents/Header'
import Button from '../components/AuthComponents/Button'
import Paragraph from '../components/AuthComponents/Paragraph'
import { useEffect } from 'react'
import firebase from '../firebase/config'


const db = firebase.firestore()

export default function StartScreen({ navigation }) {


  useEffect(() => {
    const updateCurrentScreen = async () => {
      try {
        const currentScreen = 'StartScreen'; // Replace with the name of the current screen
  
        await db.collection('Users').doc('1').update({
          currentScreen: currentScreen,
        });
      } catch (error) {
        console.log('Error updating current screen:', error);
      }
    };
  
    updateCurrentScreen();
  }, []);

  return (
    <Background>
      <Logo />
      <Header>On Board...</Header>
      <Paragraph>
        Delicious food, delivered fast!
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        LOGIN
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        SIGN UP
      </Button>
    </Background>
  )
}