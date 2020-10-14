import Service, { inject as service } from '@ember/service';

const USER_TOKEN = 'userToken';
const USER_ID = 'userId';

export default class SessionService extends Service {
    @service store;

    async login(email, password) {
        const login = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        var userToken = await login.json()
        localStorage.setItem(USER_TOKEN, userToken.token);
        localStorage.setItem(USER_ID, userToken.user.id);
        return localStorage.getItem(USER_ID);
    }

    isLogin() {
        return (localStorage.getItem(USER_TOKEN))
    }

    logout() {
        localStorage.removeItem(USER_TOKEN);
        localStorage.removeItem(USER_ID);
    }

    async getUser() {
        const user = await fetch(`http://localhost:5000/api/users/${localStorage.getItem(USER_ID)}`);
        var x = await user.json();
        return x.user;
    }
}
