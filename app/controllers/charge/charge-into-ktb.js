import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import config from '../../config/environment';

export default class ChargeChargeIntoKtbController extends Controller {
    @tracked typePayment;
    @tracked amount;

    payments = [
        {
            value: 'Paypal',
            name: 'Paypal'
        },
        {
            value: 'Stripe',
            name: 'Stripe'
        }];

    @action
    charge() {
        if (this.amount < 20000) {
            var inform = document.getElementById("snackbar");
            inform.className = "show";
            setTimeout(() => { inform.className = inform.className.replace("show", ""); }, 3000);
            inform.innerHTML = "Thông tin không chính xác. Vui lòng kiểm tra và nhập lại.";
        } else {
            fetch(`${config.EndPoints.Api.host}/${config.EndPoints.Api.namespace}/paypal`, {
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bankCardNumber: localStorage.getItem('userBankAccountNumber'),
                    amount: parseFloat(this.amount)
                })
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    window.location.href = data.link;
                });
        }
    }

    @action
    updateValue(event) {
        this.typePayment = event.target.value;
    }
}
