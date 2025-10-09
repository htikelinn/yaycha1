import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
    LightMode,
    DarkMode,
} from "@mui/icons-material";
import { useApp } from '../AppContext';

export default function Header() {
    const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton color='inherit' edge='start' onClick={() => setShowDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography sx={{ flexGrow: 1, ml: 2,}}>YayCha</Typography>
                <Box>
                    <IconButton color='inherit' onClick={() => setShowForm(!showForm)}>
                        <AddIcon />
                    </IconButton>
                    {mode === "dark" ? (
                        <IconButton color='inherit' edge='end' onClick={() => setMode("light")}>
                            <LightMode />
                        </IconButton>
                    ) : (
                        <IconButton color='inherit' edge='end' onClick={() => setMode("dark")}>
                            <DarkMode />
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
