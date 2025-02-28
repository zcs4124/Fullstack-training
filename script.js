// JavaScript to toggle the visibility of the nav links
document.querySelector('.menu-icon').addEventListener('click', function() {
    var navLinks = document.querySelector('nav ul');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

// JavaScript for additional form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});

// Real-time validation
document.getElementById('name').addEventListener('input', function() {
    var nameError = document.getElementById('name-error');
    if (this.value.trim() === '') {
        this.classList.add('error');
        nameError.style.display = 'block';
    } else {
        this.classList.remove('error');
        nameError.style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    var emailError = document.getElementById('email-error');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.value.trim())) {
        this.classList.add('error');
        emailError.style.display = 'block';
    } else {
        this.classList.remove('error');
        emailError.style.display = 'none';
    }
});

document.getElementById('message').addEventListener('input', function() {
    var messageError = document.getElementById('message-error');
    if (this.value.trim() === '') {
        this.classList.add('error');
        messageError.style.display = 'block';
    } else {
        this.classList.remove('error');
        messageError.style.display = 'none';
    }
});

// Filter projects by category
function filterProjects(category) {
    var projects = document.querySelectorAll('#projects article');
    projects.forEach(function(project) {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}