/* ===========================
   Muhayya - Shared Site Script
   Mobile Navigation Menu
=========================== */

document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('header nav');
    const mobileNav = document.getElementById('mobileNav');
    const toggle = document.getElementById('menuToggle');

    if (nav && mobileNav) {
        mobileNav.innerHTML = nav.innerHTML;
    }

    if (toggle && mobileNav) {

        toggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            toggle.classList.toggle('active');
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                toggle.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) {
                mobileNav.classList.remove('open');
                toggle.classList.remove('active');
            }
        });

    }

});
