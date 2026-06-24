
function appendValue(value) {
    let dispay = document.getElementById('display');
    if (value ==='.'&& display.value.split(/[\+\-\*\/]/).pop().includes('.')) {
        return;
    }
    display.value += value;
}

function clearDisplay() {
   document.getElementById('display').value = '';

}
function deletelast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
document.addEventListener('keydown', function(event)    {
    let key = event.key;
    if ('0123456789.+-*/%()' .includes(key)) {
        appendValue(key);
    }
if (key === 'Enter') {
    calculator();
}
if (key === 'Backspace') {
    deletelast();
}
if (key === 'Escape') {
    clearDisplay();
}

});
function calculator()  { 



    let display = document.getElementById('display');
    try {
        let result = eval(display.value);
        if (!isFinite(result)) {
            display.value = 'Error';

        } else {
            display.value = result;
        }
        setTimeout(() => {

         if (display.value === 'Error')
            display.value = "";
        }, 1500);
    }
    catch  {
        display.value = 'Error';
        setTimeout(() => display.value = "", 1500);

    }
}


