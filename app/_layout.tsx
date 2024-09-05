import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poopins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poopins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poopins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poopins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poopins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poopins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poopins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poopins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poopins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [error, fontsLoaded])

  if (!fontsLoaded && !error) return null

  return(
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}} />
    </Stack>

  )
}

export default _layout

  const styles = StyleSheet.create({})