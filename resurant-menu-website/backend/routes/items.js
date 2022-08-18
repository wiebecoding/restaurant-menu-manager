const router = require('express').Router();
let Item = require('../models/item.model');

//Get all items
router.route('/').get((req, res) => {
    Item.find()
      .then(items => res.json(items))
      .catch(err => res.status(400).json('Error: ' + err));
});

//Get 1 item based on MongoBD id
router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
      .then(item => res.json(item))
      .catch(err => res.status(400).json('Error: ' + err));
});
  
//Add item 
router.route('/add').post((req, res) => {
    const itemname = req.body.itemname;
    const description = req.body.description;
    const price = Number(req.body.price);
    const show = req.body.show;
  
    const newItem = new Item({
        itemname,
        description,
        price,
        show,
    });
  
    newItem.save()
    .then(() => res.json('Menu Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update item
router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.itemname = req.body.itemname;
            item.description = req.body.description;
            item.price = Number(req.body.price);
            item.show = req.body.show;

            item.save()
            .then(() => res.json('Menu Item updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Menu Item deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;