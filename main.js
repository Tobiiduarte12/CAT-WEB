const tituloModificado = (titulo) => {
	const title = document.getElementById("title");

	title.innerHTML = `${titulo}`;
};

tituloModificado("ahora vamos a modificar todo el html mediante javascript");

const pModificado = (parrafox) => {
	const parrafo = document.getElementsByClassName("parrafo-modificar");
	parrafo.innerHTML = `${parrafox}`;

	console.log(parrafo);
};

const pModificadoNameTwo = () => {
	const parrafox = (lolaxco) => {
		return lolaxco.name
			? console.log(`hola soy tobi`)
			: console.log(`Chau no soy tobi`);
	};
};

const newFunction = () => {
	console.log(`funcion en una linea`);
};

const otherNewFunction = () => {
	return lolalolaoloala;
};

const otherNewNewFunction = () => {
	return (newfuncion = () => {
		console.log(`Funca esto?`);
	});
};

const logfunction = () => {
	console.log(`Hola osy tobiii`);
};

console.log(otherNewFunction);
pModificado("que pasa? se modifica el parrafo o no????");

const mostrarAlert = () => {
	document.getElementsByClassName("btn-enviar");
	return swal(`Oops! no hay nada que enviar`);
};
const novedadesForm = document.getElementById("label-novedades");

novedadesForm.onclick = "alertCart";

const alertCart = () => {
	// document.getElementById("btn-cart")
	return swal("Opps!", "Su carrito está vacío :(", "error");
};

console.dir(novedadesForm);

const formulario = document.getElementById("sec-two-form");

const labelNovedades = document.getElementById("novedades");

console.dir(labelNovedades);

const navHeader = document.getElementsByClassName("nav-header");

console.dir(navHeader);
