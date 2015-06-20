'use strict';

describe('Searcher', function () {
  var React = require('react/addons');
  var Searcher, component;

  beforeEach(function () {
    Searcher = require('components/Searcher.js');
    component = React.createElement(Searcher);
  });

  it('should create a new instance of Searcher', function () {
    expect(component).toBeDefined();
  });
});
