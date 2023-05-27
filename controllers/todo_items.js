const getAllToDoItems = (request,response)=>{
    response.send('List of all to-do items')
}

const createANewToDoItem = (request,response)=>{
    // response.send('Create a new TO-Do Item')
    response.json(request.body)
}

const getAToDoItem = (request,response)=>{
    response.send(`Displaying item with id ${request.params.id}`)
}

const UpdateAToDoItem = (request,response)=>{
    response.send(`Updating item with id ${request.params.id}`)
}

const DeleteAToDoItem = (request,response)=>{
    response.send(`Deleting item with id ${request.params.id}`)
}

module.exports = {getAllToDoItems,createANewToDoItem,getAToDoItem,UpdateAToDoItem,DeleteAToDoItem}