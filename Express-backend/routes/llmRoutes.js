const express = require('express');
const Router = express.Router();
const {categoriesFeedback} = require('../controllers/llmController')

Router.route('/categories').post(categoriesFeedback)

module.exports=Router