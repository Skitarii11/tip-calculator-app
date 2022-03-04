let tipPerson = document.getElementById("tip-total");
let totalPerson = document.getElementById("total-total");

function calcTotal(tipNum){
    if(document.getElementById("people-input").value==0){
        document.getElementById("people-input").style.border="solid 2px #FF0000";
    } else {
        document.getElementById("people-input").style.removeProperty("border");
    }

    let billPerPerson = parseFloat(document.getElementById("bill-input").value)/parseFloat(document.getElementById("people-input").value);
    let tipPerPerson = billPerPerson/100*tipNum;
    let totalPerPerson = billPerPerson+tipPerPerson;

    tipPerson.innerText = tipPerPerson.toFixed(2);
    totalPerson.innerText = totalPerPerson.toFixed(2);
}

function calcCus(){
    if(document.getElementById("people-input").value==0){
        document.getElementById("people-input").style.border="solid 2px #FF0000";
    } else {
        document.getElementById("people-input").style.removeProperty("border");
    }

    let billPerPerson = parseFloat(document.getElementById("bill-input").value)/parseFloat(document.getElementById("people-input").value);
    let tipPerPerson = billPerPerson/100*parseFloat(document.getElementById("custom-btn").value);
    let totalPerPerson = billPerPerson+tipPerPerson;
    
    tipPerson.innerText = tipPerPerson.toFixed(2);
    totalPerson.innerText = totalPerPerson.toFixed(2);
}

document.getElementById("btn5").addEventListener("click", (evt)=>calcTotal(5));
document.getElementById("btn10").addEventListener("click", (evt)=>calcTotal(10));
document.getElementById("btn15").addEventListener("click", (evt)=>calcTotal(15));
document.getElementById("btn25").addEventListener("click", (evt)=>calcTotal(25));
document.getElementById("btn50").addEventListener("click", (evt)=>calcTotal(50));
document.getElementById("custom-btn").addEventListener("change", calcCus);

function resAll(){
    document.getElementById("bill-input").value="";
    document.getElementById("people-input").value="";
    document.getElementById("custom-btn").value="";
    tipPerson.innerHTML="0.00";
    totalPerson.innerHTML="0.00";
}

document.getElementById("reset-btn").addEventListener("click", resAll);