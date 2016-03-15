app.controller('AddProductCtrl', function ($scope, $stateParams, ionicMaterialMotion, $http, $state, $firebaseArray) {
  var products = [];
  var init = function() {
    var fridgeProductsRef = new Firebase("https://carmudgeon.firebaseio.com/fridges/0/products");
    products =  $firebaseArray(fridgeProductsRef);
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
    products.$add($scope.newProduct);
    $state.go("app.myFridge");
  }
});
