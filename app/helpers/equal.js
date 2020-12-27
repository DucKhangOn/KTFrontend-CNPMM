import { helper } from '@ember/component/helper';

export default helper(function equal([ val1, val2 ]) {
  return val1 == val2;
});
