const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', // 'sandbox' for testing, 'live' for production
    'client_id': 'AbCdEfGhIjKlMnOpQrStUvWxYz1234567890', // Replace with actual client ID
    'client_secret': 'XyZ1234567890AbCdEfGhIjKlMnOpQrStUvWxYz' // Replace with actual secret
});

console.log("PayPal configured successfully!");
