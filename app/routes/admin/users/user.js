import Route from '@ember/routing/route';

export default class AdminUsersUserRoute extends Route {
    model(params) {
        if (params.user_id == null || params.user_id == 'null')
            return this.store.createRecord('user', {});

        return this.store.findRecord('user', params.user_id);
    }
}
