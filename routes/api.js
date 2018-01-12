var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var mongoose = require('mongoose');


router.get('/:resource', (req, res, next) => {
    var resource = req.params.resource;

    var controller = controllers[resource];

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request:  ' + resource
        })

        return;
    }

    controller.find(req.query, (err, results) => {
        if(err){
            res.json({
                confirmation: 'fail',
                message: err
            });
        }

        res.json({
            confirmation: 'success',
            results: results
        });
    });
})

router.get('/:resource/:id', (req, res, next) => {
    var id = req.params.id;
    var resource = req.params.resource;

    var controller = controllers[resource];

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request:  ' + resource
        })

        return;
    }

    controller.findById(id, (err, result) => {
        if(err){
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }

        res.json({
            confirmation: 'success',
            result: result
        })
    })
})

router.post('/:resource', (req, res, next) => {
    var resource = req.params.resource;

    var controller = controllers[resource];

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request:  ' + resource
        })

        return;
    }

    controller.create(req.body, (err, zone) => {
        if(err){
            res.json({
                confirmation: 'fail',
                message: err
            });

            return;
        }

        res.json({
            confirmation: 'success',
            zone: zone
        })
    })
})

router.post('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;

    var controller = controllers[resource];

    if(controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Resource Request:  ' + resource
        })

        return;
    }

    controller.update(req.body._id, req.body, (err, zone) => {
        if(err){
            res.json({
                confirmation: 'fail',
                message: err
            });

            return;
        }

        res.json({
            confirmation: 'success',
            zone: zone
        })
    })
})

module.exports = router;