var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req,res){
	//var convert = JSON.stringify(data);
	res.send(data);
})

router.get('/searchresults', function(req,res){
	res.render('searchresults');
})

router.get('/noresults', function(req,res){
	res.render('noresults');
})

module.exports = router;
