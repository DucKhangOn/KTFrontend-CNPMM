import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | saving/saving-listing', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:saving/saving-listing');
    assert.ok(route);
  });
});
