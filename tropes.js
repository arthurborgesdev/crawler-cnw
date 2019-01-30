var Crawler = require("crawler");
var fs = require('fs');
var tropesArray = fs.createReadStream('tropesArray.txt');

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

// Tentando ler o arquivo .txt e salvar em um Array
// para poder ser usado no c.queue para então serem extraídos
// o content em um objeto e depois salvar no banco
tropesArray.on('error', function(err) {
  console.log(err)
});
var tArray = [];
tropesArray.on('readable', function() {
  tArray.forEach(function(t) {
  	tArray.push(tropesArray.read())
  })
  console.log(tArray);
	//console.log(`${tropesArray.read()}`);
})

tropesArray.on('end', function() {
	console.log('end');
})

/*
c.queue(
	'https://tvtropes.org/pmwiki/pmwiki.php/Main/TwinkleInTheEye',
	//'https://tvtropes.org/pmwiki/pmwiki.php/Main/FourMoreMeasures',
	//'https://tvtropes.org/pmwiki/pmwiki.php/WesternAnimation/GayPurree'
);
*/