require('dotenv').config();
require('./config/database');

// const Category = require('./models/category');
const Stock = require('./models/stocks');

(async function() {

  await Stock.deleteMany({});
  const stocks = await Stock.create([
    {name: 'Apple', image: 'https://i.redd.it/bxcbiiu1wxa71.png', usage: 'Food', strength:'5'},
    {name: 'Granola Bar', image: 'https://png.pngtree.com/png-clipart/20230420/ourmid/pngtree-sand-cartoon-image_6715693.png', usage: 'Food', strength:'9000'},
    {name: 'Ice Pack', image: 'https://static.vecteezy.com/system/resources/previews/025/805/475/original/ice-cube-pixel-art-icon-transparent-background-generative-ai-ai-generated-png.png', usage: 'Food', strength:'5'},
    {name: 'Tea Packets', image: 'https://repository-images.githubusercontent.com/295805863/635243d9-d27c-422f-b7e3-f62c1f3aabb1', usage: 'Food', strength:'5'},
    {name: 'Drywall Screws', image: 'https://www.coburnmyers.com/Asset/691.png', usage: 'Food', strength:'5'},
    {name: 'Tissues', image: 'https://i.pinimg.com/originals/22/f2/3a/22f23a5e80166798fca9a4fa968ebd70.png', usage: 'Food', strength:'5'},
    {name: 'Paper', image: 'https://pngimg.com/d/ketchup_PNG48.png', usage: 'Subtle Referencing', strength:'5'},
  ]);

  console.log(stocks)

  process.exit();

})();