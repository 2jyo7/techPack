const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const newsRouter = require('./routes/newsR');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.urlencoded());

app.use('/api/images', newsRouter)
app.use('/images', express.static('images'))


const port = 4000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB Database');
    app.listen(port, () => {
        console.log(`listening server on http://localhost:${port}`);
    })
}).catch((err) => {
    console.log(err);

});

