const express = require('express');
const usersControllers = require('../../controllers/users.controllers');


const router = express.Router();

// ROUTE DECLARE
router.route("/random-user")
.get(usersControllers.getRandomUser)

router.route("/all")
.get(usersControllers.getAllUsers);

router.route("/save")
.post(usersControllers.saveAUser);

router.route("/update/:id")
.patch(usersControllers.updataAUser);

router.route("/bulk-update")
.patch(usersControllers.updateBulkUser);

router.route("/delete/:id")
.delete(usersControllers.deleteAUser);

module.exports = router;