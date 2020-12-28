import Route from '@ember/routing/route';

export default class ChangePasswordRoute extends Route {
    model() {
        return {};
    }

    setupController(controller, model) {
        controller.model = model;
    }
}
