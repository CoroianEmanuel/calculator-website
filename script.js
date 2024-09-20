function toDisplay(character) {
    var display = document.getElementById('screen');
    display.value += character; 
}
function toDisplaySymbol(symbol) {
    var display = document.getElementById('screen');
    var currentValue = display.value;

    if(currentValue.slice(-1) !== symbol) {
        display.value += symbol;
    } else if(currentValue.slice(-1) === symbol){
        display.value += '';
    }
}
function toDelete() {
    var something = document.getElementById('screen');
    something.value = '';
}
function result() {
    var screen = document.getElementById('screen');
    screen.value = eval(screen.value);
}
function minus() {
    var display = document.getElementById('screen');
    var currentValue = display.value
    
    if(currentValue.charAt(0) === '-') {
        display.value = currentValue.slice(1);
    } else {
        display.value = '-' + currentValue;
    }
}
function toDisplaySymbol(symbol) {
    var display = document.getElementById('screen');
    var currentValue = display.value;
    var lastChar = currentValue.slice(-1);

    var isLastCharSymbol = isNaN(lastChar) && lastChar !== '';

    var isCurrentSymbol = isNaN(symbol);

    if (!isLastCharSymbol || !isCurrentSymbol) {
        display.value += symbol;
    }
}
function firstElement(symbol) {
    var display = document.getElementById('screen');
    var currentValue = display.value;
    var lastChar = currentValue.slice(1);
}

