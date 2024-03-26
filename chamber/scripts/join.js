//hidden date
document.addEventListener("DOMContentLoaded", function() {
    const formLoadDateTimeInput = document.getElementById("formLoadDateTime");
    if (formLoadDateTimeInput) {
        formLoadDateTimeInput.value = Date.now();
    } else {
        console.error("Element with ID 'formLoadDateTime' not found.");
    }


    // for membership level
    document.addEventListener('DOMContentLoaded', function () {
        fetch('chamber/members.json') 
            .then(response => response.json())
            .then(data => {

                const spotlightMembers = data.members.filter(member => member.level === 'Silver' || member.level === 'Gold').slice(0, 3);
                const membersContainer = document.querySelector('.company-spotlights');
    
                spotlightMembers.forEach(member => {
                    const memberElement = document.createElement('div');
                    memberElement.classList.add('member');
                    memberElement.innerHTML = `
                        <h3>${member.name}</h3>
                        <p>Level: ${member.level}</p>
                    `;
                    membersContainer.appendChild(memberElement);
                });
            })
            .catch(error => console.error('Error fetching member data:', error));
    });
    
});