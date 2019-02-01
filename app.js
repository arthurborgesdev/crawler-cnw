var Crawler = require("crawler");
var fs = require('fs');
var tropesArray = fs.createWriteStream('tropesArray.txt');


var linkCrawler = new Crawler({ 
	callback: function(error, res, done) {
		if(error) { console.log(error); }
		else {
			var $ = res.$;
			var tropesLinks = [];
			$('a').each(function(i, elem) {
				//console.log(i, elem);
        tropesLinks[i] = $(elem).attr('href');
			});

      let tropes = tropesLinks.filter(function(element) {
      	// filtra só os links de tropes e retorna em um array
      	return element.match(/pmwiki\/pmwiki\.php/);
      })
  
      let links = tropes.map(function(trope) {
      	// retorna os links completos
      	return 'https://tvtropes.org' + trope;
      })

      console.log(links);
      contentCrawler.queue(links);

      /* Essa parte é pra gravar em um arquivo de texto
      tropes.forEach(function(v) {
      	//console.log(v);
      	tropesArray.write(v + ', ');
      	//tropesArray.write(', ');
      });
      tropesArray.end();
      console.log("XDXDXDXDXDXDXDXDXDXDXDXDXDX")
      fs.readFile('tropesArray.txt', function(err, data) {
	      if (err) throw err;
	      arrayData = data.toString().split(', ');
	      console.log(arrayData);
      });
      */
		}
		done();
	}
});

var contentCrawler = new Crawler({ 
	callback: function(error, res, done) {
		if(error) { console.log(error); }
		else {
			var $ = res.$;

			contents = {
				title: $("title").text(),
				articleTitle: $("h1.entry-title").text().trim(),
				description: $("#main-article").children("p").eq(1).text().trim()
			}
			console.log(contents);
		}
		done();
	}
});


function Queue() {
  var links = [];
  var arrayData = [];
	linkCrawler.queue(
	  'https://tvtropes.org/pmwiki/pmwiki.php/Main/TwinkleInTheEye'
  );
}

Queue();