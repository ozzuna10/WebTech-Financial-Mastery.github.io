// Función para manejar el menú responsivo
function toggleResponsiveMenu() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('nav-main');
    nav.classList.toggle('responsive');
}

// Event listener para el icono de navegación responsivo
document.getElementById('icono-nav').addEventListener('click', function() {
    toggleResponsiveMenu();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada

    // Validación de campos
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Envío del formulario usando Fetch API
    fetch('https://formspree.io/f/mwpekdpo', {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm')),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('¡Formulario enviado con éxito!');
            document.getElementById('contactForm').reset(); // Reinicia el formulario después de enviarlo
        } else {
            alert('Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.');
        }
    }).catch(error => {
        alert('Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.');
    });
});
