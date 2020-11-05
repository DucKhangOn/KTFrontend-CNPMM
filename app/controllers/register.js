import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RegisterController extends Controller {
    @service session; 

    @action
    register() {
        this.store.adapterFor('user').register(this.model).then((res) => {
            if (res.user) {
                this.transitionToRoute('login');
            }       
        });
    }

    @action
    async getUsers() {
        var users = this.model;
        users.forEach(element => {
            console.log(element.email);
            console.log(element.password);
        });
        var x = await this.session.getUser();
        console.log('Current user is ' + x.email);
    }

    @action
    logout() {
        this.session.logout();
        this.transitionToRoute('login');
    }
}
