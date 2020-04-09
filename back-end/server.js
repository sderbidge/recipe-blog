const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/recipes', {
    useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
    dest: '../front-end/public/images/',
    limits: {
        fileSize: 10000000
    }
});

// Create a scheme for items in the museum: a title and a path to an image.
const recipeSchema = new mongoose.Schema({
    title: String,
    uploadedBy: String,
    ingredients: String,
    directions: String,
    path: String,
    saved: Boolean,
});

// Create a model for items in the museum.
const Recipe = mongoose.model('Recipe', recipeSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/recipes', async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        uploadedBy: req.body.uploadedBy,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        path: req.body.path,
        saved: false
    });
    try {
        await recipe.save();
        res.send(recipe);
    } catch (error) {
        //console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all of the items in the museum.
app.get('/api/recipes', async (req, res) => {
    try {
        let recipes = await Recipe.find();
        res.send(recipes);
    } catch (error) {
        //console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/api/recipes/:id', async (req, res) => {
    try {
        //console.log(req.params.id);
        await Recipe.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        //console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/recipes/:id', async (req, res) => {
    try {
        let recipe = await Recipe.findOne({
            _id: req.params.id
        });
        recipe.saved = req.body.saved;
        recipe.save();
        res.sendStatus(200);
    } catch (error) {
        //console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));