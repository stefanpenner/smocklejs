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

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    this.store.push('project', {
      name: "Smockle",
      client: "client",
      quote: "quote",
      description: "description",
      link: "http://www.smockle.com/"
    });
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('project');
  }
});

export default Router;
