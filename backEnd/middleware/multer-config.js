const multer = require('multer');

// const MIME_TYPES = {
//     'image/jpg': 'jpg',
//     'image/jpeg': 'jpg',
//     'image/png': 'png'
// };

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
        console.log('Je suis là')
    },
    filename: (req, file, callback) => {
        // console.log(req)
        // const nom = req.body.nom_produit.split(' ').join('_')
        const name = file.originalname.split(' ').join('_');
        // const extension = MIME_TYPES[file.mimetype];
        callback(null, Date.now() + '_' + name);
        // callback(null, nom + Date.now() + '.' + extension)
    }
});

module.exports = multer({
    storage: storage
}).single('file');