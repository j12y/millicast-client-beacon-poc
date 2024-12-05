import { writable } from 'svelte/store';

export const protocol = writable("RTMP");
export const mbr = writable(false);


export let showGuide = writable(false);


