import React from 'react';
import { teal } from '@mui/material/colors';
import { Typography, Box } from '@mui/material';

const Home = () => {
    const backgroundBox = teal[50]
    const backgroundInBox = teal[100]
    return (
        <>
            <Box sx={{
                backgroundColor : backgroundBox,
                margin : '2em',
                borderRadius : '2em',
                height : '35em'}}>
                <Typography variant='h3'>
                    Dashboard
                </Typography>
                <Box
                sx={{
                    marginTop : '2em',
                    backgroundColor : backgroundInBox,
                    width : '50%',
                    height : '100px',
                    borderRadius : '0px 100px 100px 0px'
                }}></Box>
                <Box
                sx={{
                    marginTop : '2em',
                    backgroundColor : backgroundInBox,
                    width : '50%',
                    height : '100px',
                    borderRadius : '0px 100px 100px 0px'
                }}></Box>
                <Box
                sx={{
                    marginTop : '2em',
                    backgroundColor : backgroundInBox,
                    width : '50%',
                    height : '100px',
                    borderRadius : '0px 100px 100px 0px'
                }}></Box>
            </Box>
        </>
    )
}

export default Home