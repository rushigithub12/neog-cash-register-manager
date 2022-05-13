const billAmount = document.querySelector("#billAmt");
const cashGiven = document.querySelector("#cashAmt");
const btnTranslate = document.querySelector("#btnCheck");
const message = document.querySelector("#msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

let availableNotes = [2000, 500, 100, 20, 10, 5, 1];

btnTranslate.addEventListener("click", clickHandler);

function clickHandler(e) {
    hideMessage();
    e.preventDefault();

    let billAmt = Number(billAmount.value);
    let cashAmt = Number(cashGiven.value);
    
    if(billAmt > 0 && cashAmt > 0) {
        if( cashAmt >= billAmt ) {
            const amountToReturn = cashAmt - billAmt;
            calculateAmount(amountToReturn);
        } else {
            showMessage("Do you wanna wash the plates?");
        }
    } 
    else {
        showMessage("Enter valid amount");
    }
}

function calculateAmount(amountToReturn) {
    for(let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc( amountToReturn / availableNotes[i] );
        amountToReturn = amountToReturn % availableNotes[i];
        noOfNotes[i].innerHTML = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.style.color = "red";
    message.innerHTML = msg;
}