import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginController extends Controller {
    @service session;

    @action
    async login() {
        this.session.login(this.model.email, this.model.password)
        .then(user => {
            if (user){
                this.transitionToRoute('admin');
                // console.log(user);
                // console.log(this.session.user);
            } else {
                console.log('Login failed');
            }
        });
    }
}
