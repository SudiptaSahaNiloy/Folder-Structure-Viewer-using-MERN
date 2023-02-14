const express = require('express');
const { File } = require('../Model/fileModel');
const router = express.Router();

const getFiles = async (req, res) => {
    try {
        const result = await File.find({
            parent: req.body.parent,
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const createFile = async (req, res) => {
    try {
        const result = await File.create(req.body);
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const deleteFile = async (req, res) => {
    try {
        const result = await File.deleteOne(req.body);
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

router.route('/')
    .post(createFile)
    .delete(deleteFile)
router.route('/getFiles')
    .post(getFiles)
module.exports = router; 