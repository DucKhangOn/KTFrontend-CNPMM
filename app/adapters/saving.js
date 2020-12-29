import ApplicationAdapter from './application';

export default class SavingAdapter extends ApplicationAdapter {
    getSavingBooks(bankCardNumber) {
        let baseUrl = this.buildURL('');
        return this.ajax(`${baseUrl}/savingBooksByBankCardNumber/${bankCardNumber}`, 'GET');
    }

    getSavingBookById(id) {
        let baseUrl = this.buildURL('');
        return this.ajax(`${baseUrl}/savingBooksById/${id}`, 'GET');
    }

    getReview(data) {
        let baseUrl = this.buildURL('');
        return this.ajax(`${baseUrl}/testSavingCardReview`, 'POST', {data: data});
    }

    getAllInfoSaving(data) {
        let baseUrl = this.buildURL('');
        return this.ajax(`${baseUrl}/getAllInfo`, 'POST', {data: data});
    }

    finalSettlement(data) {
        let baseUrl = this.buildURL('');
        return this.ajax(`${baseUrl}/testSavingCard`, 'POST', {data: data});
    }
}
