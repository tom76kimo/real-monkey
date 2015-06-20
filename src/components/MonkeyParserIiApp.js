'use strict';

var React = require('react/addons');
var Container = require('./Container');

var Bootstrap = require('react-bootstrap'),
    Navbar = Bootstrap.Navbar,
    Button = Bootstrap.Button,
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem;

// CSS
require('normalize.css');
require('styles/main.css');

var imageURL = require('../images/yeoman.png');

var MonkeyParserIiApp = React.createClass({
    getInitialState: function () {
        return {
            loginStatus: 1
        };
    },
    initialize: function () {
        var self = this;
        Parse.initialize("W4JNaLiHL9YdTLkkc0rTHadM4Y6PY1DyQVDA9AhT", "RJFfqYzLTHA5QUaJiAntLd7ZmEBBzgp3h82XEWr5");
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1662025370700566',
                xfbml      : true,
                version    : 'v2.0'
            });
            self.fbLogin();
            
        };
    },
    fbLogin: function () {
        var self = this;
        FB.login(function (response) {
            if (response.status === 'connected') {
              // Logged into your app and Facebook.
              self.setState({
                loginStatus: 1
              });
            } else if (response.status === 'not_authorized') {
              // The person is logged into Facebook, but not your app.
              self.setState({
                loginStatus: 0
              });
            } else {
              // The person is not logged into Facebook, so we're not sure if
              // they are logged into this app or not.
             
            }
        });
    },
    render: function() {
        if (this.state.loginStatus === 0) {
            this.initialize();
            return (
              <div className='main'>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} href="#">搜尋告白/靠北</NavItem>
                    </Nav>
                </Navbar>
              </div>
            );
        } else if (this.state.loginStatus === 1) {
        	this.initialize();
            return (
              <div className='main'>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} href="#">搜尋告白/靠北</NavItem>
                    </Nav>
                </Navbar>
                <Container />
              </div>
            );
        }
    }
});
React.render(<MonkeyParserIiApp />, document.getElementById('content')); // jshint ignore:line

module.exports = MonkeyParserIiApp;
