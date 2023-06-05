// Clase de validación de formularios::
// paso uno: traer los elementos.
const registerForm = document.querySelector("#formRegister");
const nameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const userInput = document.querySelector("#user");
const passInput = document.querySelector("#pass");
const repeatPassInput = document.querySelector("#repeatPass");
const dateInput = document.querySelector("#date");
const phoneInput = document.querySelector("#phoneNumber");
const BtnSubmit = document.querySelector("#form__btn");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};
// **********************Funciones auxiliares*******************
const isEmpty = (input) => {
  return !input.value.trim().length;
};

const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(input.value.trim());
};

const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

const isExistingUser = (input) => {
  return users.some((user) => user.usuario === input.value.trim());
};

const isPassSecure = (input) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return re.test(input.value.trim());
};

const isPhoneValid = (input) => {
  const re = /^[0-9]{10}$/;
  return re.test(input.value.trim());
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.style.display = "none";
  error.textContent = "";
};

// ******************* funciones de valiodacion a inputs ***************
function checkTextInput(input) {
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 16;
  //Si el input está vacío, mostramos error
  if (isEmpty(input)) {
    showError(input, `Este campo es obligatorio`);
    return;
  }
  //Si no esta entre min y max caracteres, mostramos error
  if (!isBetween(input, minCharacters, maxCharacters)) {
    showError(
      input,
      `Este campo debe tener entre ${minCharacters} y ${maxCharacters}`
    );
    return;
  }
  //LLAMAMOS A LA FUNCION QUE QUITA EL SHOWERROR
  //Borramos error, damos feedback
  showSuccess(input);
  valid = true;
  return valid;
}

function checkEmail(input) {
  //validacion por defecto en falso
  let valid = false;

  //Controlamos si esta vacio
  if (isEmpty(input)) {
    showError(input, "El email es obligatorio");
    return;
  }

  //Si no es un email valido, mostramos error
  if (!isEmailValid(input)) {
    //("mostrar error");
    showError(input, "el email no es valido");
    //("return");
    return;
  }

  // Si el email ya existe, mostramos error.
  if (isExistingEmail(input)) {
    //("muestro error");
    showError(input, "El email ya està registrado");
    //("return");
    return;
  }
  //LLAMAMOS A LA FUNCION QUE QUITA EL SHOWERROR
  //Borramos error, damos feedback
  showSuccess(input);
  valid = true;
  return;
}

function checkUser(input) {
  let valid = false;

  //Si el input esta vacio, muestro error
  if (isEmpty(input)) {
    //muestro error
    showError(input, "Este campo es obligatorio");
    //Retornamos
    return;
  }

  //Si el input tiene menos de 4 caracteres, muestro error
  if (userInput.value.length < 6) {
    //muetro error
    showError(input, "Tu usuario debe tener al menos 6 caracteres");
    //Retornamos
    return;
  }

  //Verificamos de que no exista el mismo usuario.
  if (isExistingUser(input)) {
    //mostramos error
    showError(input, "Este usuario ya esta registrado");
    //retornamos
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
}

function checkPassword(input) {
  //validacion por defecto en falso
  let valid = false;
  //Si el input esta vacio, mostramos error
  if (isEmpty(input)) {
    //("mostramos error");
    showError(input, "Este campo es obligatorio");
    //("retornamos");
    return;
  }
  //Si la contraseña no es segura, mostramos error
  if (!isPassSecure(input)) {
    //mostramos error
    showError(
      input,
      "Tu contraseña debe contener al menos 8 caracteres, una mayuscula, una miniscula, un numero y un simbolo"
    );
    //retornamos
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
}

function checkRepeatPass(input) {
  let valid = false;

  //verificamos que el input no este vacio
  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  //Si las contraseñas no coinciden, muestro error
  if (repeatPassInput.value != passInput.value) {
    showError(input, "las contraseñas no coinciden");
    return;
  }

  //Validacion hecha. Accedemos y retornamos valid
  showSuccess(input);
  valid = true;
  return valid;
}

function checkPhone(input) {
  let valid = false;

  // si el input esta vacio, muestro error
  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  //Si el input tiene mas de 10 caracteres, muestro error
  if (!isPhoneValid(input)) {
    showError(input, "El numero de telefono es invalido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
}

// *********** validacion general y almacenamiento de datos ***********
const submitHandler = (e) => {
  //Prevenimos comportamiento por default
  e.preventDefault();
  //Checkear que todos los inputs sean validos
  let isNameValid = checkTextInput(nameInput);
  let isLastNameValid = checkTextInput(lastNameInput);
  let isEmailValid = checkEmail(emailInput);
  let isUserValid = checkUser(userInput);
  let isPassValid = checkPassword(passInput);
  let isRepeatPassValid = checkRepeatPass(repeatPassInput);
  let isPhoneValid = checkPhone(phoneInput);

  let isValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isUserValid &&
    isPassValid &&
    isRepeatPassValid &&
    isPhoneValid;

  //Si el formulario es valido, guardo la data en el localStorage y doy feedback
  //Redirigir al login
  if (isValidForm) {
    users.push({
      name: nameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      usuario: userInput.value,
      password: passInput.value,
      repeatPassword: repeatPassInput.value,
      phone: phoneInput.value,
    });
    saveToLocalStorage();
    alert("Usuario registrado con exito");
    window.location.href = "login.html";
  }
  //Si no es valido, mostrar error y no guardar nada, dar feedback
};

const init = () => {
  registerForm.addEventListener("submit", submitHandler);
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  userInput.addEventListener("input", () => checkUser(userInput));
  passInput.addEventListener("input", () => checkPassword(passInput));
  repeatPassInput.addEventListener("input", () =>
    checkRepeatPass(repeatPassInput)
  );
  phoneInput.addEventListener("input", () => checkPhone(phoneInput));
};

init();
