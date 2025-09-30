import React from 'react'
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import {
Menu as MenuIcon,
Add as AddIcon,
LightMode as LightModeIcon,
Add,
LightMode,
} from "@mui/icons-material";
import { useApp } from '../AppContext';

export default function Header() {
    const { showForm, setShowForm } = useApp();
        return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton color='inherit' edge='start'>
                    <MenuIcon />
                </IconButton>
                <Typography sx={{ flexGrow: 1, ml: 2 }}>YayCha</Typography>
                <Box>
                    <IconButton color='inherit' onClick={() => setShowForm(!showForm)}>
                        <AddIcon />
                    </IconButton>
                    <IconButton color='inherit' edge='end'>
                        <LightMode />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
