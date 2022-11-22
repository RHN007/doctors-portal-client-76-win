import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = ({booking}) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    
    const stripe = useStripe()
    const elements = useElements()
    const { price, email, patient, _id } = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);


    const handleSubmit = async(event) => {
            event.preventDefault()
            if(!stripe || !elements){
                    
                return
            }
   
    const card = elements.getElement(CardElement)

    if(card == null){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    })
    if(error) {
        setCardError(error.message)
    }else {
        setCardError('')
    }
    
const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
    clientSecret,
    {
        payment_method: {
            card: card,
            billing_details: {
                name: patient,
                email: email
            },
        },
    },
);

}


    return (
       <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn bt-sm mt-4 btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
       
       <p className='text-red-400'>{cardError}</p>
       
       </>
    );
};

export default CheckoutForm;