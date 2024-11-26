const express = require('express');
const routes = require('../RestaurantAPI/routes/routes.js')

const server = express();

server.use(express.json()) // POST-ban a req.body-ban json mehet át(ez a sor kell a POST kéréshez, GET-nél nem kell)
server.use('/api', routes)

server.listen(3000, () =>{
    console.log("A szerver elindult.")
})