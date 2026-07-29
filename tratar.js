const calcular = (idade) => {
  if (idade < 18) {
    return "Voce e de monor rapaz, vai jogar FreeFire";
  } else if (idade >= 18 && idade <= 50) {
    return "Entra nessa poha de uma vez";
  } else {
    return "bah pai, vai toma um mate e os teus remedio, veio pa poha";
  }
};

export default calcular;