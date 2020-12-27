import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SubmitController extends Controller {
    @action
    submit() {
        var self = this;

        console.log("validate " + this.validate());

        if (!this.validate()) {
            self.model.rollbackAttributes();
            self.transitionToParent();
        } else {
            self.model.save();
            self.cancel();
        }
    }

    @action
    cancel() {
        if ((typeof this.model.rollbackAttributes) == 'function') {
            this.model.rollbackAttributes();
        }

        this.transitionToParent();
    }

    validate() {
        return true;
    }

    transitionToParent() {
        this.transitionToRoute('home');
    }
}
