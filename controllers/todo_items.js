const getAllToDoItems = (request,response)=>{
    response.send('List of all to-do items')
}

const createANewToDoItem = (request,response)=>{
    // response.send('Create a new TO-Do Item')
    response.json(request.body)
}

module.exports = {getAllToDoItems,createANewToDoItem}