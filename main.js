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
const formularioAEnviar = document.querySelector("#form");

function selectFocus() {
	this.classList.toggle("select-Focus");
}

inputUsername.addEventListener("focus", selectFocus);
inputUsername.addEventListener("blur", selectFocus);
inputPassword.addEventListener("focus", selectFocus);
inputPassword.addEventListener("blur", selectFocus);
inputEmail.addEventListener("focus", selectFocus);
inputEmail.addEventListener("blur", selectFocus);

const btnSubmit = (e) => {
	e.preventDefault();
	console.log(inputUsername.value);
	console.log(inputEmail.value);
	console.log(inputPassword.value);
	formularioAEnviar.reset();
};

formularioAEnviar.addEventListener("submit", btnSubmit);

// ***** to do list *****

const formTask = document.querySelector(".formSect5");
const inputTask = document.querySelector(".input-task");
const btnAdd = document.querySelector("#btnAddTask");
const taskList = document.querySelector(".listTasks");
const btnDeleteAll = document.querySelector("#btnDeleteTask");

let tasks = []; // array vacío para guardar las tareas

// funcion para agregar tareas
function addTask(e) {
	e.preventDefault();
	const taskName = inputTask.value.trim();
	if (taskName.length === 0) {
		alert(`Por favor, ingresa una terea`);
		return;
	}
	// console.log(taskName);
	tasks = [...tasks, { name: taskName, taskId: tasks.length + 1 }];
	console.log(tasks);
	inputTask.value = "";
}
const init = () => {
	formTask.addEventListener("submit", addTask);
};

init();

// creando elementos en el DOM desde JS

let card = document.createElement("div");
card.classList.add("card");

let cardImg = document.createElement("img");
cardImg.src = "./assets/imgs/michi1.jpg";
cardImg.classList.add("imgCreada");

let cardTitle = document.createElement("h2");
cardTitle.classList.add("card-title");
cardTitle.innerText = "titulo de la tarjeta";

let cardBody = document.createElement("div");
cardBody.classList.add("card-body");
cardBody.innerText = "contenido de la tarjeta";

let cardBtn = document.createElement("button");
cardBtn.classList.add("btns");
cardBtn.innerHTML = "Click me pls";

card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardBtn);

const cardContainer = document.querySelector(".card-container");
cardContainer.appendChild(card);
console.dir(card);

const sectionPokemon = document.querySelector("#sectionPokemon");
const pokeContainer = document.querySelector(".container-cards");
