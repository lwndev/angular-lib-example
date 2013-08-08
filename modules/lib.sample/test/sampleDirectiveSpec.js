/*global describe, beforeEach, module, inject, it, spyOn, expect, $ */
describe('lib.sample', function () {
  'use strict';

  beforeEach(module('lib.sample'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<sample-directive></sample-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the sampleDirective directive');
  }));
});