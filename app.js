const reasonInput =  document.querySelector('#input-reason');
const amountInput =  document.querySelector('#input-amount');
const cancelBtn =  document.querySelector('#btn-cancel');
const confirnmBtn =  document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alterCntrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0; 
const clear = ()=>{
    reasonInput.value = '';
    amountInput.value = '';
}
confirnmBtn.addEventListener('click', ()=>{
    const enterReason = reasonInput.value;
    const enterAmount = amountInput.value;
    
    if(enterReason.trim().length <=0 || enterAmount <=0  || enterAmount.trim().length <=0  ){
    
    alterCntrl.create({
        message : 'please enter valid reason and amount' , 
        header : 'invalid inputs',
        buttons: ['okay']
    }).then(alertElement =>{
        alertElement.present();
    });
        return;
    }

    const newIem = document.createElement('ion-item');
    newIem.textContent = enterReason + ': $'+enterAmount;

    expensesList.appendChild(newIem);
    totalExpenses+= +enterAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);