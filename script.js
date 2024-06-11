// submission of form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    this.reset();
});
