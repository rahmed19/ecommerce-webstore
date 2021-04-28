import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
//MenuItem, Menu,
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import logo from '../../assets/commerce.png'

export default function Navbar() {
    const classes = useStyles()

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="ReactJS Demo Commerce Store" height="25px" className={classes.image} />
                        ReactJS Demo Commerce Store
                </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
