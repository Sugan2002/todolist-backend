const express = require('express')
const app = express()
const PORT = 3500
const todo_items = require('./routes/todo_items')
app.get('/', (request, response)=>{
    response.send('Working')
})

app.use('/api/v1/todo_items', todo_items)

app.listen(PORT, console.log(`Server runs at http://localhost:${PORT}`))