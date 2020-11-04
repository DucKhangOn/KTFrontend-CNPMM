import Model, { attr } from '@ember-data/model';

export default class TransactionFeeModel extends Model {
    @attr('string') name;
    @attr('number') amountLimit;
    @attr('number') fee;
}
