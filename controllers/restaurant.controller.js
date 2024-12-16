const restaurantModel = require('../models/restaurantModel')

const getAllRestaurant = async (req, res, next) => {
    try {
        const ettermek = await restaurantModel.find() // a find függvényt nem mi írtuk(külső függőség), ezért mockolni kell
        if(ettermek){
            res.status(200).json(restaurantModel.find())
        }
        else{
            res.status(404).send()
        }
    } catch (error) {
        next(error)
    }
}

const createRestaurant = async (req, res, next) => {
    try {
        const newRestaurant = await restaurantModel.create(req.body)
        if(newRestaurant){
            res.status(200).json(restaurantModel.create())
        }
        else{
            res.status(404).send()
        }
    } catch (error) {
        next(error)
    }
}

const getRestaurantById = async (req, res, next) => {
    try {
        const restaurantById = await restaurantModel.findById(req.params.restaurant_id)
        if(restaurantById){
            res.status(200).json(restaurantById)
        }
        else{
            res.status(404).send()
        }
    } catch (error) {
        next(error)
    }
}

const deleteRestaurant = async (req, res, next) => {
    try {
        const deleted = await restaurantModel.findByIdAndDelete(req.params.restaurant_id)
        if(deleted){
            res.status(200).json(deleted)
        }else{
            res.status(404).send()
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllRestaurant, createRestaurant, getRestaurantById, deleteRestaurant
}
