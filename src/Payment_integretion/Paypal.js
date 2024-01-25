import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

export const PayPalIntegration = () => {
    return (
    <div>
    <PayPalButton
    amount='100.00'
    onSuccess={(details, data) => {
  // console.log(details)
   console.log(data)
    }}
    options={{
    clientId: `AYrqi_aacwqM6pM6Ns7F5LbvdCjQmGf12_z8_PvGhz7czDM8GUwW8Npp42ZgBRF8jcuR_IS3BBwmfK4J`,
    }}
    />
    </div>
    );
    };