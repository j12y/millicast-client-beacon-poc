import { writable } from 'svelte/store';
 
const SelectedStream = writable([
  {},
]);
 
export default SelectedStream;