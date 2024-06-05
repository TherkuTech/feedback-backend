const Router = require('express').Router()
const {signup,login, getuser} = require('../controllers/usercontroller')
const {addFeedbacks} = require('../controllers/feedController');
const {checkUser} = require('../middlewares/auth')



Router.post('/addFeeds',checkUser,addFeedbacks)

module.exports = Router;
