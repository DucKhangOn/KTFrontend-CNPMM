import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminUsersIndexController extends Controller {
    @action
    addUser() {
        this.transitionToRoute('admin.users.user', 'null');
    }

    @action
    delete(item) {
        item.destroyRecord();
        location.reload();
    }
}
