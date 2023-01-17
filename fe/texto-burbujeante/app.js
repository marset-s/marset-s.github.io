const frase = "@marset-s";

const elementoObjetivo = document.getElementById("burbujeante-hover");

frase.split("").map((caracter, indice) => {
  const elemento = document.createElement("span");

  elemento.innerText = caracter;
  elemento.setAttribute("indice-datos", indice.toString());
  elemento.classList.add("caracter-suspendido");

  elementoObjetivo.appendChild(elemento);
});

const caracteresSuspendidos = [
  ...document.getElementsByClassName("caracter-suspendido"),
];

const removerCalse = () => {
  caracteresSuspendidos.map((caracter) => {
    caracter.classList.remove("suspendido");
    caracter.classList.remove("suspendido-adyacente");
  });
};

caracteresSuspendidos.map((caracter) => {
  caracter.addEventListener("mouseover", (elemento) => {
    removerCalse();

    const elementoActual = elemento.target;
    const indice = parseInt(elementoActual.getAttribute("indice-datos"), 10);

    const indicePrevio = indice === 0 ? null : indice - 1;
    const indiceSiguiente = indice === frase.length - 1 ? null : indice + 1;

    const elementoPrevio =
      indicePrevio !== null &&
      document.querySelector(`[indice-datos = "${indicePrevio}"]`);
    const elementoSiguiente =
      indiceSiguiente !== null &&
      document.querySelector(`[indice-datos = "${indiceSiguiente}"]`);

    elemento.target.classList.add("suspendido");
    elementoPrevio && elementoPrevio.classList.add("suspendido-adyacente");
    elementoSiguiente &&
      elementoSiguiente.classList.add("suspendido-adyacente");
  });
});

document
  .getElementById("burbujeante-hover")
  .addEventListener("mouseleave", () => {
    removerCalse();
  });
