import { writable } from 'svelte/store';
 
const ToolTipStore = writable({
    'title': '',
    'body': [],
    'more': '',
});
 
export default ToolTipStore;