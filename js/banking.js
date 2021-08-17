// common function 

// collect input value from user

function collectInputValue(id) {
    const pickValueWithId = document.getElementById(id);
    const pickValueText = pickValueWithId.value;
    const pickValueNumber = parseFloat(pickValueText);

    pickValueWithId.value = '';

    return pickValueNumber;
}

// add the value to current ammount

function addValueToCurrent(id, inputValue) {
    const currentValue = document.getElementById(id);
    const currentValueText = currentValue.innerText;
    const currentValueNumber = parseFloat(currentValueText);


    const updateValue = currentValueNumber + inputValue;

    currentValue.innerText = updateValue;
}


// add or reduce total value

function updateTotalAmount(id, inputAmount) {
    const totalAmount = document.getElementById(id);
    const totalAmountText = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountText);

    const update = totalAmountNumber + inputAmount;
    totalAmount.innerText = update;
}


// eventlistener add to button 

document.getElementById('deposit-btn').addEventListener('click', function () {

    const functionaldepositAmount = collectInputValue('deposit-ammount');
    if (functionaldepositAmount > 0) {
        addValueToCurrent('deposit-current', functionaldepositAmount);
        updateTotalAmount('balance-total', functionaldepositAmount);
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const functionalWithdrawAmount = collectInputValue('withdraw-ammount');
    if (functionalWithdrawAmount > 0) {
        addValueToCurrent('withdraw-current', functionalWithdrawAmount);
        updateTotalAmount('balance-total', -functionalWithdrawAmount);
    }
})