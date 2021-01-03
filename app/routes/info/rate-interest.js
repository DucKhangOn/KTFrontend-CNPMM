import Route from '@ember/routing/route';

export default class InfoRateInterestRoute extends Route {
    model() {
        return this.store.findAll('rate-interest');
    }
}
