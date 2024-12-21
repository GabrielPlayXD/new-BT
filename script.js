/* Transição de opacidade da header */
const header = document.querySelector('header');



window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; 
    const windowHeight = window.innerHeight; 

    const headerOpacity = Math.max(1 - scrollPosition / 300, 0);
    const imgOpacity = Math.max(1 - scrollPosition / 500, 0); 

    header.style.opacity = headerOpacity;

});
