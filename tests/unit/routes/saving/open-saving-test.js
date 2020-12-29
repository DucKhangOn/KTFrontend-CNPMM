import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | saving/open-saving', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:saving/open-saving');
    assert.ok(route);
  });
});
