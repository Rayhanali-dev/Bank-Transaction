const submit_btn = document.getElementById('withdraw-btn'); // withdraw submit btn
const withdraw_added_value = document.getElementById('withdray-add-value'); // total withdraw value

submit_btn.addEventListener('click', function () {

    const withdraw_amount = document.getElementById('withdraw-amount'); // withdraw input
    const withdraw_amount_string = parseFloat(withdraw_amount.value);

    withdraw_amount.value = '';

    if (isNaN(withdraw_amount_string)) {
        alert('please provide a valid number');
        return;
    }

    const withdraw_added_value = document.getElementById('withdray-add-value'); // total withdraw value
    const withdraw_added_value_string = parseFloat(withdraw_added_value.innerText);

    const main_balance = document.getElementById('main-balance')
    const main_balance_value = parseFloat(main_balance.innerText);
    
    if (main_balance_value < withdraw_amount_string) {
        alert('insufficient Balance');
        return;
    }

    const totalWithdrawValue = withdraw_added_value_string + withdraw_amount_string;
    withdraw_added_value.innerText = totalWithdrawValue;


    const total_main_value = main_balance_value - withdraw_amount_string;
    main_balance.innerText = total_main_value;

    

})


