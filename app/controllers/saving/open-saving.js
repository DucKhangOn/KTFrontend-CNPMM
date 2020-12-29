import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import config from '../../config/environment';

export default class SavingOpenSavingController extends Controller {
    @tracked amount = 0;
    @tracked term = 1200;

    terms = [
        {
            value: 0.5,
            name: '15 ngày'
        },
        {
            value: 1,
            name: '1 tháng'
        },
        {
            value: 2,
            name: '2 tháng'
        },
        {
            value: 3,
            name: '3 tháng'
        },
        {
            value: 6,
            name: '6 tháng'
        },
        {
            value: 9,
            name: '9 tháng'
        },
        {
            value: 12,
            name: '12 tháng'
        },
        {
            value: 24,
            name: '24 tháng'
        },
        {
            value: 36,
            name: '36 tháng'
        },
        {
            value: 1200,
            name: 'Không kỳ hạn'
        }];

    @action
    charge() {
        if (this.amount < 20000) {
            var inform = document.getElementById("snackbar");
            inform.className = "show";
            setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
            inform.innerHTML = "Thông tin không chính xác. Vui lòng kiểm tra và nhập lại.";
        } else {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;

            fetch(`${config.EndPoints.Api.host}/${config.EndPoints.Api.namespace}/test`, {
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bankCardNumber: localStorage.getItem('userBankAccountNumber'),
                    balance: parseFloat(this.amount),
                    term: parseFloat(this.term),
                    depositDate: today + " GMT",
                    itemChosen: 3,
                    rateInterest: 0,
                    isFinalSettlement: true,
                    hasTerm: true
                })
            })
                .then(() => {
                    this.amount = 0;
                    this.transitionToRoute('home');
                });
        }
    }

    @action
    updateValue(event) {
        this.term = event.target.value
    }
}
