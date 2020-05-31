const expenseName = document.querySelector('#name');
const expenseDesc = document.querySelector('#desc');
const expenseAmount = document.querySelector('#amount');
const expenses = document.querySelector('#expenses');
const total = document.querySelector('#total-expense');
const addExpenseBtn = document.querySelector('#add-expense');
const clearBtn = document.querySelector('#clear');

const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    expenseName.value = "";
    expenseDesc.value = "";
    expenseAmount.value = "";
}

addExpenseBtn.addEventListener('click', () => {
    const name = expenseName.value;
    const desc = expenseDesc.value;
    const amount = expenseAmount.value;

    if (name.trim().length <= 0 || desc.trim().length  <=0 || amount <= 0 || amount.trim().length <= 0){
        alertCtrl.create({
            message:"Missing bits! pls fix", 
            header: 'ERR0R',
            buttons: ['okay']
        }).then(alertElement => {
            alertElement.present();
        });
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = "Name: " + name + " Description: " + desc + "Amount: $" + amount;

    expenses.appendChild(newItem);
    totalExpenses += +amount;
    total.textContent = "$" + totalExpenses;
    clear();
});

clearBtn.addEventListener('click', clear );
