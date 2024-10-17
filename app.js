const carousel = document.querySelector(".cards");
const arrows = document.querySelectorAll(".slider i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

arrows.forEach(btn => {
    btn.addEventListener("click", () => {
       carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});
const passwordInput = document.getElementById('password');
const passwordStrengthText = document.getElementById('passwordStrength');

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        valid = false;
    }

    if (email === '' || !email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    if (valid) {
        alert('Registration successful!');
     
    }
});
