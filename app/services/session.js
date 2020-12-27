import Service, { inject as service } from '@ember/service';
import config from '../config/environment';

const USER_TOKEN = 'userToken';
const USER_ID = 'userId';

export default class SessionService extends Service {
    @service store;

    async login(email, password) {
        const login = await fetch(`${config.EndPoints.Api.host}/${config.EndPoints.Api.namespace}/users/login`, {
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
        if (userToken.user) {
            console.log(userToken.user);
            localStorage.setItem('userName', userToken.user.firstName);
            localStorage.setItem(USER_TOKEN, userToken.token);
            localStorage.setItem(USER_ID, userToken.user.id);
            localStorage.setItem('userRole', userToken.user.isAdmin);
            this.store.adapterFor('user').getBankAccount(localStorage.getItem('userId')).then((res) => {
                localStorage.setItem('userBankAccountNumber', res.bankAccount.bankCardNumber);
            });
            return localStorage.getItem(USER_ID);
        }

        return;
    }

    isLogin() {
        return (localStorage.getItem(USER_TOKEN));
    }

    isAdmin() {
        return (localStorage.getItem('userRole'));
    }

    logout() {
        localStorage.removeItem(USER_TOKEN);
        localStorage.removeItem(USER_ID);
        localStorage.removeItem('userBankAccountNumber');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userOTP');
        localStorage.removeItem('userForgotEmail');
    }
}
