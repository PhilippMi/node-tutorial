const express = require('express');

const webapp = express();

webapp.set('view engine', 'pug');

webapp.get('/', function(req, res) {
  res.render('index', {title: 'test', message: 'Katzenfotos mag jeder'});
});

webapp.get('/test', function(req, res) {
  res.send('Hallo, Stammtisch');
});

webapp.use('/css', express.static('./css'));

webapp.listen(8081, function() {
	console.log('webapp started');
});