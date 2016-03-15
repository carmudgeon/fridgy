
app.controller('FridgeCtrl', function ($scope, $stateParams, ionicMaterialMotion, $http, $firebaseObject) {

  $scope.blinds = function() {

    var fridgeRef = new Firebase("https://carmudgeon.firebaseio.com/fridges/"+$stateParams.id);
    $scope.fridge =  $firebaseObject(fridgeRef);

    //$http.get("/resources/fridges/" + $stateParams.id + ".json").then(function(data){
    //  $scope.fridge = data.data;
    //  document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
    //  setTimeout(function() {
    //    ionicMaterialMotion.blinds();
    //  }, 0);
    //});
  };

  $scope.blinds();

  $scope.goToProductDetails = function(product){
    $state.go("app.productDetails", {
      product: product
    });
  };

});
