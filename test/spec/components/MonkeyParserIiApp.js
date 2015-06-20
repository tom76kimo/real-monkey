'use strict';

describe('MonkeyParserIiApp', function () {
  var React = require('react/addons');
  var MonkeyParserIiApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MonkeyParserIiApp = require('components/MonkeyParserIiApp.js');
    component = React.createElement(MonkeyParserIiApp);
  });

  it('should create a new instance of MonkeyParserIiApp', function () {
    expect(component).toBeDefined();
  });
});
