const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwtHelper = require('../config/jwtHelper');

var Post = require('../models/post');

router.use(jwtHelper.verifyJwtToken);

router.get('/posts', (req, res) => {
    console.log('get posts', req._id);
    Post.find({user: req._id}, (err, docs) => {
        if(!err) { res.send(docs); }
        else { console.log('Error in Retriving Posts :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/posts/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record of ID : ${req.params.id}`);
    Post.findById(req.params._id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retriving blog post :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/posts', (req, res) => {
    var post = new Post({
        title: req.body.title,
        body: req.body.body,
        user: req._id
    });
    post.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in blog save : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/posts/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record of ID : $(req.params.id)`);

    var post = {
        title: req.body.title,
        body: req.body.body
    };
    Post.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error with Blog Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/posts/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send (`No record with given id : ${req.params.id}`)
    
    Post.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error with Blog Delete :' + JSON.stringifyer(err, undefined, 2)); }
    });
});

// Post.find().populate('user').exec((err, docs) => {
//      if(!err) { console.log(docs); }
//      else { console.log('Error in Retriving Posts :' + JSON.stringify(err, undefined, 2)); }
// });

module.exports = router;