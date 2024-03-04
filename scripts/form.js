document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent default form submission
        event.preventDefault();

        // Access form elements
        let form = event.target;
        let formData = new FormData(form);

        // Display form element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }

    // Get the form element
    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("r");
    
    // RANGE event listener
    range.addEventListener('change', displayRatingValue);
    range.addEventListener('input', displayRatingValue);
    
    function displayRatingValue() {
        rangevalue.innerHTML = range.value;
    }

});

