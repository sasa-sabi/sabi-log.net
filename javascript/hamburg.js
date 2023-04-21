window.onload = function () {
    var hamburger = document.getElementById('js-hamburger');
    var nav = document.getElementById('js-nav');

    hamburger.addEventListener('click', function () {
		hamburger.classList.toggle('active_1');
		nav.classList.toggle('active');
    });
};