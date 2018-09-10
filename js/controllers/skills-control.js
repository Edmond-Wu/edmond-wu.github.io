angular.module('myApp').controller('skillsCtrl', function($scope) {
  $scope.languages = ['Java', 'HTML5/CSS', 'Javascript', 'Python', 'C', 'C#'];
  $scope.frameworks = ['angularJS', 'jQuery', 'Bootstrap', 'Materialize CSS', 'Apache Ant', 'NodeJS'];
  $scope.tools = ['Linux (RedHat/Ubuntu)', 'Windows', 'Unity3D engine', 'Git', 'Subversion/SVN', 'Atlassian Jira'];
});
