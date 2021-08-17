

document.getElementById('submit-btn').addEventListener('click', function () {

    const inputMail = document.getElementById('email');

    const inputPass = document.getElementById('password');

    const inputMailValue = inputMail.value;
    const inputPassValue = inputPass.value;

    if (inputMailValue == 'abc' && inputPassValue == 'abc') {
        window.location.href = 'index.html';
    }
    else {
        document.getElementById('warning').innerText = 'you have entered wrong email and password'
    }
})