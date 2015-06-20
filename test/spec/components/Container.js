'use strict';

describe('Container', function () {
  var React = require('react/addons');
  var Container, component;

  beforeEach(function () {
    Container = require('components/Container.js');
    component = React.createElement(Container);
  });

  it('should create a new instance of Container', function () {
    expect(component).toBeDefined();
  });
});
