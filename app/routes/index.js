import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1, // <-- notice the ID
        name: "Smockle",
        client: "client",
        quote: "quote",
        description: "description",
        link: "http://www.smockle.com/"
      }
    ];
  }
});
