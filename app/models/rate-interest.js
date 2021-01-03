import Model, { attr } from '@ember-data/model';

export default class RateInterestModel extends Model {
    @attr('number') term;
    @attr('number') rateInterest;
    @attr('number') day;
    @attr('number') month;
    @attr('number') year;
    @attr('number') codeRate;
}