const express = require('express');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());

// définition d'un dossier static pour les images pour

app.use(express.static(__dirname + '/images'));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Contre les attaques de type sql injection
app.use(helmet());

// Contre les attaques de types DDoS
// Create the rate limit rule
const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use(apiRequestLimiter)

// Routes

const routeProduct = require('./routes/product.js');
app.use('/api/product', routeProduct);

// récupération	du nom de la bdd
const routeBdd = require('./routes/bdd.js');
app.use('/api', routeBdd);

const routeUser = require('./routes/user.js');
app.use('/api/user', routeUser);

const routeTva = require('./routes/tva.js');
app.use('/api/tva', routeTva);

const routeCategory = require('./routes/category.js');
app.use('/api/category', routeCategory);

const routeCommande = require('./routes/commande.js');
app.use('/api/commande', routeCommande);

const routeRole = require('./routes/role.js');
app.use('/api/role', routeRole);

app.listen(process.env.PORT, () => console.log('app is running port : ' + process.env.PORT));