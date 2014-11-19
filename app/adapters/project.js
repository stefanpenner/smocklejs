import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  findAll: function() {
    // this can be replaced with an ajax call the returns the same format
    // or if everything is conventional, it can just be removed entirely.
    return {
      projects: [
        {
          id: 1, // <-- notice the ID
          name: "Smockle",
          client: "client",
          quote: "quote",
          description: "description",
          link: "http://www.smockle.com/"
        }
      ]
    };
  }
});
