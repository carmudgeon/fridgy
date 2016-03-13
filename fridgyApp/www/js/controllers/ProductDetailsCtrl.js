app.controller('ProductDetailsCtrl', function ($scope, $stateParams, ionicMaterialMotion, $http, $state) {
  var products = [];
  var init = function() {
   $scope.product = $stateParams.product;
  };

  init();

  $scope.addProduct = function() {
    products.push($scope.newProduct);
    $state.go("app.myFridge");
  }
});
