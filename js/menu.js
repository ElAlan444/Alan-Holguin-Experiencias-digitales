document.addEventListener('DOMContentLoaded', function () {
    // 1. Seleccionar los elementos clave del DOM
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body; // Para prevenir el scroll al abrir el menú

    // 2. Definir la función que se ejecuta al hacer clic
    hamburger.addEventListener('click', () => {
        // Toggle la clase 'active' para mostrar/ocultar los enlaces
        navLinks.classList.toggle('active');
        
        // Toggle la clase 'open' para animar el icono de hamburguesa
        hamburger.classList.toggle('open'); 

        // Opcional: Deshabilitar el scroll del body cuando el menú está abierto
        body.classList.toggle('no-scroll');
    });
});