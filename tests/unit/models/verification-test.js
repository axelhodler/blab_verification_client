import { moduleForModel, test } from 'ember-qunit';

moduleForModel('verification', 'Unit | Model | verification', {
  // Specify the other units that are required for this test.
  needs: ['model:member', 'model:report']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
