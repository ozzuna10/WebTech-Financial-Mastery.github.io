//funcion que se aplica al estil a la opcion seleccionada en el menu y quita la previamente seccionado
function selecionar(link) {
    var opciones = document.querySelectorALL('#link a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    opciones[6].className = "";
    link.className = "seleccionado"

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = ""
}
//funcioon que muestrea el menu de navegacion
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//dectecto el scrolling para solucionar la animacionde las barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skill");
    var distancia_skills = window.innerHeight - skills.getBoundingClientReact().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progresol");
        document.getElementById("JS").classList.add("barra-progreso2");
    }
}