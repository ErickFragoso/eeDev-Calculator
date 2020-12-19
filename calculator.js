//Obteniendo valores de los numeros
const buttonNumbers = document.getElementsByName("data-number");
const buttonOpera = document.getElementsByName("data-opera");
const buttonIgual = document.getElementsByName('data-igual')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var operActual = '';
var opeAnterior = '';
var operacion = undefined;


//Agregando eventos a los botones
buttonNumbers.forEach(function(button) {
    button.addEventListener('click', function() {
        agregarNumero(button.innerText);
    })
});

buttonOpera.forEach(function(button) {
    button.addEventListener('click', function() {
        selectOperacion(button.innerText);
    })
});

buttonIgual.addEventListener('click', function() {
    calcular();
    actualizarDisplay();
});

buttonDelete.addEventListener('click', function() {
    clear();
    actualizarDisplay();
});

function selectOperacion(op) {
    if (operActual === '') return;
    if (opeAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = operActual;
    operActual = '';
}

function calcular() {
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(operActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '÷':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

//Programando los metodos
function agregarNumero(num) {
    operActual = operActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    operActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = operActual;
}