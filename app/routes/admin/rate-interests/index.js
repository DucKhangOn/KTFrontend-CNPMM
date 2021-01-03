import Route from '@ember/routing/route';

export default class AdminRateInterestsIndexRoute extends Route {
    model() {
        return this.store.findAll('rate-interest');
    }
}
