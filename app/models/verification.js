import DS from 'ember-data';

export default DS.Model.extend({
  member: DS.belongsTo('member'),
  report: DS.belongsTo('report')
});
