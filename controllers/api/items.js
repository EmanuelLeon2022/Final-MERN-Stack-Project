const Item = require('../../models/items');
module.exports = {
  create,
  index,
  show
};

async function create(req, res){
  try{
    let item = await Item.create(req.body)
    console.log(item)
  }
  catch(error){
    res.status(400).json(error)
  }
}

async function index(req, res) {
  try{
    const items = await Item.find({});
    // re-sort based upon the sortOrder of the categories
    // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
    console.log(item)
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}