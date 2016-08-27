import DS from 'ember-data';

export default DS.Model.extend({
  submitterId: DS.attr('number'),
  valid: DS.attr('boolean')
});
