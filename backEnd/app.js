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


const multer = require('multer');
const configMulter = require('./middleware/multer-config')

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Incorrect file");
        error.code = "INCORRECT_FILETYPE";
        return cb(error, false)
    }
    cb(null, true);
}

const upload = multer({
    dest: './images',
    fileFilter,
    limits: {
        fileSize: 5000000
    }
});

app.post('/upload', configMulter, (req, res) => {
    res.json({
        file: req.file
    });
    console.log(req.file)
});

app.use((err, req, res, next) => {
    if (err.code === "INCORRECT_FILETYPE") {
        res.status(422).json({
            error: 'Only images are allowed'
        });
        return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        res.status(422).json({
            error: 'Allow file size is 500KB'
        });
        return;
    }
});


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

app.listen(process.env.PORT, () => console.log('app is running port : ' + process.env.PORT));