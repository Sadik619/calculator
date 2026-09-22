let display = document.getElementById("display");


function addValue(value) {

    if (display.value === "0") {
        display.value = value;
    }
    else {
        display.value += value;
    }
}


function clearDisplay() {

    display.value = "0";
}


function deleteLast() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    }
    else {
        display.value = "0";
    }
}


function calculate() {

    try {

        let result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
        }
        else {
            display.value = result;
        }

    }
    catch (error) {

        display.value = "Error";

    }
}