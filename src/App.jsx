import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { lightTheme, darkTheme } from './theme'
import { Text, View, Button, StatusBar } from 'react-native'
import { Container } from './App.module'
import { Input } from './components/common/input'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {
  const [isDark, setIsDark] = useState(true)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Container></Container>
        </ThemeProvider>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
