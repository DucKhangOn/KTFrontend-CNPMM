import Route from '@ember/routing/route';

export default class SavingWithdrawSavingRoute extends Route {
    model(params) {
        var x = this.store.adapterFor('saving').getSavingBookById(params.withdrawSaving_id).then((res) => {
            console.log(res.savingBook);
            return res.savingBook;
        });

        return x;
    }

    resetController(controller) {
        controller.reviews = [];
    }
}