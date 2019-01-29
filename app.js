var request = require('request');

request('https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=8905',
 function(error, response, body) {
 	console.log('error:', error);
 	console.log('statusCode:', response && response.statusCode);
 	console.log('body:', body);
 });