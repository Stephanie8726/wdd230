//   number of visits - discover.html
function welcomeMessage(){

    let lastVisit = localStorage.getItem("lastVisit") || Date.now();
    let currentDate = Date.now();
    const dayMs = 86400000;

    if (lastVisit == currentDate){
        localStorage.setItem("lastVisit", currentDate);
        return "Welcome! Let us know if you have any questions.";
    }
    else if ((currentDate - lastVisit) / dayMs < 1 ){
        localStorage.setItem("lastVisit", currentDate);
        return "Back so soon! Awesome!🎉";
    }
    else{
        localStorage.setItem("lastVisit", currentDate);
        return `You last visited ${(lastVisit/dayMs).toFixed(0)} days ago.`;
    }
}

document.querySelector("#message").innerHTML = welcomeMessage();