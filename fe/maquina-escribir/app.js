function dormir(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const frases = [
  "hablar con Dei",
  "escribir código",
  "escuchar música",
  "resolver retos",
  "aprender",
  "bailar",
  "tranformarme",
];
const elemento = document.getElementById("maquina");

let tiempoDormida = 100;
let indiceFraseActual = 0;

const escribirCiclo = async () => {
  while (true) {
    let palabraActual = frases[indiceFraseActual];

    for (let i = 0; i < palabraActual.length; i++) {
      elemento.innerText = palabraActual.substring(0, i + 1);
      await dormir(tiempoDormida);
    }

    await dormir(tiempoDormida * 10);

    for (let i = palabraActual.length; i > 0; i--) {
      elemento.innerText = palabraActual.substring(0, i - 1);
      await dormir(tiempoDormida);
    }
    await dormir(tiempoDormida * 5);
    if (indiceFraseActual === frases.length - 1) {
      indiceFraseActual = 0;
    } else {
      indiceFraseActual++;
    }
  }
};

escribirCiclo();
