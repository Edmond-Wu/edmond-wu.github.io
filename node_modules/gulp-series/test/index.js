// test/index.js
var chai = require("chai");
var expect = chai.expect;
var gulp = require("gulp");
var gulps = require("../lib/gulp-series.js");

describe("#gulp task series test", function() {
	var numberOfChecks = 5;
	var taskChecker = [];

	it("registers tasks", function(done) {
		var tasks = {};
		for(var i = 0;i < numberOfChecks;i++) {
			(function(index) {
				tasks["test"+index] = function(done1) {
					setTimeout(function() {


						taskChecker[index] = true;
						console.log(index);
						done1();
					}, 1000/numberOfChecks);
				};
			})(i);
		}

		gulps.registerTasks(tasks);
		done();
	});

	it("runs tasks", function(done) {

		gulp.start("test0", done);
	});

	it("registers series", function(done) {
		var series = [];
		for(var i = 0;i<numberOfChecks;i++) {
			series.push("test"+i);
		}

		gulps.registerSeries("run-series", series);

		done();
	});

	it("runs series", function(done) {

		gulp.start("run-series", function(err) {
			if(err) throw err;

			//check if series executed sequencially
			for(var i = 0;i<numberOfChecks;i++) {
				expect(taskChecker[i]).to.be.true;
			}

			done();
		});
	});
});