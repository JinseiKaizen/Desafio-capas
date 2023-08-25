const itemServices = require('../dao/itemServices');

class item{

    getById(req, res, next){
        let { id } = req.params;
        res.json(itemServices.getById(Number(id)));
    }

    getAll(req, res, next){
        res.json(itemServices.getAll());
    }

    create(req, res, next){
        const payload = req.body;
        res.json(itemServices.create(payload));
    }
}

module.exports = new item();