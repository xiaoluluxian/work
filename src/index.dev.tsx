/**
 * @overview generated by ghoti-cli
 * @fileoverview Development build entry
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Hello from './root/hello';
import Config from './config/config';

import './style/global.sass';

declare const module: any;
declare const require: any;

const render = (App: any) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('container'));
};

render(Hello);
if (module.hot) {
    module.hot.accept('./root/hello', () => {
        render(require('./root/hello').default);
    });
}
