import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import { clearAllItemsFromCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, clearAllItemsFromCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GtX9oLn3ZuLC2o9zNTUBSl7mNJNjRAnIivxMh3yoD2DrSnId9JghGRPJx4BudmhEqIUAnufUAK460vnYLBhPW2300YJFNsBqK';

  const onToken = token => {
      console.log(token); // pass this to backend to process rather than just log
      alert('Payment Successful');
      clearAllItemsFromCart();
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
    clearAllItemsFromCart: () => dispatch(clearAllItemsFromCart())
});

export default connect(
    null,
    mapDispatchToProps
)(StripeCheckoutButton);