import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Navbar, Products } from './components'

export default function () {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        const { data } = await commerce.products.list()
        setProducts(data)

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}
