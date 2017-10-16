gulp-series
===============

Alternative to run-sequence solution that temporarily solves sequential task running.

This solves issues with run-sequence not aborting task chains on error.

#### Usage - gulpfile.js

		var gulps = require("gulp-series");

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


#### Usage - terminal

		gulp

		/*output
			[14:00:44] Starting 'default'...
			[14:00:44] Starting '0.test1'...
			[14:00:44] Finished 'default' after 1.43 ms
			test1 is done
			[14:00:45] Finished '0.test1' after 1 s
			[14:00:45] Starting '1.test2'...
			test2 is done
			[14:00:45] Finished '1.test2' after 88 μs
		*/
