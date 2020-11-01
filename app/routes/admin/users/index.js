import Route from '@ember/routing/route';

export default class AdminUsersIndexRoute extends Route {
    model() {
        return this.store.findAll('user');
    }
}
