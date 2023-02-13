
const balance = document.getElementById('main-balance'); //total balance
const deposit_amount = document.getElementById('deposit-submit'); //submit button

deposit_amount.addEventListener('click', function () {
    const added_deposit = document.getElementById('add-deposit'); // deposit input
    const added_deposit_value = parseFloat(added_deposit.value);

    if(isNaN(added_deposit_value)) {
        alert('please provide a valid number');
        return;
    }

    const deposit = document.getElementById('total-deposit'); // deposit
    const totalDepositValue = parseFloat(deposit.innerText);
    const currentDepositBalance = added_deposit_value + totalDepositValue;
    deposit.innerText = currentDepositBalance;

    const balance = document.getElementById('main-balance'); //total balance
    const balanceValue = parseFloat(balance.innerText);
    const totalValue = balanceValue + added_deposit_value;
    balance.innerText = totalValue

    added_deposit.value = '';
})

