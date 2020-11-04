import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
    @service session;
    
    host = 'http://localhost:5000';
    namespace = 'api';
}
