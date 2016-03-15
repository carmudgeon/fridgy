app.controller('NearFridgesCtrl', function ($scope, $stateParams, ionicMaterialMotion, $http, $state, Fridges) {



  $scope.blinds = function() {
    $scope.fridges = Fridges;
   // document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
   // ionicMaterialMotion.blinds();
    console.log($scope.fridges);
    //document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
    //
    //$http.get("/resources/fridges.json").then(function(data){
    //  $scope.fridges = data.data;
    //
    //  setTimeout(function() {
    //    ionicMaterialMotion.blinds();
    //  }, 300);
    //});
  };

  $scope.blinds();


  $scope.goToFridge = function(id) {
    $state.go("app.fridge", {id: id});
  }
});
