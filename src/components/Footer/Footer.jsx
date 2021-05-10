import React from 'react'
import Container from '@material-ui/core/Grid'
import Grid from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'


export default function Footer() {
    return (
        <>
            <Box
                fontFamily="Arial"
                textAlign="center"
                px={{ xs: 1, sm: 3 }}
                py={{ xs: 3, sm: 3 }}
                bgcolor="white" color="black">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box>
                            Using Material UI and&nbsp;
                            
                            <Link href="https://commercejs.com/" target = "new" color="inherit">Commerce.js</Link>, 
                            
                            this demo ReactJS project was built largely based on this&nbsp;
                                <Link href="https://www.youtube.com/watch?v=377AQ0y6LPA" target="new" color="inherit">Youtube tutorial.</Link>
                            </Box>
                            <br /><br />
                            <Box fontWeight="bold">
                                Find out more about me and my work @&nbsp;
                                <Link href="https://rayahmed.ca" target="new" color="inherit">rayahmed.ca</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
