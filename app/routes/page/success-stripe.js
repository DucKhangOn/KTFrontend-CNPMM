import Route from '@ember/routing/route';
import config from '../../config/environment';

export default class PageSuccessStripeRoute extends Route {
    queryParams = {
        amount: {},
        bankCardNumber: {}
    };

    async model(params) {
        console.log(params);
        return await fetch(`${config.EndPoints.Api.host}/${config.EndPoints.Api.namespace}/success-stripe`, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: params.amount,
                bankCardNumber: params.bankCardNumber
            })
        });
    }
}
