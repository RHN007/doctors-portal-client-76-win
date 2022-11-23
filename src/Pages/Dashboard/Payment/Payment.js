import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6sjdFjPzqrkDjrkcgbelCERmUXETNeWM2erbBhpt9zxFDgfcgt9gLZHnhKDald7391EL2pOL16WEV7eCPQSO9l00Af5H7uCh');



const Payment = () => {
    const booking = useLoaderData()
    // const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking
    
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    
    
    return (
        <div>
            <h3>Payment for {treatment}</h3>
            <p className='text-xl'> Please pay ${price} for your appointment on {appointmentDate} at {slot} </p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking={booking}
                    
                    />
                </Elements>
            </div>



        </div>

    );
};

export default Payment;