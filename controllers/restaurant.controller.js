const restaurantModel = require('../models/restaurantModel')

const getAllRestaurant = async (req, res, next) =>{
    const ettermek = await restaurantModel.find() // a find függvényt nem mi írtuk(külső függőség), ezért mockolni kell
    res.status(200).json(restaurantModel.find())
}

module.exports = {
    getAllRestaurant
}
