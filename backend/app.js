const express = require('express');
const connectDatabase = require('./config/database');
const userRoutes = require('./routes/users')

const app = express();

connectDatabase();

//through express we listen the server
const server = app.listen(4000, () => {
    console.log(`server is running on http://localhost:${4000}`)
})

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');

    server.close(() => {
        process.exit(1);
    })
})

app.use(express.json());

// routing
app.use('/api/v1/users', userRoutes); 