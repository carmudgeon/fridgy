app.controller('MyFridge', function ($scope, $stateParams, ionicMaterialMotion, $http) {

  $scope.blinds = function() {
    $http.get("/resources/my-fridge.json").then(function(data){
      $scope.fridge = data.data;
      document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
      setTimeout(function() {
        ionicMaterialMotion.blinds();
      }, 0);
    });
  };

  $scope.blinds();
});
