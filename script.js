// Calculation Program
var resultField =document.getElementById("result");
var num = "";
var firstNum = "";
var op ; 
var result ; 
var theme=1;

document.getElementById("RESET-button").addEventListener("click",handleReset);
function handleReset() {
    resultField.value = "";
    num="";
    firstNum = "";
    op = "";
    result="";
}
document.getElementById("DEL-button").addEventListener("click",handleDel);
function handleDel () {
    if(num) {
        num = num.slice(0, -1);
        resultField.value = num;
    }
}

for (let i=0 ; i<11; i ++) {
    document.getElementsByClassName("number")[i].addEventListener("click",handleNumber);
}
function handleNumber() {
    num+=this.innerHTML;
    resultField.value=num;
}
for (let i=0 ; i<4; i ++) {
    document.getElementsByClassName("operator")[i].addEventListener("click",handleOperator);
}
function handleOperator () {
    op = this.innerHTML;
    if (op ==="x") {
        op = "*";
    }
    firstNum = num;
    resultField.value = op;
    num="";

}
document.getElementById("equal-button").addEventListener("click",calculation)
function calculation () {
    switch (op) 
    {
        case '+':
        result = (parseFloat(firstNum) + parseFloat(num)).toString();
            break
        case '-':
            result =(parseFloat(firstNum) - parseFloat(num)).toString();
            break
        case '*':
        result = (parseFloat(firstNum) * parseFloat(num)).toString();
            break
        case '÷':
        result =(parseFloat(firstNum) / parseFloat(num)).toString();
            break
        default:
          return
    }
    num = result ;
    if(num) {resultField.value = num;}      
}
// Theme Switcher Program
document.getElementById("switcher-id").addEventListener("click",swithTheme);
function swithTheme() {
    console.log("clicked");
  /*  theme++;
    if (theme == 4 ) {theme = 1;}
    console.log(theme);*/
}