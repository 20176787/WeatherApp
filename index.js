/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React, {setGlobal} from 'reactn';
import {name as appName} from './app.json';
setGlobal({
    main:'',
    description:'',
    temp:'',
    icon:'',
});
AppRegistry.registerComponent(appName, () => App);
