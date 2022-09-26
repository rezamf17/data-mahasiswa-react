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
import { Link } from 'react-router-dom'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import DataMahasiswa from '../views/DataMahasiswa';
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
                            <ListItemButton component={Link} to='/' onClick={() => setDrawer(false)}>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                            <ListItemButton component={Link} to='/data-mahasiswa' onClick={() => setDrawer(false)}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Data Mahasiswa" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setDrawer(false)}>
                                <ListItemIcon>
                                    <ConfirmationNumberIcon />
                                </ListItemIcon>
                                <ListItemText primary="Data Nilai" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default Navigation
