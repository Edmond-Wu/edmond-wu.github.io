// gulp-series
var gulp = require("gulp");

module.exports = new function() {
	var self = this;
	this.tasks = {};

	function getSeriesTaskName(index, seriesOrName) {
		return index+"."+(Array.isArray(seriesOrName) ? seriesOrName[index] : seriesOrName);
	}

	function runSeriesTask(series) {
		var tasks = self.tasks;
		series.forEach(function(t) {
			if(!tasks.hasOwnProperty(t))
				throw "task " + t + " is not registered";
		});
		
		return function() {
			if(!series.length)
				throw "no series provided";

			series.forEach(function(t, i) {
				if(i === 0)
					gulp.task(getSeriesTaskName(i, t), tasks[t]);
				else
					gulp.task(getSeriesTaskName(i, t), [getSeriesTaskName(i - 1, series)], tasks[t]);
			
			});


			return gulp.start(getSeriesTaskName(series.length - 1, series));
		};
	}

	this.registerTasks = function(tasks) {
		for(var n in tasks) {
			if(!tasks.hasOwnProperty(n)) continue;

			gulp.task(n, tasks[n]);
		}

		self.tasks = tasks;
	};

	this.registerSeries = function(name, series) {
		gulp.task(name, runSeriesTask(series));
	};
};