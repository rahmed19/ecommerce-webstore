import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'
import useStyles from './styles'
import { Link, useHistory } from 'react-router-dom'

const steps = ['Shipping address', 'Payment details']

export default function Checkout({ cart, order, onCaptureCheckout, error }) {
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})
    const history = useHistory()

    const classes = useStyles()

    useEffect(() => {
        async function generateToken() {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                setCheckoutToken(token)
            } catch (error) {
                if (activeStep !== steps.length) history.push('/')
            }
        }
        generateToken()
        console.log(cart.total_items)
    }, [cart])

    function nextStep() {
        setActiveStep((prevState) => prevState + 1)
    }

    function backStep() {
        setActiveStep((prevState) => prevState - 1)
    }

    function next(data) {
        setShippingData(data)
        nextStep()
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">
                    Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">
                    Reference: {order.customer_reference}
                </Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>

        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    )

    if (error) {
        <>
            <Typography variant="h5">
                Error: {error}
            </Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    }

    const Form = () => (
        activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> :
            <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} shippingData={shippingData} />
    )

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}

                </Paper>

            </main>
        </>
    )
}
