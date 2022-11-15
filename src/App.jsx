import React from "react"
import styled, { ThemeProvider } from "styled-components/native"
import { lightTheme, darkTheme } from "./theme"
import { Text, View, Button } from "react-native"
import { Container } from "./App.module"

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Button title="Learn More" color="#841584" />
      </Container>
    </ThemeProvider>
  )
}

export default App
