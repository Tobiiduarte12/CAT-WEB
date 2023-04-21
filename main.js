const tituloModificado = (titulo) => {
    const title = document.getElementById("title")

    title.innerHTML = `${titulo}`
}

tituloModificado("ahora vamos a modificar todo el html mediante javascript")

const pModificado = (parrafox) => {
    const parrafo = document.getElementsByClassName("parrafo-modificar")
    parrafo.innerHTML = `${parrafox}`

    console.log(parrafo);
}

pModificado("que pasa? se modifica el parrafo o no????")



const mostrarAlert = () => {
    document.getElementsByClassName("btn-enviar");
    return swal(`Oops! no hay nada que enviar`)
}

const alertCart = () => {
    document.getElementById("btn-cart")
    return swal('Opps!', 'Su carrito está vacío :(', 'error')
}

