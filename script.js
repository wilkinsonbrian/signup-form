const pwd = document.querySelector('#pwd');
const cpwd = document.querySelector('#cpwd');

const msg = document.querySelector('.msg');

function checkPass() {
    let firstPass = pwd.value;
    let secondPass = cpwd.value;
    const err = document.querySelectorAll('.error');
    if (firstPass !== secondPass || firstPass === "") {
        err.forEach(element => element.style.border = '1px solid red');
        msg.style.display = "block";
    } else {
        msg.style.display = 'none';
        err.forEach(element => element.style.border = '1px solid #E5E7EB');
    }
}

pwd.addEventListener('input', checkPass);
cpwd.addEventListener('input', checkPass);