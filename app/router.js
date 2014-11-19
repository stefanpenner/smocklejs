import Ember from 'ember';
import App from './app';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  return this.route('index', {
    path: '/'
  });
});

export default Router;
