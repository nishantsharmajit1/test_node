const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {connectDB} = require('./db/dbConnection');
const {routes} = require("./routes")

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Req 
app.use(cors()) // allow all requests

app.get('/', (req,res) => {
    res.send('Hello, World!');
})

routes.map((route) => {
    app.use(route.path, route.handler);
})

// Listen on port
app.listen(PORT,async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
});