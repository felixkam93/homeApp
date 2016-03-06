'use strict';

describe('Controller: ChartsoverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ChartsoverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartsoverviewCtrl = $controller('ChartsoverviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChartsoverviewCtrl.awesomeThings.length).toBe(3);
  });
});
