require('../data/database');
const express = require('express');
const router = express.Router();
const noteModel = require('../Models/note');

router.get('/', (req,res) => { 
    noteModel.find({}, (err,notes) => {
       err ? res.status(500).send('ERROR') : res.status(200).send(notes);
   })
});

router.post('/', (req,res) => {
    const note = new noteModel({
        id:req.body.id,
        title: req.body.title,
        body:req.body.body,
        time:req.body.time,
        date:req.body.date
    });
    note.save().then(() => res.status(200).send(note)).catch(err => res.status(500).send(err));
    })
  

router.put('/:id', (req,res) => {
    noteModel.findOneAndUpdate(
        {id:req.body.id},
        { $set: req.body}, (err, doc) => {
            err ? res.status(500).send(err) : res.send(doc).status(202)
        }
    )

})


router.delete('/:id', (req,res) => {
    noteModel.findOneAndDelete({id:req.params.id}, err => {
        err? res.status(500).send(err) : res.status(202).json({id:req.params.id, msg:"deleted"})
    })

})
module.exports = router;
