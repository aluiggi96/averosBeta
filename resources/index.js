// Funciones para cambiar entre el listado de multimedia disponible y de proximos
const botonDisponibles = document.querySelector(".botonDisponibles")
const botonProximos = document.querySelector(".botonProximos")

botonDisponibles.addEventListener('click', mostraListaDisponibles)
botonProximos.addEventListener('click', mostrarListaProximos)

function mostraListaDisponibles() {
    botonDisponibles.classList.add('botonActivo')
    botonProximos.classList.remove('botonActivo')
}

function mostrarListaProximos() {
    botonProximos.classList.add('botonActivo')
    botonDisponibles.classList.remove('botonActivo')
}