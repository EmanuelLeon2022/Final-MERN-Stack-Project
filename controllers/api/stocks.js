const Stock = require('../../models/stock');
module.exports = {
  index,
  show
};

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