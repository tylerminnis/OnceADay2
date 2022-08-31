import {Typography } from '@mui/material'
import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'


const Home = () => {

    return (
        <>        
            <Container>
                <Box>
                    <Grid2>
                        <Typography
                            variant="h4"
                            noWrap
                            //    component="a"
                            //    href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Roboto',
                                fontWeight: 500,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            Welcome Tyler.
                        </Typography>
                    </Grid2>
                </Box>
            </Container>        
        </>
    )
    }
    export default Home