var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET Login page. */
router.get('/login', function(req, res) {
           res.render('login');
           });

/* GET About page. */
router.get('/about', function(req, res) {
           res.render('about');
           });

/* GET User page. */
router.get('/user', function(req, res) {
           res.render('user');
           });


/* GET dienste page. */
router.get('/dienste', function(req, res) {
           res.render('dienste');
           });

/* GET agbs page. */
router.get('/agbs', function(req, res) {
           res.render('agbs');
           });

/* GET datenschutz page. */
router.get('/datenschutz', function(req, res) {
           res.render('datenschutz');
           });

/* GET faq page. */
router.get('/faq', function(req, res) {
           res.render('faq');
           });

/* GET impressum page. */
router.get('/impressum', function(req, res) {
           res.render('impressum');
           });

/* GET kontakt page. */
router.get('/kontakt', function(req, res) {
           res.render('kontakt');
           });
/* GET jobs page. */
router.get('/jobs', function(req, res) {
           res.render('jobs');
           });

/* GET preise page. */
router.get('/preise', function(req, res) {
           res.render('preise');
           });