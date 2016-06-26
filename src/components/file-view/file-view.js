import can from 'can';
import template from './file-view.stache!';
// import './file-tree.less!';
import ViewModel from './file-view.viewmodel';

export default can.Component.extend({
    tag: 'can-file-view',
    template: template,
    viewModel: ViewModel
});
