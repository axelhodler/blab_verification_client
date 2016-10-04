import DS from 'ember-data';

export default DS.Model.extend({
  submitterId: DS.attr('string'),
  valid: DS.attr('boolean'),
  verifications: DS.hasMany('verification'),
  createdOn: DS.attr('date'),
  input: DS.attr('number'),
  output: DS.attr('string'),
  published: DS.attr('boolean')
});
