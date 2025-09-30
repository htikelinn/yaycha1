import React, { useState } from 'react'
import App from './App'
import { AppContext } from './AppContext'; 
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'
import Header from './components/Header';
import Form from './components/Form';

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})


export default function ThemedApp() {
    const [showForm, setShowForm] = useState(false)

    // const [mode, setMode] = useState('dark')
    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{ showForm, setShowForm }}>
                {/* <Header /> */}
                {/* <Form /> */}
                <App />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    )
}
