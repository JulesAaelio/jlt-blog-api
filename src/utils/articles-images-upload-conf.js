const multer = require('multer');
const randomstring = require('randomstring');
const types = require('mime-types');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/articles-images');
    },
    filename: function (req, file, cb) {

        cb(null, randomstring.generate({length: 16}) + '-' + Date.now() + '.' + types.extension(file.mimetype));
    }
});

module.exports = storage;