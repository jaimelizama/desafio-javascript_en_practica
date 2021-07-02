const submit = document.getElementById("botton");
botton.addEventListener("click", check);

function check(send) {
  send.preventDefault();
  const name = document.getElementById("nombre").value;
  const subject = document.getElementById("asunto").value;
  const message = document.getElementById("mensaje").value;

  const nameAllowed = /([a-zA-Z])\w+/g;
  const subjectAllowed = /([a-zA-Z])\w+/g;
  const messageAllowed = /([a-zA-Z])\w+/g;

  if (
    name.match(nameAllowed) &&
    subject.match(subjectAllowed) &&
    message.match(messageAllowed)
  ) {
    console.log("Todos los datos correctos :)");
    document.getElementById("resultado").innerHTML =
      "¡Mensaje enviado con éxito!";
  } else {
    document.getElementById("resultado").innerHTML = "";
  }

  if (name.match(nameAllowed)) {
    console.log("Texto permitido");
    document.querySelector(".errorNombre").innerHTML = "";
  } else {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    console.log("Texto no permitido");
  }

  if (subject.match(subjectAllowed)) {
    console.log("Texto permitido");
    document.querySelector(".errorAsunto").innerHTML = "";
  } else {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    console.log("Texto no permitido");
  }

  if (message.match(messageAllowed)) {
    console.log("Texto permitido");
    document.querySelector(".errorMensaje").innerHTML = "";
  } else {
    document.querySelector(".errorMensaje").innerHTML =
      "El mensaje es requerido";
    console.log("Texto no permitido");
  }
}
