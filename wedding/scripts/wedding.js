const url = 'wedding/organizers.json';
const organizersContainer = document.querySelector('#organizer-container');
async function getOrganizersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayOrganizers(data.organizers);
    } catch (error) {
        console.error('Error fetching or parsing organizers data:', error);
    }
}

getOrganizersData();

const displayOrganizers = (organizers) => {
    organizers.forEach((organizer) => {
        let card = document.createElement('div');
        card.classList.add('organizer-card'); 

        let organizerName = document.createElement('h4');
        organizerName.textContent = organizer.name;

        let organizerRole = document.createElement('p');
        organizerRole.textContent = `Role: ${organizer.role}`;

        let organizerDescription = document.createElement('p');
        organizerDescription.textContent = organizer.description;

        let organizerImage = document.createElement('img');
        organizerImage.src = organizer.image;
        organizerImage.alt = `Image of ${organizer.name}`;

        card.appendChild(organizerName);
        card.appendChild(organizerRole);
        card.appendChild(organizerDescription);
        card.appendChild(organizerImage);

        organizersContainer.appendChild(card);
    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

// Define a function to toggle between grid and list view
function toggleView(view) {
    organizersContainer.classList.toggle("grid", view === "grid"); 
    organizersContainer.classList.toggle("list", view === "list");
}

gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

toggleView("grid");
