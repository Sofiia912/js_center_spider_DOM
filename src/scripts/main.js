'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWH = wall.clientWidth;

const spiderWH = spider.offsetWidth;

const centered = (wallWH - spiderWH) / 2;

spider.style.left = `${centered}px`;
spider.style.top = `${centered}px`;
