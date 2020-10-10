import Route from '@ember/routing/route';

export default class RegisterRoute extends Route {
    async model() {
        return this.store.query('user', {});
    }

    setupController(controller, model) {
        controller.model = model;
    }
}
