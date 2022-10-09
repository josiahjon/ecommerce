
const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const { ResultStorage } = require("firebase-functions/v1/testLab");
const stripe = require("stripe")('sk_test_51Lpj8GB9BpPVdpoxGHmwBMxu0QauU18BSjrfcIcOkmWJ61VQVFralA1BQIMWHQ4qGzT8fVhjNz1hyDfyilgXBlf400pakT22PW')

// API setup

// -app config
const app = express();

// -middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

// -api roots
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Recieved! Total is ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    // ok- created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -listen command
exports.api = functions.https.onRequest(app)


//example endpoint
//http://localhost:5001/ecomm-dff12/us-central1/api