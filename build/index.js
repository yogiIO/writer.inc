window.addEventListener('scroll', onPageScroll)
function onPageScroll() {
    const navElement = document.getElementById('#navbar');
    const navMobileElement = document.getElementById('#navbar-mobile');
    if (window.scrollY > 0) {
        navElement.classList.add('nav-animate-scroll')
        navMobileElement.classList.add('nav-animate-scroll')
    }
    else {
        navElement.classList.remove('nav-animate-scroll')
        navMobileElement.classList.remove('nav-animate-scroll')
    }
}
function handleMobileNavbar() {
    const body = document.querySelector("body")
    body.classList.add('custom-overflow')
    const mobileNavElement = document.getElementById('#mobile-navbar');
    mobileNavElement.classList.add('nav-toggler')
}
function handleCloseMobileNav() {
    const body = document.querySelector("body")
    body.classList.remove('custom-overflow')
    const mobileNavElement = document.getElementById('#mobile-navbar');
    mobileNavElement.classList.remove('nav-toggler')
}