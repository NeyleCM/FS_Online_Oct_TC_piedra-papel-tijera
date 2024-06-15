//Nuestros código
//Declaramos 3 variables para capturar los resultados y una para diferenciar cada botón sobre el que clickamos

let jugador = 0;
let pc = 0;
let botones = document.querySelectorAll('.boton-jugada')

//Hacemos forEach y utilizamos funciones arrow para añadir el eventListener a cada botón y con getAttribute sabemos cuál ha sido. También llamamos a la función jugada que trabaja con el parámetro eleccionUsuario.

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const eleccionUsuario = boton.getAttribute('data-jugada');
        jugada(eleccionUsuario);
    });
});

//En esta función primero sacamos la jugada random del ordenador. A continuación, comparamos esa jugada con la nuestra, que ya viene dada 
//por la variable elecionUsuario, y decidimos si ganamos o perdemos. Dependiendo de la jugada añadimos un sumatorio a nuestro favor o el del ordenador.
//Utilizamos getElementById y textContent para mostrar y cambiar el resultado y las puntuaciones con un mensaje concatenado.

function jugada(eleccionUsuario) {
    let opciones = ['Piedra 🪨', 'Papel 📋', 'Tijera ✂️'];
    let eleccionOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
    let resultado = '';

    if (eleccionOrdenador === eleccionUsuario) {
        resultado = 'Empate. ¡WOW!';
    } else if (
        (eleccionOrdenador === 'Piedra 🪨' && eleccionUsuario === 'Papel 📋') ||
        (eleccionOrdenador === 'Papel 📋' && eleccionUsuario === 'Tijera ✂️') ||
        (eleccionOrdenador === 'Tijera ✂️' && eleccionUsuario === 'Piedra 🪨')
    ) {
        resultado = 'Has ganado 😁 ' + eleccionUsuario + ' vence.';
        jugador++;
        
    } else {
        resultado = 'Has perdido 🫠 ' + eleccionOrdenador + ' te gana.'; 
        pc++;
    }
    document.getElementById('resultados').textContent = resultado;
    document.getElementById('contador-usuario').textContent = 'Tu puntuacion es ' + jugador + '.';
    document.getElementById('contador-ordenador').textContent = 'La puntuación de la IA es ' + pc + '.';
}



