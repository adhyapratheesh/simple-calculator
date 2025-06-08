const screen = document.getElementById('screen');

function buttonClick(value) {
    if (value === '=')
        calculate();
    else
        screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(screen.value);

        screen.value = result;
    } catch (e) {
        screen.value = 'Error';
    }
}


