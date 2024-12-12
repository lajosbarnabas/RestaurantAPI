const restaurantModel = require('../models/restaurantModel')

const getAllRestaurant = async (req, res, next) =>{
    const ettermek = await restaurantModel.find() // a find függvényt nem mi írtuk(külső függőség), ezért mockolni kell
    res.status(200).json(restaurantModel.find())
}

const createRestaurant = async (req, res) =>{
    const newRestaurant = await restaurantModel.create(req.body)
    res.status(200).json(restaurantModel.create())
}

const getRestaurantById = async (req, res, next) => {
    const restaurantById = restaurantModel.findById(req.params.restaurant_id)
    res.status(200).json(restaurantById)
}


module.exports = {
    getAllRestaurant, createRestaurant, getRestaurantById
}
