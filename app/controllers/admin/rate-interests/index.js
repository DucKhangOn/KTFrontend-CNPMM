import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminRateInterestsIndexController extends Controller {
    @service session;

    @action
    addRateInterest() {
        this.transitionToRoute('admin.rate-interests.rate-interest', 'null');
    }

    @action
    delete(item) {
        item.destroyRecord();
        location.reload();
    }
}
