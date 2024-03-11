class Calculator {
    constructor(prevElement, currentElement) {
        this.prevElement = prevElement;
        this.currentElement = currentElement;
        this.clear();
    }
    clear() {
        this.currentElement = '';
        this.prevElement = '';
        this.operation = undefined;
    }

    deleteNumber() {
        if(this.prevElement.includes('=')){
            this.currentElement= '';
        }

        this.currentElement = this.currentElement.substr(0, this.currentElement.length-1);
    }

    allclear() {
        this.currentElement = '';
        this.prevElement = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        if(number === '.' && this.currentElement.includes('.') || this.currentElement === 'Error'){ return}

        // operation wird deswegen als '=' gesetzt damit ein neuer eingabestring erfolgt und nicht jedes mal gelöscht wird

        if(this.prevElement.includes(' =') && this.operation != '=') {
            this.deleteNumber();
            this.operation = '=';
        }

        this.currentElement = this.currentElement.toString() + number.toString();
    }

    mathOp(operation) {
        this.operation = operation;

        // keine operation wenn eingabefeld leer ist

        if(this.currentElement === '' || this.currentElement === 'Error') {return}
    
        this.prevElement = this.currentElement + ' ' + operation.toString();
        this.currentElement = '';
    }

    calculateOperands() {
        // stoppt wenn obere zeile ergebnis bereits enthält oder keine rechnung durchgeführt werden kann

        if (this.currentElement === '' || 
            this.prevElement === '' || 
            this.prevElement.includes('=') ||
            this.currentElement === 'Error') { return }

        let opA = prevElement.innerText;
        opA = parseFloat(opA.substr(0,opA.length-2));
        let opB = parseFloat(currentElement.innerText);
        let result;
        
        

        // if else anwendung je nach operand mit einem switch statement
        switch (this.operation) {
            case '+':
                result = opA + opB;
                break;
            case '-':
                result = opA - opB;
                break;
            case '÷':
                result = opA / opB;
                break;  
            case '*':
                result = opA * opB;
                break;           
        }
        console.log(result)
        if (result === Infinity){
            result = 'Error';
            this.currentElement = result;
            this.updateDisplay();
            return
        }

        this.currentElement = result;
        this.prevElement = this.prevElement + ' ' + opB + ' =';
        this.updateDisplay();
    }

    updateDisplay() {
        currentElement.innerText = this.currentElement;
        prevElement.innerText = this.prevElement;
    }
}


const numBtn = document.querySelectorAll(".number");
const eqBtn = document.getElementById("eq");
const opBtn = document.querySelectorAll(".operation");
const delBtn = document.getElementById("del");
const acBtn = document.getElementById("ac");

const prevElement = document.getElementById("prevOperand");
const currentElement = document.getElementById("currOperand"); 

const calc = new Calculator(prevElement, currentElement)

//iterieren durch zahlen-liste und aufrufen der Rechnerfunktionen

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText);
        calc.updateDisplay();      
    })
})


opBtn.forEach(button => {
    button.addEventListener('click', () => {
        calc.mathOp(button.textContent);
        calc.updateDisplay();
    })
})

eqBtn.addEventListener('click' , () => {
    calc.calculateOperands();
})

acBtn.addEventListener('click' , () => {
    calc.allclear();
    console.log("testEqual")
    calc.updateDisplay();
})

delBtn.addEventListener('click' , () => {
    calc.deleteNumber();
    calc.updateDisplay();
})