const Stock = require('../../models/stocks');
module.exports = {
  create,
  index,
  show,
  crop,
};

async function create(req, res){
  try{
    let stock = await Stock.create(req.body)
    console.log(stock)
  }
  catch(error){
    res.status(400).json(error)
  }
}

async function index(req, res) {
  try{
    const stocks = await Stock.find({});
    // re-sort based upon the sortOrder of the categories
    // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(stocks);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const stock = await Stock.findById(req.params.id);
    res.status(200).json(stock);
    console.log(stock)
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

async function crop(req, res){
  try{
    const stock = await Stock.findByIdAndDelete(req.params.id);
    res.status(202).json(stock);
  }
  catch(e){
    res.status(400).json({msg: e.message});
  }
}