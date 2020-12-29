import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SavingWithdrawSavingController extends Controller {
    @tracked withdrawalDate = '';
    @tracked reviews = [];
    @tracked prev = 0;
    @tracked current = 0;

    @action
    async review() {
        console.log(this.withdrawalDate.length);
        var checkMonth = this.withdrawalDate[0] + this.withdrawalDate[1];
        checkMonth = parseInt(checkMonth);
        console.log(checkMonth);
        if (this.withdrawalDate.length != 10 || checkMonth > 12 || checkMonth < 1) {
            var inform = document.getElementById("snackbar");
            inform.className = "show";
            setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
            inform.innerHTML = "Thông tin không chính xác. Vui lòng kiểm tra và nhập lại.";

            this.reviews = [];
        } else {
            var self = this;

            var data = {
                bankSavingBookID: self.model.id,
                BankCard: self.model.savingAccountNumber,
                withdrawalDate: self.withdrawalDate
            };

            var res = await this.store.adapterFor('saving').getReview(data);

            console.log(res);

            if (res.result == true || res.result == 'true') {
                this.prev = res.data[0].prevBalance;
                this.current = res.data[res.length - 1].prevBalance;

                this.reviews = [];
                for (var i = 0; i < res.length; i++) {
                    this.reviews.pushObject(res.data[i]);
                }
            } else {
                this.reviews = [];

                var inform = document.getElementById("snackbar");
                inform.className = "show";
                setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
                inform.innerHTML = "Thông tin không chính xác. Vui lòng kiểm tra và nhập lại.";
            }
        }
    }

    @action
    finalSettlement() {
        var self = this;

        var data = {
            bankSavingBookID: self.model.id,
            withdrawalDate: self.withdrawalDate
        };

        this.store.adapterFor('saving').finalSettlement(data).then((res) => {
            console.log(res);
            if (res.result == true || res.result == 'true') {
                this.transitionToRoute('saving.saving-listing');
            } else {
                var inform = document.getElementById("snackbar");
                inform.className = "show";
                setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
                inform.innerHTML = "Thông tin không chính xác. Vui lòng kiểm tra và nhập lại.";
            }
        });
    }

    @action
    async viewDetail() {
        var self = this;

        var data = {
            BankCard: self.model.savingAccountNumber,
        };
        var res = await this.store.adapterFor('saving').getAllInfoSaving(data);
        if (res) {
            this.reviews = [];
            for (var i = 0; i < self.model.length; i++) {
                this.reviews.pushObject(res[i]);
            }
        }
        console.log(res);
    }
}
