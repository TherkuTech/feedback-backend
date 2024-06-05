const Router = require('express').Router()
const {signup,login, getuser} = require('../controllers/usercontroller')
const { addFeedbacks, getUserFeedbacks, getAfeedback } = require('../controllers/feedController');
const {checkUser} = require('../middlewares/auth')


Router.route('/getUserFeedbacks').get(checkUser, getUserFeedbacks)
Router.route('/getAFeedbacks').get(checkUser, getAfeedback)
Router.route('/addFeeds').post(checkUser,addFeedbacks)

module.exports = Router;
