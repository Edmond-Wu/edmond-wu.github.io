angular.module('myApp').controller('blogCtrl', function($scope, mediumFactory) {
  $scope.data = mediumFactory.getData();
  $scope.data.Init({
    renderTo: '#medium-widget',
    params: {
      "resource": "https://medium.com/@edmond.wu0895",
      "postsPerLine": 2,
      "limit": 4,
      "picture": "big",
      "fields": ["description", "publishAt"],
      "ratio": "landscape"
    }
  })
});
