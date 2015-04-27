import Ember from 'ember';

export default Ember.Controller.extend({
  tooLong: Ember.computed.gt("ourText.length", 2),
  ourText: ""
});
