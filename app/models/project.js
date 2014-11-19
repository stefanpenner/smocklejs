import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  client: DS.attr('string'),
  quote: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string')
});
