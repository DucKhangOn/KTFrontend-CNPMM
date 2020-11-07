import Route from '@ember/routing/route';

export default class PageSuccessRoute extends Route {
    queryParams = {
        paymentId: {},
        PayerID: {},
        token: {}
      };

    // async model(params) {
    //     return await fetch('http://localhost:5000/api/success', {
    //         method: 'POST',
    //         mode: 'cors',
    //         redirect: 'follow',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             paymentId: params.paymentId,
    //             PayerID: params.PayerID,
    //             token: params.token
    //         })
    //     });
    // }

    async model() {
        return await fetch('http://localhost:5000/api/stripe').then(response => response.json())
        .then((data) => {
            console.log(data);
        });
    }
}
