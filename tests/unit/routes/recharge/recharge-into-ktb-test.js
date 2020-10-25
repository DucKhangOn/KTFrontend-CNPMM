import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | recharge/recharge-into-ktb', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:recharge/recharge-into-ktb');
    assert.ok(route);
  });
});
