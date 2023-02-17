var express = require('express');
var router = express.Router();
var data = require('../products.json');
//question 6
router.get('/',(req,res,next)=>{
    res.json(data);
});

//question 9
router.get('/instock/:qt',(req,res,next)=>{
    const qt = req.params.qt;
    let prod=[];
 
    for(var p in data){
       if(data[p].stock>qt){
        prod.push(data[p]);
       }
    }
    console.log(prod);
  res.json(prod);
});

//question 7
router.get('/:id',(req,res,next)=>{
    
    res.json(data[req.params.id]);
});

//question 8
router.get('/:id/:qt',(req,res,next)=>{
    const id = req.params.id;
    const qt = req.params.qt;
    const product = data[id];
    const total_price = product.price * qt;
    const json ={
        id,
        qt,
        unit_price:product.price,
        total_price
    }

    res.json(json);
});




module.exports = router;
