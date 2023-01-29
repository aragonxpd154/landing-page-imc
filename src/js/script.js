function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var CondicaoSaude = document.querySelector('#condicaoObesidade');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  imcResult.textContent = imc.toFixed(2).replace('.', ',');
  if (imc < 16) {
    CondicaoSaude.textContent = 'Valor IMC Invalido';
  }
  if (imc >= 16 && imc <= 16.99) {
    CondicaoSaude.textContent = 'Muito abaixo do peso';
  }
  if (imc >= 17 && imc <= 18.49) {
    CondicaoSaude.textContent = 'Abaixo do peso';
  }
  if (imc >= 18.5 && imc <= 24.9) {
    CondicaoSaude.textContent = 'Peso Normal';
  }
  if (imc >= 25 && imc <= 29.99) {
    CondicaoSaude.textContent = 'Acima do peso';
  }
  if (imc >= 30 && imc <= 34.99) {
    CondicaoSaude.textContent = 'Obesidade grau I';
  }
  if (imc >= 35 && imc <= 40) {
    CondicaoSaude.textContent = 'Obesidade grau II';
  }
  if (imc > 40.1) {
    CondicaoSaude.textContent = 'Obesidade grau III';
  }
}
start();
