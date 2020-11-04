import Model, { attr } from '@ember-data/model';

export default class RateInterestModel extends Model {
    @attr('number') term;
    @attr('number') rateInterest;
}
