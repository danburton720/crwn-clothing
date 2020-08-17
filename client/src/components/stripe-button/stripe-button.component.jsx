import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';

import { clearBag } from '../../redux/bag/bag.actions';

const StripeCheckoutButton = ({ price, clearBag }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GtX9oLn3ZuLC2o9zNTUBSl7mNJNjRAnIivxMh3yoD2DrSnId9JghGRPJx4BudmhEqIUAnufUAK460vnYLBhPW2300YJFNsBqK';

  const onToken = token => {
      axios({
          url: 'payment',
          method: 'post',
          data: {
              amount: priceForStripe,
              token
          }
      }).then(response => {
          alert('Payment successful');
          clearBag();
      }).catch(error => {
          console.log('Payment error: ', JSON.parse(error));
          alert('There was an issue with your payment. Please make sure you use the provided credit card.')
      });
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

const mapDispatchToProps = dispatch => ({
    clearBag: () => dispatch(clearBag())
});

export default connect(
    null,
    mapDispatchToProps
)(StripeCheckoutButton);