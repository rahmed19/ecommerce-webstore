import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Navbar, Products, Cart, Checkout, FooterContainer } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    async function fetchProducts() {
        const { data } = await commerce.products.list()
        setProducts(data)

    }

    async function fetchCart() {
        const cart = await commerce.cart.retrieve()
        setCart(cart)
    }

    async function handleAddToCart(productId, quantity) {
        const { cart } = await commerce.cart.add(productId, quantity)

        setCart(cart)
    }

    async function handleUpdateCartQuantity(productId, quantity) {
        const { cart } = await commerce.cart.update(productId, { quantity })

        setCart(cart)
    }

    async function handleRemoveFromCart(productId) {
        const { cart } = await commerce.cart.remove(productId)

        setCart(cart)
    }

    async function handleEmptyCart() {
        const { cart } = await commerce.cart.empty()

        setCart(cart)
    }

    async function refreshCart() {
        const newCart = await commerce.cart.refresh()
        setCart(newCart)
    }

    async function handleCaptureCheckout(checkoutId, newOrder) {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutId, newOrder)
            setOrder(incomingOrder)
            console.log(incomingOrder)
            refreshCart()
            console.log('cart should be refreshed here!')
            console.log(cart)

        } catch (error) {
            setErrorMessage(error.data.error.message)
            console.log(errorMessage)
        }
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        {cart.line_items ?
                            <Cart cart={cart}
                                handleUpdateCartQuantity={handleUpdateCartQuantity}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleEmptyCart={handleEmptyCart}

                            />
                            : <h1 color="black">Loading...</h1>}
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                        />
                    </Route>

                </Switch>
                <FooterContainer>

                </FooterContainer>
            </div>

        </Router>

    )
}
