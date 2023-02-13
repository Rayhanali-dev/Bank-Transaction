const userEmail = document.getElementById('user-email');
const userPass = document.getElementById('user-password');
const confirmPass = document.getElementById('confirm-password');
// const btn = document.getElementById('submit-btn');

function singIn() {
    if(userEmail.value === '') {
        alert('please provide your email address');
        return false;
    } else if(userPass.value.length < 6) {
        alert('Provide a valid password');
        return false;
    }  else if (confirmPass.value !== userPass.value) {
        alert('Wrong Password');
        return false;
    } else if (confirmPass.value === userPass.value) {
        window.location.href = 'bank.html';
    }
    userEmail.value = '';
}





