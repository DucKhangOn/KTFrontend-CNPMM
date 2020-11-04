import Model, { attr } from '@ember-data/model';

export default class BankModel extends Model {
    @attr('string') name;
    @attr('string') number;
    @attr('boolean') isFriend;
}
