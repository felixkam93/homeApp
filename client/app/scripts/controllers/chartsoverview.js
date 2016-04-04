'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ChartsoverviewCtrl
 * @description
 * # ChartsoverviewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ChartsoverviewCtrl', function ($scope) {
    $scope.labelsMonth = ["Jan", "Feb", "March", "April", "May", "June", "July"];
    $scope.labelsYears = ["2016", "2017", "2018"];
    $scope.series = ['Series A', 'Series B'];
    $scope.dataMonth = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.dataYears = [
      [28, 48, 40],
      [65, 59, 80]
    ];

    $scope.addSeries = function(){
      $scope.series.push('Series C');
      $scope.dataMonth.push([40,40,40,40,40,40,40]);
      $scope.dataYears.push([50,50,50]);
    };

    $scope.onRangeChange = function(range){
      switch(range) {
        case "yearly":
          $scope.labels=$scope.labelsYears;
          $scope.data=$scope.dataYears;
          break;
        case "monthly":
          $scope.labels=$scope.labelsMonth;
          $scope.data=$scope.dataMonth;
          break;
        default:
        $scope.data = [];
        $scope.labels=[];
      }
    }

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.getData = function(rowLimit, rowOffset){
      var selectFilter = {};
      selectFilter.rowLimit = rowLimit;
      selectFilter.rowOffset = rowOffset;
      selectFilter = JSON.stringify(selectFilter);


      $http({
        method : 'GET',
        url : '/climate',
        params: {'rowLimit':10, 'rowOffset':0}
      }).success(function(data) {

          //console.log(data);
        })
        .error(function(error) {
          console.log('Error: ' + JSON.stringify(error));
        });
    };



  });
