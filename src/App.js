import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Navbar, Products } from './components'

export default function () {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    async function fetchProducts() {
        const { data } = await commerce.products.list()
        setProducts(data)

    }

    async function fetchCart() {
        const cart = await commerce.cart.retrieve()
        setCart(cart)
    }

    async function handleAddToCart(productId, quantity) {
        const response = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    console.log(cart)

    return (
        <div>
            <Navbar />
            <Products products={products} onAddToCard={handleAddToCart} />
        </div>
    )
}
