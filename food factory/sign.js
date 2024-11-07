const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const passwordErrorSpan = document.getElementById('password_error');

passwordInput.addEventListener('input', checkPasswords);
confirmPasswordInput.addEventListener('input', checkPasswords);

function checkPasswords() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordErrorSpan.textContent = 'Passwords do not match';
  } else {
    passwordErrorSpan.textContent = '';
  }
}
form.addEventListener('submit', (e) => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
  
    if (password !== confirmPassword) {
      e.preventDefault(); 
      passwordErrorSpan.textContent = 'Password and Confirm Password do not match';
      passwordErrorSpan.style.color = 'red';
    } else {
      passwordErrorSpan.textContent = '';
    }
});