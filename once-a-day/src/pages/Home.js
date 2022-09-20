import {Typography } from '@mui/material'
import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'
import ListItem from '@mui/material/ListItem'

const emoji = String.fromCharCode('U+1F601');

const Home = () => {

    return (
        <>        
            <Container>
                <Box>
                    <Grid2>
                        <ListItem>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{                                
                                // mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                color: 'inherit',
                                textDecoration: 'none',  
                                mb: 5                              
                            }}>
                            Welcome Tyler.
                        </Typography>
                        </ListItem>
                    </Grid2>
                </Box>
                {/* <Box> */}
                    <Grid2>  
                        <ListItem>
                        <Typography 
                        variant="h2"
                        sx={{
                            textAlign: 'center'
                        }}>
                            😔🙁😐🙂😃 
                        </Typography>         
                        </ListItem>   
                    </Grid2>
                {/* </Box> */}
            </Container>
        </>
    )
    }
    export default Home

