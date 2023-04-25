const h2Cambiar = document.querySelector("#title-h2");
const mostrarNigga = document.querySelector(".text-body");

const mostrarImagen = () => {
	mostrarNigga.classList.toggle("mostrar");
};

h2Cambiar.addEventListener("click", mostrarImagen);

const michiCambiar = document.querySelector("#michiCambiar");
const btnCambiar = document.querySelector("#btn-Cambiar-Michi");

btnCambiar.addEventListener("click", () => {
	michiCambiar.src = `./assets/imgs/michi${Math.floor(Math.random() * 20)}.jpg`;
});

const btnCambiarMemoide = document.querySelector("#cambiarMemoide");
const imgMemoide = document.querySelector("#memoide");

btnCambiarMemoide.addEventListener("click", () => {
	imgMemoide.src = `./assets/imgs-memes-michis/meme${Math.floor(
		Math.random() * 6
	)}.jpeg`;
});

const inputUsername = document.querySelector("#inputUsername");
const inputPassword = document.querySelector("#inputPass");
const inputEmail = document.querySelector("#inputEmail");
const btnForm = document.querySelector("#btnForm");

function selectFocus() {
	this.classList.toggle("select-Focus");
}

inputUsername.addEventListener("focus", selectFocus);
inputUsername.addEventListener("blur", selectFocus);
inputPassword.addEventListener("focus", selectFocus);
inputPassword.addEventListener("blur", selectFocus);
inputEmail.addEventListener("focus", selectFocus);
inputEmail.addEventListener("blur", selectFocus);
