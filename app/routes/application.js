import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service session;

    redirect() {
        var current = window.location.href;
        if ((this.session.isLogin() == null || this.session.isLogin() == 'null') && current != "http://localhost:4200/forgot-password") {
            console.log(this.session.isLogin())
            this.transitionTo('login');
            return;
        }
    }
}
