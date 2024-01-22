require('dotenv').config();
require('./config/database');

// const Category = require('./models/category');
const Stock = require('./models/stocks');

(async function() {

  await Stock.deleteMany({});
  const stocks = await Stock.create([
    {name: 'Apple', image: '.jpeg', usage: 'Food', strength:'5'},
    {name: 'Granola Bar', image: '.jpeg', usage: 'Food', strength:'5'},
    {name: 'Ice Pack', image: '.jpeg', usage: 'Food', strength:'5'},
    {name: 'Tea Packets', image: '.jpeg', usage: 'Food', strength:'5'},
    {name: 'Drywall Screws', image: '.jpeg', usage: 'Food', strength:'5'},
    {name: 'Tissues', image: '.jpeg', usage: 'Food', strength:'5'},
    {name: 'paper', image: '.jpeg', usage: 'Food', strength:'5'},
  ]);

  console.log(stocks)

  process.exit();

})();