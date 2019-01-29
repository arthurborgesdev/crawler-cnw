var Crawler = require("crawler");

var c = new Crawler({
	maxConnections: 1,
	callback: function(error, res, done) {
		if(error) {
			console.log(error);
		} else {
			var $ = res.$;
			carTitle = 
			  $("body")
			  .children("table")
			  .eq(2)
        .children("tr")
        .eq(0)
        .children("td")
			  .text();

			console.log(carTitle);
		}
		done();
	}
});

c.queue('https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=8905')