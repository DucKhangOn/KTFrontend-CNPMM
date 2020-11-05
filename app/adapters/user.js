import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
    register(newUser) {
        let baseUrl = this.buildURL('users');
        return this.ajax(`${baseUrl}/register`, 'POST', {data: newUser})
    }
}
