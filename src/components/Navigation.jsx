import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Drawer,
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { teal } from '@mui/material/colors';
const Navigation = () => {
    const color = teal[700]
    const [drawer, setDrawer] = useState(false);

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: color }}>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    {/* <Button variant="outlined"
                         sx={{color : "white"}} 
                         onClick={() => setDrawer(true)}
                         >Outlined</Button> */}
                    <IconButton color='inherit' size='large'
                        onClick={() => setDrawer(true)}>
                        <ModeStandbyIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor='top' open={drawer} onClose={() => setDrawer(false)}>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography variant='h4' component='div' sx={{ marginTop: '0.5em' }}>
                        ELEARNING
                    </Typography>
                    <hr />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default Navigation
