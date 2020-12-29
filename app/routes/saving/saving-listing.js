import Route from '@ember/routing/route';

export default class SavingSavingListingRoute extends Route {
    model() {
        var x = this.store.adapterFor('saving').getSavingBooks(localStorage.getItem('userBankAccountNumber')).then((res) => {
            console.log(res.savingBooks);
            return res.savingBooks;
        });

        return x;
    }
}
