import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
    @service session;

    model() {
        this.store.adapterFor('user').getBankAccount(localStorage.getItem('userId')).then((res) => {
            localStorage.setItem('userBankAccountNumber', res.bankAccount.bankCardNumber);
        });
    }

    redirect() {
        if (this.session.isLogin() == null || this.session.isLogin() == 'null') {
            console.log(this.session.isLogin())
            this.transitionTo('login');
            return;
        }
    }
}
