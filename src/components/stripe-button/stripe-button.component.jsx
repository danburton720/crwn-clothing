import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GtX9oLn3ZuLC2o9zNTUBSl7mNJNjRAnIivxMh3yoD2DrSnId9JghGRPJx4BudmhEqIUAnufUAK460vnYLBhPW2300YJFNsBqK';

  const onToken = token => {
      console.log(token); // pass this to backend to process rather than just log
      alert('Payment Successful');
  };

  return (
      <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is £${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          currency='GBP'
          token={onToken}
          stripeKey={publishableKey}
      />
  )
};

export default StripeCheckoutButton;