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
router.get('/:id/comment', (req,res) => {
    // res.send('GET /places/:id/comment')
    db.Place.findById(req.params.id)
        .then(foundPlace => {
            res.render('places/comment',{
                place: foundPlace
            })
        })
})

router.post('/:id', (req, res) => {
    res.send('POST /places/:id/comment stub')
})

router.delete('/:id/comment/:rantId', (req, res) => {
    res.send('DELETE /places/:id/comment/:commentId stub')
})


module.exports = router;