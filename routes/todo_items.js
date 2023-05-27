const express = require('express')
const router = express()
const {getAllToDoItems} = require('../controllers/todo_items')

router.route('/').get(getAllToDoItems)

module.exports = router