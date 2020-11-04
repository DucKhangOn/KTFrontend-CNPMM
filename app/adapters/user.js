import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
    async register(newUser) {
        let baseUrl = this.buildURL('users');
        var res = await this.ajax(`${baseUrl}/register`, 'POST', {data: newUser})
        return res.user;
    }
}
