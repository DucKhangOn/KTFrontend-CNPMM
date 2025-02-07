import Route from '@ember/routing/route';
import config from '../../config/environment';

export default class PageSuccessRoute extends Route {
    queryParams = {
        amount: {},
        bankCardNumber: {},
        paymentId: {},
        PayerID: {},
        token: {}
    };

    async model(params) {
        console.log(params);
        return await fetch(`${config.EndPoints.Api.host}/${config.EndPoints.Api.namespace}/success`, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: params.amount,
                bankCardNumber: params.bankCardNumber,
                paymentId: params.paymentId,
                PayerID: params.PayerID,
                token: params.token
            })
        });
    }
}
