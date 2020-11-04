import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
    @attr('string') email;
    @attr('string') password;
    @attr('string') firstName;
    @attr('string') lastName;
    @attr('string') phone;
    @attr('string') gender;
    @attr('string') address;
    @attr('boolean') isAdmin;
}
