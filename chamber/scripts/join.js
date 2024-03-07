//hidden date
document.addEventListener("DOMContentLoaded", function() {
    const formLoadDateTimeInput = document.getElementById("formLoadDateTime");
    if (formLoadDateTimeInput) {
        formLoadDateTimeInput.value = Date.now();
    } else {
        console.error("Element with ID 'formLoadDateTime' not found.");
    }
});