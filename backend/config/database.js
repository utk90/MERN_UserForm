const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/users';

const connectDatabase = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`MongodB connected with server:${data.connection.host}`)
    })
}

module.exports = connectDatabase;
