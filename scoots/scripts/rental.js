const url = 'data/rental.json';

document.addEventListener("DOMContentLoaded", function() {
    const rentalsTable = document.querySelector('#rentals-table tbody');
    if (rentalsTable) {
        getRentalsData(rentalsTable);
    } else {
        console.error('Error: rentals-table element not found in the DOM');
    }
});

async function getRentalsData(rentalsTable) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched rentals data:', data);
        displayRentals(data.types_of_rentals, rentalsTable);
    } catch (error) {
        console.error('Error fetching or parsing rentals data:', error);
    }
}

const displayRentals = (typesOfRentals, rentalsTable) => {
    typesOfRentals.forEach((type) => {
        type.options.forEach((option) => {
            let optionRow = document.createElement('tr');

            let imageCell = document.createElement('td');
            let image = document.createElement('img');
            image.src = option.image;
            image.alt = option.model;
            imageCell.appendChild(image);

            let modelCell = document.createElement('td');
            modelCell.textContent = option.model;

            let capacityCell = document.createElement('td');
            capacityCell.textContent = option.capacity;

            let halfDayCell = document.createElement('td');
            halfDayCell.textContent = option.reservation_half_day;

            let fullDayCell = document.createElement('td');
            fullDayCell.textContent = option.reservation_full_day;

            let reservationCell = document.createElement('td');
            reservationCell.textContent = option.walk_in_price_half_day; 

            let walkInCell = document.createElement('td');
            walkInCell.textContent = option.walk_in_price_full_day;

            optionRow.appendChild(imageCell);
            optionRow.appendChild(modelCell);
            optionRow.appendChild(capacityCell);
            optionRow.appendChild(halfDayCell);
            optionRow.appendChild(fullDayCell);
            optionRow.appendChild(reservationCell);
            optionRow.appendChild(walkInCell);

            rentalsTable.appendChild(optionRow);
        });
    });
}

