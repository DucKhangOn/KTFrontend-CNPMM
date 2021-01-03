import Route from '@ember/routing/route';

export default class InfoUserInfoRoute extends Route {
    model() {
        return this.store.findRecord('user', localStorage.getItem('userId'));
    }
}
