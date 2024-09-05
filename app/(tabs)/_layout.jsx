import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import icon from '@/assets/images/icons'

const TabIcon = ({color, focused, icon, color }) => {
    return(
        <View>
            <Image 
            source={icon}
            />
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
    <Tabs>
        <Tabs.Screen name='home'
         options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon 
                color={color}
                focused={focused}
                icon={icon.home}
                />
            )
            }} />
    </Tabs>
    </>
  )
}

export default TabsLayout