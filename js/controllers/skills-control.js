angular.module('myApp').controller('skillsCtrl', function($scope) {
  $scope.languages = ['Java', 'HTML5/CSS', 'Javascript', 'Python', 'C'];
  $scope.frameworks = ['angularJS', 'jQuery', 'Materialize (and other similar front-end frameworks)', 'Gradle', 'LaTeX'];
  $scope.tools = ['Linux (RedHat/Ubuntu)', 'NPM', 'Unity3D engine', 'Git', 'Atlassian Jira'];
});
