export const openMenu = () => {
    const shortBar = document.querySelector('.short-bar');
    const mediumBar = document.querySelector('.medium-bar');
    const longBar = document.querySelector('.long-bar');

    shortBar.classList.toggle('rotate-third-bar');
    mediumBar.classList.toggle('rotate-second-bar');
    longBar.classList.toggle('rotate-first-bar');
}