import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import classes from '*.module.css'

export default function Cart({ cart }) {
    const isEmpty = true

    function EmptryCart() {
        return (
            <Typography variant="subtitle1">You have no items in your shopping cart. Start adding some!</Typography>
        )
    }

    function FilledCart() {
        return (
            <>
                <Grid container spacing={3}>

                </Grid>
            </>
        )
    }

    return (
        <Container >
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}
