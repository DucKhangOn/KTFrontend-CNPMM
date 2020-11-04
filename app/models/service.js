import Model, { attr } from '@ember-data/model';

export default class ServiceModel extends Model {
    @attr('string') name;
    @attr('number') fee;
}
