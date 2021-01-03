import Route from '@ember/routing/route';

export default class AdminRateInterestsRateInterestRoute extends Route {
    model(params) {
        if (params.rateInterest_id == null || params.rateInterest_id == 'null')
            return this.store.createRecord('rate-interest', {});

        return this.store.findRecord('rate-interest', params.rateInterest_id);
    }
}
