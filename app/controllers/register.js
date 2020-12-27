import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {
    @service session;

    @action
    register() {
        var self = this;
        self.model.nameBank = 'Ktbank';

        this.store.adapterFor('user').register(self.model).then((res) => {
            console.log(res.newUser);
            if (res.newUser) {
                this.transitionToRoute('login');
            } else {
                var inform = document.getElementById("snackbar");
                inform.className = "show";
                setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
                inform.innerHTML = "Thông tin không chính xác. Vui lòng kiểm tra và nhập lại.";
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
