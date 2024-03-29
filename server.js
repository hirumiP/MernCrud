const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts.js');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use("/post", postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://hirumipraneethya:Hirumi2001@mernapp1.p7xqhfk.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection error', err));




app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

