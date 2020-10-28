import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | page/success', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:page/success');
    assert.ok(route);
  });
});
