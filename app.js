var Xray = require('x-ray');
var x = Xray();

/*
x('http://website-arthur.herokuapp.com/',
  {
    titulo: '.jumbotron-heading',
    descricao: 'div.container > p'
  }
 )
  .write('results.json');

*/

x('https://www.usadosbr.com/carros-e-utilitarios/bmw/x4/2-0-28i-x-line-turbo/2016-branco-santa-cruz-de-goias-goias',
  {
  	combustivel: 'li.lista-combustivel p'
  })
  .write('results.json');