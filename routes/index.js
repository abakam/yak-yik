var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource;
  var page = 'create' + resource;
  res.render(page);
});

router.get('/zone/:id', function(req, res, next){
  ZoneController.findById(req.params.id, (err, zone) => {
    if(err){
      res.render('error', err);
      return;
    }
    zone.zipCodes = zone.zipCodes.join(', ');
    res.locals.zone = zone;
    res.render('updatezone');
  })
})

module.exports = router;
