angular.module('myApp').controller('skillsCtrl', function($scope) {
  $scope.languages = ['Java', 'HTML5/CSS', 'Javascript', 'Python', 'C', 'C#'];
  $scope.frameworks = ['angularJS', 'jQuery', 'Bootstrap (and other CSS frameworks)', 'Gradle', 'Apache Ant', 'LaTeX'];
  $scope.tools = ['Linux (RedHat/Ubuntu)', 'Node Package Manager (NPM)', 'Unity3D engine', 'Git', 'SVN', 'Atlassian Jira'];
});
