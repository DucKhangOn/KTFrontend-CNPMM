import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | info/rate-interest', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:info/rate-interest');
    assert.ok(route);
  });
});
