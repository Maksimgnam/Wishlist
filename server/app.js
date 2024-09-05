const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const wishesRoute = require('./src/routes/wishesRoute');
const wishListsRoute = require('./src/routes/wishListsRoute')
const addWishRoute = require('./src/routes/addWishRoute')
const addWishListRoute = require('./src/routes/addWishList')
const bookWishRoute = require('./src/routes/bookWishRoute')
const wishByIdRoute = require('./src/routes/wishById')
const sendEmailRoute= require('./src/routes/sendEmailRoute')
const deleteWishlistRoute = require('./src/routes/deleteWishlistRoute')
const deleteWishRoute = require('./src/routes/deleteWishRoute')
const sendUserVerificationCodeRoute = require('./src/routes/sendUserVerificationCodeRoute')

const Port = 8000


const dbName = 'Wishlist';
const app = express();

app.use(cors())

app.use(express.json());


app.use('/api', wishesRoute );
app.use('/api', addWishRoute)
app.use('/api', addWishListRoute);
app.use('/api',  wishListsRoute);
app.use('/api',  bookWishRoute);
app.use('/api', wishByIdRoute);
app.use('/api', sendEmailRoute);
app.use('/api', deleteWishlistRoute);
app.use('/api', deleteWishRoute);
app.use('/api', sendUserVerificationCodeRoute)



 
  



mongoose.connect(`mongodb+srv://root:7SCvdrxfMBlzRpXT@cluster0.vbqrrih.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Db connected');
    app.listen(Port, () => {
        console.log(`Server is running on port ${Port}`);
    });

  
}).catch(err => {
    console.error('Connection error', err);
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));




