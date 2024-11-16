document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ec-verification-form');
    const uploadBtn = document.getElementById('upload-btn');
    
    uploadBtn.addEventListener('click', function () {
        const pictureInput = document.getElementById('picture');
        if (pictureInput.files.length > 0) {
            alert('Picture selected: ' + pictureInput.files[0].name);
        } else {
            alert('Please select a picture to upload!');
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add form validation and submission logic here
        alert('Form submitted successfully!');
    });
});

