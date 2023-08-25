const { Router } = require("express");
const router = new Router();
const item = require("../controllers/itemController");
const user = require("../controllers/userController");


router.post('/user/', user.create);
router.get('/user/', user.getAll);
router.get('/user/:id', user.getById);


router.post('/item/', item.create);
router.get('/item/', item.getAll);
router.get('/item/:id', item.getById);

module.exports = router;