function contadorExtra() {
	const btnAumentar = document.querySelector(".btn-aumentar");
	const btnDisminuir = document.querySelector(".btn-disminuir");
	const resultado = document.getElementById("resultado");

	let contador = 0;

	const aumentar = () => {
		contador++;
		resultado.textContent = contador;
	};

	const disminuir = () => {
		contador--;
		resultado.textContent = contador;
	};

	btnAumentar.addEventListener("click", aumentar);
	btnDisminuir.addEventListener("click", disminuir);
}

contadorExtra();
