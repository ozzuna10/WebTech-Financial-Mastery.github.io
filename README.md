<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="stile.css"/>
    <!-- En el head del HTML -->
    <script src="script.js"></script>
    <title>Portafolio de Malik Chavez</title>
</head>
<body> 
    <!-- Seccion de inicio-->
    <section id="inicio">
        <div class="contenido">
            <header>
                <div class="contenido-header">
                    <h1>/MG/</h1>
                    <nav id="nav" class="">
                        <ul>
                            <li><a href="#inicio" class="seleccionado" onclick="seleccionar(this)">Inicio</a></li>
                            <li><a href="#Sobremi" onclick="seleccionar(this)">Sobre mi</a></li>
                            <li><a href="#servicios" onclick="seleccionar(this)">Servicios</a></li>
                            <li><a href="#Portafolio" onclick="seleccionar(this)">Portafolio</a></li>
                            <li><a href="#contacto" onclick="seleccionar(this)">Contacto</a></li>
                            <li><a href="#skill" onclick="seleccionar(this)">Habilidades</a></li>
                            <li><a href="#aprender" onclick="seleccionar(this)">Habilidades por aprender</a></li>
                        </ul>
                    </nav>
                    <!-- Iconos del menu responsive-->
                    <div id="icono-nav" onclick="responsiveMenu()">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <!-- Icono de las redes sociales-->
                    <div class="redes">
                        <a href="https://www.facebook.com/veritto.chavez.7/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/malikofficialok/"><i class="fa-brands fa-instagram" target="_blank"></i></a>
                    </div>
                </div>
            </header>
            <div class="presentacion">
                <p class="bienvenida">Bienvenida</p>
                <h2> Hola soy Malik Khadin Gadiaga Chavez, Desarrollador web</h2>
                <p class="descripcion">¡Bienvenidos a mi mundo digital! Exploro la belleza de la web a través del desarrollo front-end. ¡Sumérgete en mi portafolio y descubre cómo transformo ideas en experiencias cautivadoras! 🚀✨</p>
                <a href="Portafolio">Ir al portafolio</a>
            </div>
        </div>
    </section>
    <!-- Seccion sobre mi -->
    <section id="Sobremi">
        <div class="contenedor-foto">
            <img src="imagenes/IMG-20200825-WA0403.jpg"/>
        </div>
        <div class="contenedor-texto">
            <h2 class="titulo-seccion">Sobre mi</h2>
            <h3>Hola, soy <span>Malik Khadim Gadiaga Chavez</span></h3>
            <h4>Desarrollador web front end</h4>
            <p>¡Hola! Soy un desarrollador web front-end apasionado por crear experiencias cautivadoras en sitios y juegos. Además de mi amor por la tecnología, disfruto conversar sobre economía, política social y jugar deportes como el básquet y juegos virtuales. Aunque soy introvertido, siempre estoy abierto a hacer nuevos amigos. ¡Explora mi mundo digital donde la tecnología y la pasión se encuentran! 🚀🎮</p>
        </div>
    </section>
    <!-- Seccion de servicios -->
    <seccion id="servicios">
        <h3 class="titulo-seccion" > Mis servicios</h3>
        <div class="fila">
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-code"></i></span>
                <h4>Optimización de Rendimiento Web</h4>
                <hr>
                <ul class="servicios-tag">
                    <li>web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p> "Mejoraré la velocidad de carga de tu sitio web para que tus visitantes tengan una experiencia más rápida y placentera. Trabajaré en la optimización del código para que tu sitio se destaque, cargue más rápido y deje una impresión duradera."</p>

            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-code"></i></span>
                <h4>Desarrollo de Interfaz de Usuario (UI)</h4>
                <hr>
                <ul class="servicios-tag">
                    <li>web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p> "Diseñaré y desarrollaré una interfaz de usuario visualmente atractiva y fácil de usar. Mi enfoque es crear componentes que no solo se vean bien, sino que también hagan que la interacción con tu sitio sea sencilla y agradable."</p>
            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-code"></i></span>
                <h4>Adaptación Mobile-First</h4>
                <hr>
                <ul class="servicios-tag">
                    <li>web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p> "Aseguraré que tu sitio no solo sea atractivo en computadoras, sino que también proporcione una experiencia excepcional en dispositivos móviles. Implementaré estrategias de diseño para que tu contenido brille en todas las pantallas, llegando a más usuarios."</p>
                
            </div>
        </div>
        <div class="fila">
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-code"></i></span>
                <h4>Implementación de Animaciones Sutiles</h4>
                <hr>
                <ul class="servicios-tag">
                    <li>web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>"Añadiré un toque de vida a tu sitio con animaciones y detalles interactivos que cautivarán a tus visitantes. Utilizaré técnicas modernas de CSS y JavaScript para crear transiciones suaves y microinteracciones que hagan que tu sitio se destaque."</p>
            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-code"></i></span>
                <h4>Integración de APIs Externas</h4>
                <hr>
                <ul class="servicios-tag">
                    <li>web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p>"Ampliaré las capacidades de tu sitio web integrando datos y servicios externos. Esto te permitirá mostrar información actualizada en tiempo real, como redes sociales o datos relevantes de terceros, brindando a tus usuarios contenido fresco y atractivo."</p>
                
            </div>
            <div class="servicio">
                <span class="icono"><i class="fa-solid fa-code"></i></span>
                <h4>Mantenimiento y Actualizaciones</h4>
                <hr>
                <ul class="servicios-tag">
                    <li>web</li>
                    <li>Graphic</li>
                    <li>SEO</li>
                </ul>
                <p> "Me encargaré del mantenimiento regular de tu sitio web para que siempre esté en óptimas condiciones. Realizaré actualizaciones periódicas para asegurarme de que esté al día con las últimas tecnologías y prácticas de seguridad, garantizando un rendimiento constante."</p>
                
            </div>
        </div>
    </seccion> 

    <!-- Seccion de habilidades -->
    <div class="contenedor-skill" id="skill">
        <h3>Habilidades</h3>
        <div class="skill">
            <div class="info">
                <p><span class="lista"></span>HTML y CSS</p>
                <span class="porcentaje">95%</span>
            </div>
            <div class="barra">
                <div id="html" class="barra-porcentaje1"></div>
            </div>
        </div>

        <div class="skill">
            <div class="info">
                <p><span class="lista"></span>Java Script</p>
                <span class="porcentaje">50%</span>
            </div>
            <div class="barra">
                <div id="js" class="barra-porcentaje2"></div>
            </div>
        </div>
    </div>

