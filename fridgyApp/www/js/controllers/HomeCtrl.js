app.controller('HomeCtrl', function ($scope, $state) {

  $scope.goToMyFridge = function(){
    $state.go("app.myFridge");
  };

  $scope.goToNearFridges = function(){
    $state.go("app.nearFridges");
  };

});
