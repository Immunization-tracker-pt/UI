const mobileAccordion = document.querySelector('.mobile-nav');
const menu = document.querySelector('#top-nav');
const menuState = () => menu.style.visibility;

mobileAccordion.addEventListener('click', () => {

    return !menuState() || menuState() === "hidden" ? menu.style.visibility = "visible" : menu.style.visibility = "hidden";
});


[document.querySelector('main'), document.querySelector('footer')].forEach(node => {
    node.addEventListener('click', () => {
        if(!menuState() || menuState() === 'visible') menu.style.visibility = "hidden";
        return;
    });
})