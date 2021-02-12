const router = require("express-promise-router")();

const { index, newUser, getUser, replaceUser, deleteUser, getUserCars, newUserCars } = require("../controllers/user");

//Users
router.get("/api/users", index);
router.post("/api/newuser", newUser);
router.get("/api/user/:userId", getUser);
router.put("/api/replaceuser/:userId", replaceUser);
router.delete("/api/deleteuser/:userId", deleteUser);

//Cars
router.get("/api/cars/:userId", getUserCars);
router.post("/api/newcar/:userId", newUserCars);

module.exports = router;