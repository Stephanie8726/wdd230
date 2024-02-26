// Function to get the array of chapters
function getChapterList() {
    // Get the chapters array from localStorage
    const storedChapters = JSON.parse(localStorage.getItem('myFavBOMList'));
    // Return storedChapters if it exists, otherwise return an empty array
    return storedChapters || [];
}

// Declare and assign chaptersArray with the result of the getChapterList function
const chaptersArray = getChapterList() || []; // Add a compound OR condition here

// Get the input field, button, and list from the HTML document
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Event listener for the button click
button.addEventListener('click', () => {
    // Check if the input field is not empty
    if (input.value.trim() !== '') { // Modified to trim whitespace from input value
        // Call the displayList function with the input value
        displayList(input.value);
        // Add the input value to the chaptersArray
        chaptersArray.push(input.value);
        // Update the localStorage with the new array
        setChapterList();
        // Clear the input field
        input.value = '';
        // Set focus back to the input field
        input.focus();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    // Create a new list item and delete button
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    // Append the delete button to the list item
    li.append(deleteButton);
    // Append the list item to the list
    list.append(li);
    // Event listener for delete button click
    deleteButton.addEventListener('click', function () {
        // Remove the list item from the DOM
        list.removeChild(li);
        // Call deleteChapter function to remove the chapter from chaptersArray and localStorage
        deleteChapter(li.textContent);
        // Set focus back to the input field
        input.focus();
    });
}

// Function to set the chaptersArray in localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to delete a chapter from chaptersArray and localStorage
function deleteChapter(chapter) {
    // Filter out the deleted chapter from chaptersArray
    chaptersArray.splice(chaptersArray.indexOf(chapter), 1); // Modified to use indexOf
    // Update the localStorage with the modified chaptersArray
    setChapterList();
}

// Initialize the list with existing chapters from localStorage
chaptersArray.forEach(chapter => {
    displayList(chapter);
});
