import {Typography } from '@mui/material'
import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'
import ListItem from '@mui/material/ListItem'
// import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
// const emoji = String.fromCharCode('U+1F601');

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
                                pb: 3,
                                pt: 5                              
                            }}>
                            Welcome user.
                        </Typography>
                        </ListItem>
                    </Grid2>
                </Box>
                <Box 
                sx={{
                    // textAlign: 'center'
                    
                }}>
                    <Grid2 s display='flex' justifyContent='center' alignItem="center" >
                        <ListItem>
                        {/* <Typography 
                        variant="h2"
                        sx={{
                            textAlign: 'center'
                        }}>
                        {/* </Typography>          */}
                        <Box 
                            sx={{
                                textAlign: 'center',
                                alignItems: 'center',
                                position: '',
                                width: '10%',
                                height: '50px',
                                backgroundColor: '#eaeaea',
                                '&:hover': {
                                    backgroundColor: 'f7f7f7',
                                    opacity: [0.9, 0.8, 0.7]
                                },
                                p: 2
                            }}>
                        <span role="img" aria-label='upset'>😔</span>
                        </Box>
                        <Box
                        sx={{
                            textAlign: 'center',
                            alignItems: 'center',
                            position: '',
                            width: '10%',
                            height: '50px',
                            backgroundColor: '#eaeaea',
                            '&:hover': {
                                backgroundColor: 'f7f7f7',
                                opacity: [0.9, 0.8, 0.7]
                            },
                            p: 2
                        }}>
                        <span role="img" aria-label='kinda bad'>🙁</span>
                        </Box>
                        <Box
                        sx={{
                            textAlign: 'center',
                            alignItems: 'center',
                            position: '',
                            width: '10%',
                            height: '50px',
                            backgroundColor: '#eaeaea',
                            '&:hover': {
                                backgroundColor: 'f7f7f7',
                                opacity: [0.9, 0.8, 0.7]
                            },
                            p: 2
                        }}>
                        <span role="img" aria-label='alright'>😐</span>
                        </Box>
                        <Box
                        sx={{
                            textAlign: 'center',
                            alignItems: 'center',
                            position: '',
                            width: '10%',
                            height: '50px',
                            backgroundColor: '#eaeaea',
                            '&:hover': {
                                backgroundColor: 'f7f7f7',
                                opacity: [0.9, 0.8, 0.7]
                            },
                            p: 2
                        }}>
                        <span role="img" aria-label='good tbh'>🙂</span>
                        </Box>
                        <Box
                        sx={{
                            textAlign: 'center',
                            alignItems: 'center',
                            position: '',
                            width: '10%',
                            height: '50px',
                            backgroundColor: '#eaeaea',
                            '&:hover': {
                                backgroundColor: 'f7f7f7',
                                opacity: [0.9, 0.8, 0.7]
                            },
                            p: 2
                        }}>
                        <span role="img" aria-label='very good!'>😃</span>                        
                        </Box>                        
                        </ListItem>   
                    </Grid2>
                </Box>

                {/* this is input */}
                <Box 
                    component='form'
                    sx={{
                        p: 2
                    }}>
                        <TextField
                            id='journal'
                            label='Let out your thoughts :)'
                            multiline
                            rows={8}
                            fullWidth
                            >
                        </TextField>
                    <Button variant='contained'>
                        <span role='img' aria-label='rocket-ship'>Submit🚀</span>
                    </Button>
                </Box>
            </Container>
        </>
    )
    }

    export default Home