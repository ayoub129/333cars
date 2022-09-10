const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Car = require("../models/carsModel")

// @desc create a new car
// @route /api/cars/create
// @access private

 const CreateCar = asyncHandler(async (req , res) => {

   const {name , price , image , description , adons} = req.body

   // validation
   if(!name || !price || !image || !description || !adons ) {
         res.status(400)
         throw new Error('Please include all the cars descriptions')
   }

   // Find if car already exists
   const carExists = await Car.findOne({name})

   if(carExists) {
      res.status(400)
      throw new Error('car already exists')
   }


   // create car
   const car = await Car.create({
      name, price, image , description , adons
   })

   if(car) {
      res.status(201).json({
         _id: car._id,
         name: car.name,
         price: car.price,
         image: car.image,
         description: car.description,
         adons: car.adons,
      })
   } else {
      res.status(400)
      throw new Error ('Invalid car data')
   }
 })

// @desc get cars
// @route /api/cars
// @access public

 const getCars = asyncHandler( async (req , res) => {

   const options = {
      // sort returned car in ascending order by name (A->Z)
      sort: { name: 1 },
    };

    const cars = Car.find(options);
    // print a message if no car were found
    if ((await cars.count()) === 0) {
      console.log("No car found!");
    }

  
   await cars.forEach((car) => {
      res.status(200).json({
         _id: car._id,
         name: car.name,
         price: car.price,
         image: car.image,
         description: car.description,
         adons: car.adons,
      })
   });
      
 })

// @desc edit cars
// @route /api/cars/edit
// @access private

const editCars = asyncHandler( async (req , res) => {
   const {name , price , image , description , adons} = req.body

   // validation
   if(!name || !price || !image || !description || !adons ) {
         res.status(400)
         throw new Error('Please include all the cars descriptions')
   }

   // Find if car already exists
   const carExists = await Car.findOne({name})

   if(carExists) {
      res.status(400)
      throw new Error('car already exists')
   }


   // create car
   const car = await Car.create({
      name, price, image , description , adons
   })

   if(car) {
      res.status(201).json({
         _id: car._id,
         name: car.name,
         price: car.price,
         image: car.image,
         description: car.description,
         adons: car.adons,
      })
   } else {
      res.status(400)
      throw new Error ('Invalid car data')
   }
})

// @desc delete Cars
// @route /api/cars/delete
// @access private

const deleteCars = asyncHandler( async (req , res) => {
   const {name , price , image , description , adons} = req.body

   // validation
   if(!name || !price || !image || !description || !adons ) {
         res.status(400)
         throw new Error('Please include all the cars descriptions')
   }

   // Find if car already exists
   const carExists = await Car.findOne({name})

   if(carExists) {
      res.status(400)
      throw new Error('car already exists')
   }


   // create car
   const car = await Car.create({
      name, price, image , description , adons
   })

   if(car) {
      res.status(201).json({
         _id: car._id,
         name: car.name,
         price: car.price,
         image: car.image,
         description: car.description,
         adons: car.adons,
      })
   } else {
      res.status(400)
      throw new Error ('Invalid car data')
   }
})

// @desc rent Cars
// @route /api/cars/rent
// @access public

const rentCars = asyncHandler( async (req , res) => {
   
})


 module.exports = {
   CreateCar,
   getCars,
   editCars,
   deleteCars,
   rentCars,
 }