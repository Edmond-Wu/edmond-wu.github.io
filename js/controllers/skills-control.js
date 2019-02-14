angular.module('myApp').controller('skillsCtrl', function($scope) {
  $scope.languages = ['Java', 'HTML5/CSS', 'Javascript', 'Python', 'C', 'LaTeX'];
  $scope.frameworks = ['angularJS', 'jQuery', 'Bootstrap-type CSS Frameworks', 'Gradle'];
  $scope.tools = ['Linux OS', 'NPM', 'Unity3D engine', 'Git', 'Atlassian Jira'];
});
