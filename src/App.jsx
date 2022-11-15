import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components/native"
import { lightTheme, darkTheme } from "./theme"
import { Text, View, Button, StatusBar } from "react-native"
import { Container } from "./App.module"

const App = () => {
  const [isDark, setIsDark] = useState(true)
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={
            isDark ? darkTheme.background : lightTheme.background
          }
        />
        <Button title="Learn More" color="#841584" />
      </Container>
    </ThemeProvider>
  )
}

export default App
