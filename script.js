let expression = "";
let result = "";

function appendValue(value) {
    expression += value;
    document.getElementById("expression").value = expression;
}

function clearExpression() {
    expression = "";
    result = "";
    document.getElementById("expression").value = expression;
    document.getElementById("result").value = result;
}

function clearLastCharacter() {
    expression = expression.slice(0, -1);
    document.getElementById("expression").value = expression;
    document.getElementById("result").value = "";
}

function calculateResult() {
    try {
        result = eval(expression);

        if (!isFinite(result)) {
            throw new Error("Division by zero");
        }

        document.getElementById("result").value = result;
    } catch (error) {
        if (error.message === "Division by zero") {
            document.getElementById("result").value = "Error: Division by zero";
        } else {
            document.getElementById("result").value = "Error";
        }
    }
}
