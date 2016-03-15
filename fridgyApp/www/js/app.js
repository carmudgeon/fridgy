// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material','firebase']);

app.factory("Fridges", function($firebaseArray){
  var fridgesRef = new Firebase("https://carmudgeon.firebaseio.com/fridges");
  return $firebaseArray(fridgesRef);
});

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.lists', {
      url: '/lists',
      views: {
        'menuContent': {
          templateUrl: 'templates/lists.html',
          controller: 'ListsCtrl'
        }
      }
    })

    .state('app.ink', {
      url: '/ink',
      views: {
        'menuContent': {
          templateUrl: 'templates/ink.html',
          controller: 'InkCtrl'
        }
      }
    })

    .state('app.components', {
      url: '/components',
      views: {
        'menuContent': {
          templateUrl: 'templates/components.html',
          controller: 'ComponentsCtrl'
        }
      }
    })

    .state('app.myFridge', {
      url: '/my-fridge',
      views: {
        'menuContent': {
          templateUrl: 'templates/my-fridge.html',
          controller: 'MyFridge'
        }
      }
    })
    .state('app.nearFridges', {
      url: '/near-fridges',
      views: {
        'menuContent': {
          templateUrl: 'templates/near-fridges.html',
          controller: 'NearFridgesCtrl'
        }
      }
    })
    .state('app.fridge', {
      url: '/fridge/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/fridge.html',
          controller: 'FridgeCtrl'
        }
      }
    })
    .state('app.addProduct', {
      url: '/add-product',
      views: {
        'menuContent': {
          templateUrl: 'templates/add-product.html',
          controller: 'AddProductCtrl'
        }
      },
      params: {products: null}
    })
    .state('app.productDetails', {
      url: '/product-details',
      views: {
        'menuContent': {
          templateUrl: 'templates/product-details.html',
          controller: 'ProductDetailsCtrl'
        }
      },
      params: {product: null}
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
