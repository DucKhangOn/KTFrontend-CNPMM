import Controller from '../../../controllers/submit';

export default class AdminRateInterestsRateInterestController extends Controller {
    validate() {
        var self = this;

        if ((self.model.term == undefined || self.model.term == 'undefined' || self.model.term == '') ||
            (self.model.rateInterest == undefined || self.model.rateInterest == 'undefined' || self.model.rateInterest == '') ||
            (self.model.day == undefined || self.model.day == 'undefined' || self.model.day == '') ||
            (self.model.month == undefined || self.model.month == 'undefined' || self.model.month == '') ||
            (self.model.year == undefined || self.model.year == 'undefined' || self.model.year == ''))
            return false;
        return true;
    }

    transitionToParent() {
        this.transitionToRoute('admin.rate-interests');
    }
}
