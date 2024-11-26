const restaurantController = require('../controllers/restaurant.controller')

it('A controller fájl létezik', () =>{
    expect(typeof restaurantController).toBe('function')
})