import Controller from '../../controllers/submit';

export default class InfoUserInfoController extends Controller {
    validate() {
        var self = this;

        if ((self.model.email == undefined || self.model.email == 'undefined') ||
            (self.model.password == undefined || self.model.password == 'undefined'))
            return false;
        return true;
    }

    transitionToParent() {
        this.transitionToRoute('home');
    }
}
