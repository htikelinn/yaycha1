import React from 'react'
import { Avatar, Box, ListItem,List, ListItemAvatar, ListItemText, Typography } from '@mui/material'

export default function UserList({title}) {
  return (
    <Box>
      <Typography variant='h4' sx={{ mb: 3}}>{title}</Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText primary="Htin @htin" secondary="Htin's profile bio" />
        </ListItem>
      </List>
    </Box>
  )
}
