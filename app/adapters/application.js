import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';
import config from '../config/environment';

export default class ApplicationAdapter extends RESTAdapter {
    @service session;

    host = config.EndPoints.Api.host;
    namespace = config.EndPoints.Api.namespace;
}
