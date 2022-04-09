const router = require('express').Router();
const places = require("../models/places.js")
const comments = require("../models/comment.js")
const db = require('../models')

// console.log(places)

//INDEX
router.get('/', (req,res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', {places})
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
});

//CREATE
router.post('/', (req, res) => {
    if(req.body.pic === ""){
        req.body.pic = undefined;
    }
    if(req.body.city === ""){
        req.body.city = undefined;
    }
    if(req.body.state === ""){
        req.body.state = undefined;
    }
    db.Place.create(req.body)
        .then(() => {
            res.redirect('places')
        })
        .catch(err =>  {
            console.log('err', err)
            res.render('error404')
        })
})

//NEW
router.get('/new', (req,res) => {
    res.render('places/new')
});

//SHOW
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(foundPlace => {
        console.log(foundPlace.comments)
        res.render('places/show', {
           place: foundPlace
        })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
});

//EDIT
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(foundPlace => {
            res.render('places/edit',{
                place: foundPlace
            })
            console.log(foundPlace)
        })
})

//UPDATE
router.put('/:id', (req,res) => {
    console.log(req.body)
    if(req.body.pic === ""){
        req.body.pic = undefined;
    }
    if(req.body.city === ""){
        req.body.city = undefined;
    }
    if(req.body.state === ""){
        req.body.state = undefined;
    }
    console.log(req.body)
    db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(updatedPlace => {
            res.redirect(`/places/${req.params.id}`)
        })
})

//DELETE
router.delete('/:id', (req, res) => {
   db.Place.findByIdAndDelete(req.params.id)
    .then(deleteBread => {
        res.status(303).redirect('/places')
    })
})
///


//RANTS
router.post('/:id/comment', (req, res) => {
    console.log(req.params.id)
    req.body.rant = req.body.rant ? true : false
    if(req.body.author === "") {
        req.body.author = undefined
    }
    if(req.body.content === ""){
        req.body.content = undefined
    }
    console.log(req.body)
    db.Place.findById(req.params.id)
        .then(place =>  {
            db.Comment.create(req.body)
                .then(comment =>  {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    console.log('Failed push')
                    res.render('error404')
                })
        })
        .catch(err =>  {
            console.log('Failed to create')
            res.render('error404')
        })
    // res.send('POST /places/:id/comment stub')
})

router.delete('/:id/comment/:rantId', (req, res) => {
    res.send('DELETE /places/:id/comment/:commentId stub')
})


module.exports = router;