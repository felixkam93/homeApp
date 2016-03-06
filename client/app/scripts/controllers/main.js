'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getData = function(rowLimit, rowOffset){
      var selectFilter = {};
      selectFilter.rowLimit = rowLimit;
      selectFilter.rowOffset = rowOffset;
      selectFilter = JSON.stringify(selectFilter);

     /* $http.get('/climate/', {'rowLimit' : 10, 'rowOffset' : 0})
        .success(function(data) {
         // $scope.pythonCallSuccess = data;
          console.log(data);
        })
        .error(function(error) {
          console.log('Error: ' + JSON.stringify(error));
        });*/
      $http({
        method : 'GET',
        url : '/climate',
        params: {'rowLimit':10, 'rowOffset':0}
      }).success(function(data) {
          // $scope.pythonCallSuccess = data;
          console.log(data);
        })
        .error(function(error) {
          console.log('Error: ' + JSON.stringify(error));
        });
    };


  });
