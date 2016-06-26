import can from 'can';
import template from './file-tree.stache!';
// import './file-tree.less!';
import ViewModel from './file-tree.viewmodel';

export default can.Component.extend({
    tag: 'can-file-tree',
    template: template,
    viewModel: ViewModel
});
