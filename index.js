const app = document.getElementById("app");

const p = document.createElement("p");

const idade = 15;

if (idade >= 18) {
  console.log("Voce é maior de idade tem " + idade + " anos");
  p.textContent = "Voce é maior de idade tem " + idade + " anos";
  app.appendChild(p);
} else {
    console.log("Voce é menor de idade tem " + idade + " anos");
    p.textContent = "Voce é menor de idade tem " + idade + " anos";
    app.appendChild(p);
}