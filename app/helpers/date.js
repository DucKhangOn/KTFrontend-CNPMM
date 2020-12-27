import { helper } from '@ember/component/helper';

export default helper(function date([val]) {
  if (val == null || val == 'null') {
    return '';
  }
  var newVal = val.substr(0, 10);
  return newVal;
});
