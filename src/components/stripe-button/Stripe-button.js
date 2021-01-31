import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51IF1bCAXebzoN7owyzIQcXaFp6WhHO3fW8gtbScmvcnhwF4S3AxzhCTooQ97yK3nic8VXJYttJDLoMK21I35doPQ00tXg6INuf';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="My Contemporary Ceramic Store"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
