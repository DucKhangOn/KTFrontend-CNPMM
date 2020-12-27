import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginController extends Controller {
    @service session;

    @action
    async login() {
        var self = this;

        this.session.login(self.model.email, self.model.password)
            .then(user => {
                if (user) {
                    this.transitionToRoute('home');
                } else {
                    var inform = document.getElementById("snackbar");
                    inform.className = "show";
                    setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
                    inform.innerHTML = "Tài khoản hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.";
                }
            });
    }
}
