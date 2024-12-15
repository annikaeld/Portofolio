document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    console.log(form);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        document.getElementById('thankYouMessage').style.display = 'block';
    });
});