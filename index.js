const mobileAccordion = document.querySelector('.mobile-nav');

mobileAccordion.addEventListener('click', () => {
    const menu = document.querySelector('#top-nav');
    const menuState = menu.style.visibility;
    return !menuState || menuState === "hidden" ? menu.style.visibility = "visible" : menu.style.visibility = "hidden";
});