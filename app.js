var Crawler = require("crawler");
var fs = require('fs');
var tropesArray = fs.createWriteStream('tropesArray.txt');


var c = new Crawler({ 
	callback: function(error, res, done) {
		if(error) { console.log(error); }
		else {
			var $ = res.$;
			var links = [];
			$('a').each(function(i, elem) {
				//console.log(i, elem);
        links[i] = $(elem).attr('href');
			});

      let tropes = links.filter(function(element) {
      	return element.match(/pmwiki\/pmwiki\.php/);
      })
      
      //console.log(tropes);

      tropesArray.on('error', function(err) {
      	console.log(err)
      });
      tropes.forEach(function(v) {
      	console.log(v);
      	tropesArray.write(v);
      	tropesArray.write(', ');
      });
      tropesArray.end();
      console.log("XDXDXDXDXDXDXDXDXDXDXDXDXDX")
      fs.readFile('tropesArray.txt', function(err, data) {
	      if (err) throw err;
	      arrayData = data.toString().split(', ');
	      console.log(arrayData);
      });
		}
		done();
	}
});



function Queue() {
  var links = [];
  var arrayData = [];
	c.queue(
	  'https://tvtropes.org/pmwiki/pmwiki.php/Main/TwinkleInTheEye'
  );

  c.queue(
	  'https://tvtropes.org//pmwiki/pmwiki.php/Main/NewsTropes'
  );
}

Queue();