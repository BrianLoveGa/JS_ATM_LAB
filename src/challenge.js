//console.log("check");

// Users can deposit money into an account
// Users can withdraw money from an account
// Account does not allow a negative balance
// The color of a bank account should reflect its balance. (There's a CSS class called .zero already written for this.)
// The two accounts have independent functionality
//



/// make that darn thing red when zero....
/// had to move the red check function to the top so it isn't accessed before being declared


let check0Balance = document.querySelector("#checking .balance");
let save0Balance = document.querySelector("#savings .balance");

function makeRedCheck () {
    check0Balance.classList.remove("zero");
    if (chktotal <= 0){
        check0Balance.classList.add("zero");
    }
};


function makeRedSave(){
    save0Balance.classList.remove("zero");
    if (svtotal <= 0){
        save0Balance.classList.add("zero");
    }
}



//// group help during  lab we took group approach to attack the problems Vincent and Melania

//// after class help credit to Melania - Bonnie - Jared - Gabe - Jared - Taylor


//// desposit
//// create function to add money typed in to account
/// user inputs a number - clicks deposit - the balance updates



//// withdrawl
//// create function to remove money typed in to account
//// user inputs a number - clicks withdrawl - the balance updates
//// if it goes to zero add class zero tag to make it red 


//// no negatives
//// if withdrawl > balance - alert - yuo too broke for that

let checkingAccount=document.querySelector('#checking');

let checkingDeposit=checkingAccount.querySelector('.input');

let amountTotal=checkingAccount.querySelector('.balance');

let buttonClick=checkingAccount.querySelector('.deposit');

let chktotal=0;

function addMoney(){ if (checkingDeposit.value <= 0 || NaN || "" ){
    alert("You must enter a whole and positive number and you can't deposit negative you silly goose that is a withdrawl");  
} else {
 chktotal+=parseInt(checkingDeposit.value);
  amountTotal.innerText="$ " + chktotal;
//   console.log(chktotal);
//   console.log(amountTotal); ------------------- to check which one was total and working
//   console.log(amountTotal.innerText);
//   console.log(checkingDeposit.value);
  makeRedCheck();
}};

buttonClick.addEventListener('click',addMoney);

//////////  deposit checking works


let checkingWithdrawl = checkingAccount.querySelector('.input');

let withDrawlClick = checkingAccount.querySelector('.withdraw');

function takeOutMoney (){
    if (chktotal<=0) { 
        alert("... Insufficent Funds ...");
    } else if (parseInt(checkingWithdrawl.value) > chktotal) {
        alert("Insuffecient Funds Alert ! What are you trying to do? You don't have that much money.");
    } else {
        chktotal -= parseInt(checkingWithdrawl.value);
        amountTotal.innerText = "$ " + chktotal;
        //console.log(chktotal);
        makeRedCheck();
    }
};

withDrawlClick.addEventListener("click",takeOutMoney);

///// withdraw checking works - but doen't light up red at zero....

//// gonna make savings work..... i believe we are supposed to amend the above functions so that they can acess whether checking or savings but that is beyond us currently

let svtotal=0;
let savingAccount=document.querySelector('#savings');

let savingDeposit=savingAccount.querySelector('.input');

let amountSaveTotal=savingAccount.querySelector('.balance');

let buttonSaveClick=savingAccount.querySelector('.deposit');

function addSaveMoney(){ if (savingDeposit.value <= 0 || NaN || "" ){
    alert("You must enter a whole and positive number and you can't deposit negative you silly goose that is not saving");
} else {
 svtotal+=parseInt(savingDeposit.value) ;
  amountSaveTotal.innerText="$ " + svtotal;
  console.log(svtotal);
  makeRedSave();
}};

buttonSaveClick.addEventListener('click',addSaveMoney);

// savings can deposit lets get saviongs withdrawl cooking...

let saveWithdrawl = savingAccount.querySelector('.input');

let withDrawSaveClick = savingAccount.querySelector('.withdraw');

function takeOutSaveMoney (){
    if (svtotal <= 0) {
        alert("... Insufficent Funds ... ");
    } else if (parseInt(saveWithdrawl.value) > svtotal) {
        alert("Insuffecient Funds Alert ! What are you trying to do? You don't have that much money.");
    } else {
        svtotal -= parseInt(saveWithdrawl.value);
        amountSaveTotal.innerText = "$ " + svtotal;
        //console.log(svtotal); /// had to make sure it was working
        makeRedSave();
        
    }
};

withDrawSaveClick.addEventListener("click", takeOutSaveMoney);


//// saving can withdraw !!!! whoo - hoo





//// not sure what this declaration or statement expected problem / error my VSCode is throwing... everything is working gonna press on.... it's the last line - even when I comment out the whole page

//now it's appearing at line 146  right under the closing " of my click - but everything is working gonna commit and  chalk it up to gremilins again - at least I got this one complete



















