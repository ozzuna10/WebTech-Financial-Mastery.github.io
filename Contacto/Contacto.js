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


// Función para validar y enviar el formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    // Validación de campos (puedes agregar más validaciones según necesites)
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Aquí puedes agregar código para enviar el formulario (por ejemplo, mediante AJAX)
    // En este ejemplo, simplemente mostramos una alerta de éxito
    alert('¡Formulario enviado con éxito!');
    document.getElementById('contactForm').reset(); // Reinicia el formulario después de enviarlo
});
