import Route from '@ember/routing/route';

export default class RegisterRoute extends Route {
    model() {
        return {};
    }

    setupController(controller, model) {
        controller.model = model;
    }
}
