var Crawler = require("crawler");
var fs = require('fs');

var c = new Crawler({ 
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
 
fs.readFile('tropesArray.txt', function(err, data) {
	if (err) throw err;
	console.log(data.toString().split(', '));
});


/*
c.queue(
	'https://tvtropes.org/pmwiki/pmwiki.php/Main/TwinkleInTheEye',
	//'https://tvtropes.org/pmwiki/pmwiki.php/Main/FourMoreMeasures',
	//'https://tvtropes.org/pmwiki/pmwiki.php/WesternAnimation/GayPurree'
);
*/