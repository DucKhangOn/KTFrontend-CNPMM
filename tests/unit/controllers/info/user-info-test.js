import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | info/user-info', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:info/user-info');
    assert.ok(controller);
  });
});
