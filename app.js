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
      
      console.log(tropes);

      tropesArray.on('error', function(err) {
      	console.log(err)
      });
      tropes.forEach(function(v) {
      	console.log(v);
      	tropesArray.write(v);
      	tropesArray.write(', ' + '\n');
      });
      tropesArray.end();
		}
		done();
	}
});

c.queue(
	'https://tvtropes.org/pmwiki/pmwiki.php/Main/TwinkleInTheEye'
);
