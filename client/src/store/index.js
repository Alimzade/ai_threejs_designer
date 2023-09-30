import {proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#158009',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './pyramids-white.png',
    fullDecal: './full.jpg',
});

export default state;