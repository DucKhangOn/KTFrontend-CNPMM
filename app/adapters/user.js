import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
    register(newUser) {
        let baseUrl = this.buildURL('users');
        return this.ajax(`${baseUrl}/register`, 'POST', {data: newUser})
    }

    getUser(id) {
        let baseUrl = this.buildURL('users');
        return this.ajax(`${baseUrl}/${id}`, 'GET')
    }

    getBankAccount(UserId) {
        let baseUrl = this.buildURL('bankAccounts');
        return this.ajax(`${baseUrl}/info/${UserId}`, 'GET');
    }

    forgot(email) {
        let baseUrl = this.buildURL('');
        return this.ajax(`${baseUrl}/testMail`, 'POST', {data: email})
    }

    changePassword(newPassword) {
        let baseUrl = this.buildURL('');
        return this.ajax(`${baseUrl}/testChangePassword`, 'POST', {data: newPassword})
    }
}
