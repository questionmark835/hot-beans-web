document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('applicationForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const position = document.getElementById('position').value.trim();
        const coverLetter = document.getElementById('coverLetter').value.trim();
        const cv = document.getElementById('cv').files[0];

        // Basic validation check
        if (!fullName || !email || !position || !coverLetter || !cv) {
            formResponse.innerHTML = "<p style='color: red;'>Please fill in all fields and upload your CV.</p>";
            return;
        }

        // Optional: Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formResponse.innerHTML = "<p style='color: red;'>Please enter a valid email address.</p>";
            return;
        }

        // If everything is valid, show a success message
        formResponse.innerHTML = "<p style='color: green;'>Your application has been submitted successfully! We will review it shortly.</p>";

        // Optional: Clear the form after submission
        form.reset();
    });
});
