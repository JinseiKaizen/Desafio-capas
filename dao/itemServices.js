let repository = require('../repository/repositoryManager');

class Item{
    
    getById(id){
        return repository.getById(Number(id), 'items');
    }

    getAll(){
        return repository.getAll('items');
    }

    create(payload){
        return repository.create(payload, 'items');
    }
}

module.exports = new Item();