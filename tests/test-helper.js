import Application from 'ktbank-fe/app';
import config from 'ktbank-fe/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
