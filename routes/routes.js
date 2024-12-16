const express = require('express')

const getAllRestaurant = require('../controllers/restaurant.controller.js')
const router = express.Router()

router.get('/', restaurantController.getAllRestaurant)
router.post('/', restaurantController.createRestaurant)
router.get('/restaurantId/', restaurantController.getRestaurantById)
router.delete('/restaurant_id', restaurantController.deleteRestaurant)

module.exports = router