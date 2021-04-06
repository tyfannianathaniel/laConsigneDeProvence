var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

// INDEX
router.get('/', indexController.index);
router.all(/.*/, function(req, res) {res.redirect('/')}); // redirect all wrong routes to the root

module.exports = router;
