export const openMenu = () => {
    const menu = document.querySelector("#responsive-menu");
    menu.classList.toggle('mobile-menu');
    console.log(menu.classList);
    document.body.classList.toggle('overflow')
    menu.classList.toggle('mobile-menu-height');
}