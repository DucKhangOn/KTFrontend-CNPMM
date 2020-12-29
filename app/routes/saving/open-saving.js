import Route from '@ember/routing/route';

export default class SavingOpenSavingRoute extends Route {
    model() {
        var x = this.store.adapterFor('user').getBankAccount(localStorage.getItem('userId')).then((res) => {
            localStorage.setItem('userBankAccountNumber', res.bankAccount.bankCardNumber);
            return res.bankAccount;
        });

        return x;
    }
}
