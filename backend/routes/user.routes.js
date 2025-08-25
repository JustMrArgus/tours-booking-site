const express = require("express");
const userController = require("../controllers/user.controller");
const protect = require("../middleware/protect");
const restrictTo = require("../middleware/restricTo");
const userImageHandler = require("../middleware/userImageHandler");

const router = express.Router();

router.use(protect);

router.post("/forgotPassword", userController.forgotPassword);
router.patch("/resetPassword/:token", userController.resetPassword);
router.patch("/updateMyPassword", userController.updatePassword);

router.get("/me", userController.getMe, userController.getUser);
router.patch(
  "/updateMe",
  userImageHandler.uploadUserPhoto,
  userImageHandler.resizeUserPhoto,
  userController.updateMe
);

router.delete("/deleteMe", userController.deleteMe);

router.use(restrictTo("admin"));

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
