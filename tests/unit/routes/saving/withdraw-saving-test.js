import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | saving/withdraw-saving', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:saving/withdraw-saving');
    assert.ok(route);
  });
});
