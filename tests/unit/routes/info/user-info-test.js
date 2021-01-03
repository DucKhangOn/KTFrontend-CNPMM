import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | info/user-info', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:info/user-info');
    assert.ok(route);
  });
});
