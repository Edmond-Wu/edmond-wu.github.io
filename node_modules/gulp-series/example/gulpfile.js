var gulps = require("../lib/gulp-series.js");

gulps.registerTasks({
	"test1" : (function(done) {
		setTimeout(function() {
			console.log("test1 is done");
			done();
		}, 1000);
	}),
	"test2" : (function() {
		console.log("test2 is done");
	})
});

gulps.registerSeries("default", ["test1", "test2"]);
