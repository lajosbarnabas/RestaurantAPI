const restaurantModel = require('../models/restaurantModel')

const getAllRestaurant = () =>{
    const ettermek = restaurantModel.find() // a find függvényt nem mi írtuk(külső függőség), ezért mockolni kell
}

module.exports = {
    getAllRestaurant
}
