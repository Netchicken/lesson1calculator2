export const LogCalculate = (first, second, symbol) => {
    console.log("Running the calc", first + " " + symbol + " " + second + " = " + eval(first + symbol + second));
}

export const LogValue = (symbol) => {
    console.log("calc Operation", symbol);
}

