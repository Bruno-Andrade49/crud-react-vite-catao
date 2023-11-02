import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/globalStyles.js'
import { ChakraProvider } from '@chakra-ui/react'
import { DrawerProvider } from './context/drawerContext/DrawerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DrawerProvider>
      <ChakraProvider>
        <App />
        <GlobalStyle />
      </ChakraProvider>
    </DrawerProvider>
  </React.StrictMode>,
)
