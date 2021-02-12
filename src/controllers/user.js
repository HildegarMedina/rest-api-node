const User = require("../models/user");
const Car = require("../models/cars");

module.exports = {

    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    },

    getUser: async (req, res, next) => {
        const {userId} = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        const {userId} = req.params;
        const newUser = req.body;
        await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success: true});
    },

    updateUser: async (req, res, next) => {
        const {userId} = req.params;
        const newUser = req.body;
        await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success: true});
    },

    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        await User.findByIdAndRemove(userId);
        res.status(200).json({success: true});
    },

    getUserCars: async (req, res, next) => {
        const { userId } = req.params;
        const users = await User.findOne({_id: userId}).populate("car");
        res.status(200).json(users);
    },

    newUserCars: async (req, res, next) => {
        const { userId } = req.params;
        const newCar = new Car(req.body);
        const user = await User.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(200).json(newCar);
    }

};