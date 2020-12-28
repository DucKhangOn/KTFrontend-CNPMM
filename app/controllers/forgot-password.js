import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ForgotPasswordController extends Controller {
    @action
    forgot() {
        var self = this;
        var result = "";
        var characters = "0123456789";
        var charactersLength = characters.length;

        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        self.model.otp = result;

        this.store.adapterFor('user').forgot(self.model).then((res) => {
            localStorage.setItem('userOTP', res.otp);
            localStorage.setItem('userForgotEmail', self.model.email);
            this.transitionToRoute('change-password');
        });
    }
}
