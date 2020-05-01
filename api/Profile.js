const express = require('express');
const router = express.Router();

router.post('/contact',(req,res,next) =>{
    console.log(req.body);
    res.send(req.body);
});

router.post('/:id',(req,res,next)=>{
    res.send("SUCCESSSSSSSSSSSSSS !!!!!!!!!!!!!!!!!!!!!!!");
    res.send("The information you entered");
    res.send(req.query);
});

router.put('/:id',(req,res,next)=>{
    res.status(200).json({
        student_id: req.params.id,
        message: 'UPDATED SUCCESSSSSSSS !!!!!!!!!!!!!!!!!!'
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        student_id: req.params.id,
        message: 'DELETED SUCCESSSSSSSS !!!!!!!!!!!!!!!!!!'
    });
});

router.get('/hobby',(req,res,next)=>{
    res.send("MY HOBBY : PLAY GAME , WATCHING TV, LISTENING TO MUSIC, ALGORITHM, MATH, ...");
});

router.post('/contact', function (req,res) {
    const name = req.body.name;
    const gmail = req.body.gmail;
    const subject = req.body.subject;
    return res.send(req.body.name);
});

module.exports=router;