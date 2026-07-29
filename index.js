import  calcular  from "./tratar.js";

const app = document.getElementById("app");

const p = document.createElement("p");

const idade = 15;

const calculado = calcular(idade);

p.textContent = calculado;

app.appendChild(p);
