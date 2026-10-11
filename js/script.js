function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultDiv = document.getElementById("result");
    let result;
    if(isNaN(num1)||isNaN(num2)){
        resultDiv.textContent ="Please enter the correct number.";
        resultDiv.classList.add("error");
        return;
    }
    switch (operation) {
        case `add`:
            result = num1 + num2
            break;
        case `subtract`:
            result = num1 - num2
            break;
        case `multiply`:
            result = num1 * num2 ;
            break;
        case `divide`:
            if(num2===0){
                resultDiv.textContent ="Division by zero is not allowed .";
                resultDiv.classList.add("error");
                return;
            }
            result = num1 / num2 
            break;
        default:
            result = "Unknown process"
    }
    resultDiv.textContent=`The result : ${result}`;
}