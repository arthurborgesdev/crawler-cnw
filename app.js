var Crawler = require("crawler");



var c = new Crawler({ 
	callback: function(error, res, done) {
		if(error) { console.log(error); }
		else {
			var $ = res.$;
			var links = [];
			/*
			contents = {
				title: $("title").text(),
				articleTitle: $("h1.entry-title").text().trim(),
				description: $("#main-article").children("p").eq(1).text().trim()
			}
			console.log(contents);
			*/
			$('a').each(function(i, elem) {
        links[i] = $(this).attr('href')
			});
			console.log(links);
		}
		//c.queue(links);
		done();
	}
});

c.queue(
	'https://tvtropes.org/pmwiki/pmwiki.php/Main/TwinkleInTheEye',
	//'https://tvtropes.org/pmwiki/pmwiki.php/Main/FourMoreMeasures',
	//'https://tvtropes.org/pmwiki/pmwiki.php/WesternAnimation/GayPurree'
);
