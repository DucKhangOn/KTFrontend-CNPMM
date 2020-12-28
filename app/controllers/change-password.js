import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ChangePasswordController extends Controller {
    @action
    changePassword() {
        var self = this;
        var otp = localStorage.getItem('userOTP');

        if (self.model.otp != otp) {
            var inform = document.getElementById("snackbar");
            inform.className = "show";
            setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
            inform.innerHTML = "Mã OTP không chính xác. Vui lòng kiểm tra và nhập lại.";
        }
        else {
            self.model.email = localStorage.getItem('userForgotEmail');
            this.store.adapterFor('user').changePassword(self.model).then((res) => {
                console.log(res.result);
                if (res.result == "ok") {
                    this.transitionToRoute("login");
                    localStorage.removeItem('userOTP');
                    localStorage.removeItem('userForgotEmail');
                }
            });
        }
    }
}
