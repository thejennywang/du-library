import Ember from 'ember';

export default Ember.Component.extend({
   actions: {
    createItem: function(newItem) {
     console.log(newItem.name);
    }
  }
});
