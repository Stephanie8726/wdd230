document.addEventListener("DOMContentLoaded", function () {
    function handleSubmit(event) {
        // Access form elements
        let form = event.target;
        let formData = new FormData(form);

        // Get password and confirm password values
        let password = formData.get('password');
        let confirmPassword = formData.get('confirm_password');

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please re-enter your passwords.");
            event.preventDefault();
        }
    }

    let form = document.querySelector('.form');
    form.addEventListener('submit', handleSubmit);

    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("r");

    range.addEventListener('change', displayRatingValue);
    range.addEventListener('input', displayRatingValue);

    function displayRatingValue() {
        rangevalue.innerHTML = range.value;
    }

    const hamButton = document.querySelector('#menu-button');
    const navigation = document.querySelector('.navigation');
  
    hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
    });
});


