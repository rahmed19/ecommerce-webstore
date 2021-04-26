import React from 'react'
import Grid from '@material-ui/core'

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook Crap' }
]

export default function Products() {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
