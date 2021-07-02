var pos = document.documentElement;
var h2 = document.querySelector('h2');
var left = h2.getBoundingClientRect().left;
var top = h2.getBoundingClientRect().top;
var right = h2.getBoundingClientRect().right;


pos.addEventListener('mousemove', e => {
	pos.style.setProperty('--x', e.clientX + 'px');
	pos.style.setProperty('--y', e.clientY + 'px');
})