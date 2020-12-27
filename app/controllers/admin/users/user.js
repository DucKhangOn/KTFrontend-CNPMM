import Controller from '../../../controllers/submit';
import { action } from '@ember/object';

export default class AdminUsersUserController extends Controller {
    roles = [
        {
            value: '',
            name: ''
        },
        {
            value: true,
            name: 'Admin'
        },
        {
            value: false,
            name: 'Người dùng'
        }];

    @action
    updateValue(event) {
        console.log(event.target.value);
        this.model.isAdmin = event.target.value;
        console.log(this.model.isAdmin);
    }

    validate() {
        var self = this;

        if ((self.model.email == undefined || self.model.email == 'undefined') ||
            (self.model.password == undefined || self.model.password == 'undefined'))
            return false;
        return true;
    }

    transitionToParent() {
        this.transitionToRoute('admin.users');
    }
}
