import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5.00', image: 'https://images.pexels.com/photos/1599005/pexels-photo-1599005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook Crap', price: '$10.00', image: 'https://images.pexels.com/photos/4186329/pexels-photo-4186329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
]

export default function Products() {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
