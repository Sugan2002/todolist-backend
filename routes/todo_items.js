const express = require('express')
const router = express.Router()
const {getAllToDoItems, createANewToDoItem, getAToDoItem, UpdateAToDoItem, DeleteAToDoItem} = require('../controllers/todo_items')

router.route('/').get(getAllToDoItems).post(createANewToDoItem)
router.route('/:id').get(getAToDoItem).patch(UpdateAToDoItem).delete(DeleteAToDoItem)
module.exports = router