import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ChargeChargeIntoKtbController extends Controller {
    @action
    charge() {
        fetch('http://localhost:5000/api/paypal')
            .then(response => response.json())
            .then((data) => {
                console.log(data.link);
                window.location.href = this.link;
            });
    }
}
