const container = document.getElementById('container');
const signinToggle = document.getElementById('signin-toggle');
const signupToggle = document.getElementById('signup-toggle');

signinToggle.addEventListener('click', () => {
    container.classList.remove('signup-mode');
    container.classList.add('switching');
    signinToggle.classList.add('active');
    signupToggle.classList.remove('active');
    
    setTimeout(() => {
        container.classList.remove('switching');
    }, 600);
});

signupToggle.addEventListener('click', () => {
    container.classList.add('signup-mode');
    container.classList.add('switching');
    signupToggle.classList.add('active');
    signinToggle.classList.remove('active');
    
    setTimeout(() => {
        container.classList.remove('switching');
    }, 600);
});


document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Sign in logic goes here
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Sign up logic goes here
});