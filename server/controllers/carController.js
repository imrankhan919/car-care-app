const expressAsyncHandler = require("express-async-handler");
const Car = require("../models/carModel");

const addCar = expressAsyncHandler(async (req, res) => {
  const { car, description, registration, carImage } = req.body;

  if (!car || !description || !registration || !carImage) {
    res.status(400);
    throw new Error("Please Fill All Details!");
  }

  const newCar = await Car.create({
    car,
    description,
    registration,
    carImage,
    user: req.user._id,
  });

  if (!newCar) {
    res.status(400);
    throw new Error("Car Not Created");
  }

  res.status(201).json(newCar);
});

const updateCar = expressAsyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  //   Check if user is valid
  if (req.user._id !== car.user) {
    res.status(401);
    throw new Error("Invalid Request");
  }

  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedCar) {
    res.status(400);
    throw new Error("Car Not Created");
  }

  res.status(200).json(updatedCar);
});

const getCar = expressAsyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  // Check if user is valid
  if (car.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Invalid Request");
  }

  if (!car) {
    res.status(404);
    throw new Error("Car Not Found");
  }

  res.status(200).json(car);
});

const getCars = expressAsyncHandler(async (req, res) => {
  const cars = await Car.find({ user: req.user._id });

  if (!cars) {
    res.status(404);
    throw new Error("Car Not Found");
  }

  res.status(200).json(cars);
});

module.exports = { addCar, getCar, getCars, updateCar };
