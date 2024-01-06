const express = require("express");

const ctrl = require("../../controllers/user.controllers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/users");


const router = express.Router();
//signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
//signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
//current user
router.get("/current", authenticate, ctrl.getCurrent);
//logout
router.post("/logout", authenticate, ctrl.logout);
//update subscription
router.patch("/", authenticate, ctrl.updateUserSubscription);
//update avatar
router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
