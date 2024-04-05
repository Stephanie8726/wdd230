//fetching json file
const url = 'https://stephanie8726.github.io/wdd230/wedding/organizers.json';

document.addEventListener("DOMContentLoaded", function() {
    const organizersContainer = document.querySelector('#organizer-container');
    if (organizersContainer) {
        getOrganizersData(organizersContainer);
    } else {
        console.error('Error: organizer-container element not found in the DOM');
    }
});

async function getOrganizersData(organizersContainer) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched organizers data:', data);
        displayOrganizers(data.organizers, organizersContainer);
    } catch (error) {
        console.error('Error fetching or parsing organizers data:', error);
    }
}

const displayOrganizers = (organizers, organizersContainer) => {
    organizers.forEach((organizer) => {
        let card = document.createElement('div');
        card.classList.add('organizer-card'); 

        let organizerName = document.createElement('h4');
        organizerName.textContent = organizer.name;

        let organizerRole = document.createElement('p');
        // organizerRole.textContent = `${organizer.role}`;

        let organizerDescription = document.createElement('p');
        organizerDescription.textContent = organizer.description;

        let organizerImage = document.createElement('img');
        organizerImage.src = organizer.image;
        organizerImage.alt = `Image of ${organizer.name}`;

        card.appendChild(organizerImage);
        card.appendChild(organizerName);
        card.appendChild(organizerRole);
        card.appendChild(organizerDescription);
       

        organizersContainer.appendChild(card);
    });
}


