import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RegisterController extends Controller {
    @service session; 

    @action
    async register() {
        var user = {email: 'test2', password: '123456'}
        const login = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        });
        var token = await login.json()
        console.log(token.token);
    }

    @action
    async getUsers() {
        var users = this.model;
        users.forEach(element => {
            console.log(element.email);
            console.log(element.password);
        });
        var x = await this.session.getUser();
        console.log('Current user is ' + x.email);
    }

    @action
    logout() {
        this.session.logout();
        this.transitionToRoute('login');
    }
}
