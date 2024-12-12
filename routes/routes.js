const express = require('express')

const getAllRestaurant = require('../controllers/restaurant.controller.js')
const restaurantController = require('../controllers/restaurant.controller.js')
const router = express.Router()

router.get('/', restaurantController.getAllRestaurant)
router.post('/', restaurantController.createRestaurant)
router.get('/restaurantId/', restaurantController.getRestaurantById)

module.exports = router