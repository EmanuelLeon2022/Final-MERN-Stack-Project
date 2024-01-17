// ----------------------------[Requires]
require('dotenv').config()
require('./config/database');
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const items = require('./src/models/items')
const Item = require('./src/models/item')
const mongoose = require('mongoose')
const port = 3001;
const app = express();
const methodOverride = require('method-override');
const ensureLoggedIn = require('./config/ensureLoggedIn');

// ----------------------------[Middleware]
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}));
// ----------------------------[Routes]
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

app.get('/inventory', (req,res)=>{
  Item.find({},(err,allItems)=>{
      console.log("ALL_ITEMS:", allItems)
      items: allItems
      res.render('Index',{
          items: allItems
      })
  })
})

app.get('/inventory/new',(req,res)=>{
  res.render('New')
})
app.post('/inventory',(req,res)=>{
  if(req.body.secured === 'on'){ 
      req.body.secured = true; 
  } else { 
      req.body.secured = false; 
  }
  Item.create(req.body,(err, createdItem)=>{
      console.log("Created Item: ",req.body)
      console.log(err)
  })
  res.redirect('/inventory')
  // ---> Add New Fruit to Existing DataSet
})

app.get('/inventory/:id/edit', (req, res)=>{
  Item.findById(req.params.id, (err, foundItem)=>{ 
    if(!err){
      res.render(
        'Edit',
      {
        item: foundItem
      }
    );
  } else {
    res.send({ msg: err.message })
  }
  });
});

app.put('/inventory/:id', (req, res)=>{
  if(req.body.sure === 'on'){
      req.body.sure = true;
  } else {
      req.body.sure = false;
  }
  Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem)=>{
     console.log(updatedItem)
      res.redirect(`/inventory/${req.params.id}`);
  });
});

app.delete('/inventory/:id', (req, res)=>{
  Gift.findByIdAndRemove(req.params.id,(err, data)=>{
      res.redirect('/inventory')
  })
});

app.get('/inventory/:id', (req,res)=>{
  Item.findById(req.params.id, (err, foundItem)=>{
      res.render('Show',{
          item: foundItem
      })
  });
})

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ----------------------------[Server]
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
