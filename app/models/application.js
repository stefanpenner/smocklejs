import DS from 'ember-data';
import App from '../app';

App.Project = DS.Model.extend({
  name: DS.attr('string'),
  client: DS.attr('string'),
  quote: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string')
});

export default App.Project;
