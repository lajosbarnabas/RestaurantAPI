const restaurantController = require('../controllers/restaurant.controller')
const restaurantModel = require('../models/restaurantModel')
const httpMocks = require('node-mocks-http')
const restaurantList = require('./mock-data/allRestaurants.json')
const newRestaurant = require('./mock-data/newRestaurant.json')

restaurantModel.find = jest.fn()
restaurantModel.create = jest.fn()
restaurantModel.findById = jest.fn()
let req, res, next
let firstRestaurant


beforeEach(() =>{
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = jest.fn()
})


describe('A findById végponthoz tartozó metódus tesztelése', () =>{
    it('A getRestaurantById függvény létezik', () =>{
        expect(typeof restaurantController.getRestaurantById).toBe('function')
    })
    it('A getRestaurantById függvényben meg kellene hívni a findById() függvényét', async () => {
        await restaurantController.getRestaurantById(req, res, next)
        expect(restaurantModel.findById).toHaveBeenCalledWith(firstRestaurant)
    })
    it('A függvénynek 200-as hiba kódot kell visszaadnia és egy étteremmel kell visszatérnie', async ()=>{
        req.params.restaurant_id = "30075445";
        firstRestaurant = req.body;
        restaurantModel.findById.mockReturnValue(firstRestaurant)
        await restaurantController.getRestaurantById(req, res, next)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled).toBeTruthy()
        expect(res._getJSONData()).toStrictEqual(firstRestaurant)
    })
})


describe('A create végponthoz tartozó metódus tesztelése', ()=>{
    beforeEach(() =>{
        req.body = newRestaurant
    })
    it('A createRestaurant függvény létezik', () =>{
        expect(typeof restaurantController.createRestaurant).toBe('function')
    })
    it('A createRestaurant függvényben meg kellene hívni a create() függvényét', () =>{
        restaurantController.createRestaurant(req, res, next)
        expect(restaurantModel.create).toHaveBeenCalledWith(newRestaurant)
    })
    it('A createRestaurant függvény vissza kell adja a JSON fájlt, és 200-as státusz kódot', async () =>{
        restaurantModel.create.mockReturnValue(newRestaurant)
        await restaurantController.createRestaurant(req, res, next)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy()
        expect(res._getJSONData()).toStrictEqual(newRestaurant)
    })
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
        await restaurantController.getAllRestaurant(req, res, next)
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy()
        expect(res._getJSONData()).toStrictEqual(restaurantList)
    })
})