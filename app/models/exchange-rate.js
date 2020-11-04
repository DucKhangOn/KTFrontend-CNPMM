import Model, { attr } from '@ember-data/model';

export default class ExchangeRateModel extends Model {
    @attr('string') unit;
    @attr('number') vnd;
}
