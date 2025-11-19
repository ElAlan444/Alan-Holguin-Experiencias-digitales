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


// --- FUNCIONALIDAD DEL BANNER DE COOKIES ---

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const cookieName = 'cookieAccepted';

    // Función para verificar si la cookie ya existe
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Función para establecer la cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    // Comprobar si la cookie ha sido aceptada
    if (!getCookie(cookieName)) {
        // Si no existe la cookie, mostramos el banner
        if (cookieBanner) {
             cookieBanner.classList.remove('hidden');
             cookieBanner.style.display = 'flex'; // Usamos flex para mostrarlo
        }
    }

    // Manejar el clic en el botón de aceptar
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Establecer la cookie por 365 días (un año)
            setCookie(cookieName, 'true', 365); 
            
            // Ocultar el banner
            if (cookieBanner) {
                cookieBanner.classList.add('hidden');
            }
        });
    }
});