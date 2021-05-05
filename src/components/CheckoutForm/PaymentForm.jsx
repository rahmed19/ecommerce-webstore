// import React from 'react';
// import { Typography, Button, Divider } from '@material-ui/core';
// import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// import Review from './Review';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);


// const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
//     const handleSubmit = async (event, elements, stripe) => {
//         event.preventDefault();

//         if (!stripe || !elements) return;

//         const cardElement = elements.getElement(CardElement);

//         const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

//         if (error) {
//             console.log('[error]', error);
//         } else {
//             const orderData = {


//                 line_items: checkoutToken.live.line_items,
//                 item_7RyWOwmK5nEa2V: {
//                     quantity: 1,
//                     variants: {
//                         vgrp_p6dP5g0M4ln7kA: 'optn_DeN1ql93doz3ym',
//                     }
//                 },
//                 customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
//                 shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
//                 fulfillment: { shipping_method: shippingData.shippingOption },
//                 quantity: {
//                     quantity: 2
//                 },
//                 payment: {
//                     gateway: 'stripe',
//                     stripe: {
//                         payment_method_id: paymentMethod.id,
//                     },
//                 },
//             }
//             console.log(checkoutToken.live.line_items.quantity)
//             // console.log(shippingData)
//             onCaptureCheckout(checkoutToken.id, orderData);

//             nextStep();
//         }
//     }

//     return (
//         <>
//             <Review checkoutToken={checkoutToken} />
//             <Divider />
//             <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
//             <Elements stripe={stripePromise}>
//                 <ElementsConsumer>{({ elements, stripe }) => (
//                     <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
//                         <CardElement />
//                         <br /> <br />
//                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <Button variant="outlined" onClick={backStep}>Back</Button>
//                             <Button type="submit" variant="contained" disabled={!stripe} color="primary">
//                                 Pay {checkoutToken.live.subtotal.formatted_with_symbol}
//                             </Button>
//                         </div>
//                     </form>
//                 )}
//                 </ElementsConsumer>
//             </Elements>
//         </>
//     );
// };

// export default PaymentForm;

import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE)

export default function PaymentForm({ checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep }) {

    async function handleSubmit(event, elements, stripe) {
        event.preventDefault()
        if (!stripe || !elements) return

        const cardElement = elements.getElement(CardElement)

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })

        if (error) {
            console.log('[error]', error)
        } else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address1,
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry
                },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }
            onCaptureCheckout(checkoutToken.id, orderData)

            nextStep()
        }

    }
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
                Payment Method <br />
            </Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /><br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onClick={backStep}>Back</Button>
                                <Button variant="contained" type="submit" color="primary" disabled={!stripe}>
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
            <Typography variant="subtitle2" gutterBottom style={{ margin: '20px 0' }}>
                Use the Stripe test credit card number to complete your demo transaction.  <br />
                Card number: 4242-4242-4242-4242, CVC: Any 3 digits, Date: Any future date.
            </Typography>
        </>
    )
}
