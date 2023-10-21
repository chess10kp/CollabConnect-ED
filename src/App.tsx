import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
  <ChakraProvider>
    <Main></Main>
  </ChakraProvider>
  )
}

export default App
