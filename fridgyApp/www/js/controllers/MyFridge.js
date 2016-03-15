app.controller('MyFridge', function ($scope, $stateParams, ionicMaterialMotion, $http, $state, $firebaseObject) {

  $scope.blinds = function() {
    var fridgeRef = new Firebase("https://carmudgeon.firebaseio.com/fridges/0");
    $scope.fridge = $firebaseObject(fridgeRef);
    console.log($scope.fridge);

    //$http.get("/resources/my-fridge.json").then(function(data){
    //  $scope.fridge = data.data;
    //  document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
    //  setTimeout(function() {
    //    ionicMaterialMotion.blinds();
    //  }, 0);
    //});
  };

  $scope.blinds();


  $scope.goToAddProduct = function(){
    $state.go("app.addProduct", {
      products: $scope.fridge.products
    });
  };

  $scope.goToProductDetails = function(product){
    $state.go("app.productDetails", {
      product: product
    });
  };
});
