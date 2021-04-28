import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Navbar, Products, Cart } from './components'
import { LocalDining } from '@material-ui/icons'


export default function App() {
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
        const item = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            {cart.line_items ? <Cart cart={cart} /> : <h1 color="black">Loading...</h1>}
        </div>
    )
}