<!-- Habilidades por aprender -->
    <section class="contenedor-aprender" id="aprender">
        <h3>Habilidades por aprender</h3>
        <div class="hlidad">
            <div class="hlb">
                <h4 class="herramientas">Angular</h4>
                <img src="imagenes/angular.jpg">
            </div>
        </div>

        <div class="hlidad">
            <div class="hlb">
                <h4 class="herramientas">React</h4>
                <img src="imagenes/React.jpg">
            </div>
        </div>

        <div class="hlidad">
            <div class="hlb">
                <h4 class="herramientas">Python</h4>
                <img src="imagenes/python.jpg">
            </div>
        </div>
    </section>

<!-- Seccion de portafolio-->
    <section id="Portafolio">
        <h3 class="titulo-seccion">Mis Proyectos</h3>
        <div class="fila">
            <a href="blog de anime/blog de anime.html" target="_blank" class="proyecto">
                <div class="overlay"></div>
                <img src="imagenes/Proyecto 1.jpg" alt="">
                <div class="info">
                    <h4>Mundo anime</h4>
                    <h5>Descripcion del Trabajo</h5>
                    <p>"Explora el emocionante mundo del anime en [Mundo anime]. Noticias, análisis y curiosidades de tus personaj. ¡Únete a la aventura anime ahora!"</p>
                </div>
            </a>
            <a href="Nueva carpeta/Juego dino nadando.html" target="_blank" class="proyecto">
                <div class="overlay"></div>
                <img src="imagenes/proyecto2.jpg" alt="">
                <div class="info">
                    <h4>Juego divertido</h4>
                    <h5>Descripcion del Juego</h5>
                    <p>"¡Bienvenido a [Juego Dino Nadando]! Sumérgete en una experiencia única con mi emocionante juego web. Desafíos, diversión y entretenimiento te esperan. ¡Únete y comienza la aventura ahora!"</p>
                </div>
            </a>
            <a href="peluqueria/sitio simple.html" target="_blank" class="proyecto">
                <div class="overlay"></div>
                <img src="imagenes/Barberia.jpg" alt="">
                <div class="info">
                    <h4>Sitio web de peluqueria</h4>
                    <h5>Descripcion del Trabajo</h5>
                    <p>Este es el sitio de una peluqueria de un vecino amigo mio</p>
                </div>
            </a>
            <a href="reloj/Reloj digital.html" target="_blank" class="proyecto">
                <div class="overlay"></div>
                <img src="imagenes/Reloj.jpg" alt="">
                <div class="info">
                    <h4>Reloj Digital </h4>
                    <h5>Descripcion del Proyecto</h5>
                    <p>Desarrollé un reloj digital interactivo utilizando JavaScript para proporcionar la hora actual de manera precisa.</p>
                </div>
            </a>
            <a href="imagen/galeria de imagenes.html" target="_blank" class="proyecto">
                <div class="overlay"></div>
                <img src="imagenes/proyecto 4.jpg" alt="">
                <div class="info">
                    <h4>Galería de Imagenes</h4>
                    <h5>Descripcion del Proyecto</h5>
                    <p>Esta es una galeria de fotos muy inpresionante espero que le guste </p>
                </div>
            </a>
        </div>
    </section>

    <!-- Seccion footer-->
    <footer id="contacto">
        <h3>Mis formas de Contacto</h3>
            <!-- Icono de las redes sociales-->
                <div>
                    <a href="https://www.facebook.com/veritto.chavez.7/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/malikofficialok/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <p>Correo: malikkhadimgadiagachavez@gmail.com</p>
                </div>
    </footer>

    <script src="script.js"></script>
</body>
</html> 
