var express = require('express');
var router = express.Router();
var os = require('os');

// question 2
router.get('/',(req,res,next)=>{
    res.json({
        hostname:os.hostname(),
        type: os.type(),
        platform:os.platform(),
    })
});
//question 3
router.get('/cpus',(req,res,next)=>{
    res.json({
        cpus:os.cpus()
    })
})
//question 4
router.get('/cpus/:id',(req,res,next)=>{
    res.json({
        cpus:os.cpus()[req.params.id]
    })
})

module.exports = router;
