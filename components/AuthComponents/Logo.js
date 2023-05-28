import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../../assets/logo.png')} className="h-20 w-20 mb-6 scale-150" />
}
