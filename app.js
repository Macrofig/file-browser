import $ from 'jquery';
import can from 'can';

import 'can/map/define/';
import './src/components/file-tree/';
import './src/components/file-view/';

import template from './index.stache';

const AppState = can.Map.extend({
    define: {
        title: {
            type: 'string',
            value: 'PDF Search'
        }
    }
});

$('#app').html(template(new AppState({})));
