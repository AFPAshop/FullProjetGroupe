const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Routes

const routeProduct = require('./routes/product.js');
app.use('/api/product', routeProduct);

const routeUser = require('./routes/user.js');
app.use('/api/user', routeUser);

const routeTva = require('./routes/tva.js');
app.use('/api/tva', routeTva);

const routeCategory = require('./routes/category.js');
app.use('/api/category', routeCategory);

const routeCommande = require('./routes/commande.js');
app.use('/api/commande', routeCommande);

app.listen(process.env.PORT, () => console.log('app is running port : ' + process.env.PORT));