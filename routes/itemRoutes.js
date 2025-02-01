const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.get('/search', itemController.searchItem);
router.get('/:id', itemController.getItem);
router.put('/:id', itemController.editItem);

module.exports = router;
