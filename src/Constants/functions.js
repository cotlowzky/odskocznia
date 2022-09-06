export const openMenu = () => {
    const menu = document.querySelector("#responsive-menu");
    const menuButton = document.querySelector(".menu-button-wrapper");
    menu.classList.toggle('mobile-menu');
    document.body.classList.toggle('overflow')
    menuButton.classList.toggle('display')
}