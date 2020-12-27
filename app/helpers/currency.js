import { helper } from '@ember/component/helper';

export default helper(function currency([val]) {
  if (val == null || val == 'null') {
    return '';
  }
  var newVal = val;
  newVal = newVal.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  return newVal;
});
