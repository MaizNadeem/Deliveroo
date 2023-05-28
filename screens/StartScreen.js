import React from 'react'
import Background from '../components/AuthComponents/Background'
import Logo from '../components/AuthComponents/Logo'
import Header from '../components/AuthComponents/Header'
import Button from '../components/AuthComponents/Button'
import Paragraph from '../components/AuthComponents/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Deliveroo!</Header>
      <Paragraph>
        Delicious food, delivered fast!
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}