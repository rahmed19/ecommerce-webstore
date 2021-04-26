import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5.00' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook Crap', price: '$10.00' }
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
