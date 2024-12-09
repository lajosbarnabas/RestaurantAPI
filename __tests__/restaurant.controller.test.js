const restaurantController = require('../controllers/restaurant.controller')
const restaurantModel = require('../models/restaurantModel')
const httpMocks = require('node-mocks-http')
const restaurantList = require('./mock-data/allRestaurants.json')

restaurantModel.find = jest.fn()
let req, rest, next

beforeEach(() =>{
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
})

describe('A getAll végponthoz tartozó metódus tesztelése', () =>{
    it('A getAllRestaurants függvénynek léteznie kellene', () =>{
        expect(typeof restaurantController.getAllRestaurant).toBe('function')
    })
    it('A getAllRestaurant függvényben meg kellene hívni a model find() függvényét', () =>{
        restaurantController.getAllRestaurant(req, res, next)
        expect(restaurantModel.find).toHaveBeenCalled()
    })
    it('A getAllRestaurant függvény vissza kellene adjon JSON listát az összes étteremmel, és 200-as státusz kódot', async () =>{
        restaurantModel.find.mockReturnValue(restaurantList)
        await restaurantController.getAllRestaurant(res, res, next)
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy()
        expect(res._getJSONData()).toStrictEqual(restaurantList)
    })
})