app.controller('AddProductCtrl', function ($scope, $stateParams, ionicMaterialMotion, $http, $state) {
  var products = [];
  var init = function() {
    products =  $stateParams.products;
    $scope.newProduct = {
      name: "",
      quantity: 3,
      unity: "",
      description: "",
      picture: "img/default-product.png",
      state: ""
    }
  };

  init();

  $scope.addProduct = function() {
    products.push($scope.newProduct);
    $state.go("app.myFridge");
  }
});
