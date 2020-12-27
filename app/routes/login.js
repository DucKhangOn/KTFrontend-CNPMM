import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
    model() {
        localStorage.setItem('my_custom_color_petclub', 'rgb(0, 123, 255)');
        return {};
    }

    setupController(controller, model) {
        controller.model = model;
    }
}
