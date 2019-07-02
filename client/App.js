import request from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  StripeProvider,
  Elements,
  CardElement,
  injectStripe
} from 'react-stripe-elements';
import './App.css';

// Replace with your public key (https://dashboard.stripe.com/test/apikeys)
const STRIPE_API_KEY = 'pk_test_xvX7DzC9McRTklS8RyR9xprA';

// Create a charge by sending an HTTP POST request to our API endpoint
// with the token generated from Stripe Elements below in the form
const createCharge = token => {
  return request
    .post('/api/charges')
    .send({token})
    .then(res => res.body.charge);
};

const Form = props => {
  const style = {
    base: {
      color: '#32325d',
      fontFamily: '"Open Sans", "Helvetica Neue", Arial, san-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };

  const handleCreateCharge = e => {
    e.preventDefault();

    // We can use `props.stripe` as a result of the `injectStripe` higher
    // order component created below, and then call `createSource` to tokenize
    // the user's credit card details provided in the <CardElement />
    return props.stripe
      .createSource({
        type: 'card',
        owner: {
          name: 'Test User',
          email: 'test@test.com'
        }
      })
      .then(({source}) => {
        const token = source.id;

        return createCharge(token);
      });
  };

  return (
    <form className="StripeForm" onSubmit={handleCreateCharge}>
      <CardElement style={style} />

      <button type="submit">Create Charge</button>
    </form>
  );
};

// Calling `injectStripe` makes the `stripe` object
// available on the <Form /> component's `props`
const StripeForm = injectStripe(Form);

// The `<StripeProvider />` passes our API key to the Stripe
// client, and allows us to `injectStripe` into our form above.
// The `<Elements /> component handles mounting our inputs
// (e.g. <CardElement />) with Stripe Elements. For more details:
// https://github.com/stripe/react-stripe-elements#getting-started
const App = () => {
  return (
    <StripeProvider apiKey={STRIPE_API_KEY}>
      <Elements>
        <StripeForm />
      </Elements>
    </StripeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
