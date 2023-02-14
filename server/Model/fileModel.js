const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const fileSchema = mongoose.Schema({
    fileName: String,
    parent: String,
});

const File = mongoose.model('files', fileSchema);

exports.File = File;