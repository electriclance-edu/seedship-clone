// settings
const typewriteSpeedSeconds = 0.016;

function onload() {
    displaySituation("intro1");
}

// functions
function typewrite(elem, options = {}) {
    let settingSpeed = options.speed || typewriteSpeedSeconds;
    
    let text = elem.innerHTML;
    elem.style.height = getComputedStyle(elem).height;
    elem.innerHTML = "";
    
    let delay = 0;

    text.split(" ").forEach((word)=>{
        let wordElem = document.createElement("span");
        if (word != "***") {
            wordElem.innerHTML = word + " ";
            delay += word.length * typewriteSpeedSeconds;
        } else {
            wordElem.innerHTML = "";
            delay += 30 * typewriteSpeedSeconds;
        }
        wordElem.style.opacity = "0";
        wordElem.style.animation = "0.3s fadein ease-in forwards";
        wordElem.style.animationDelay = delay + "s";
        elem.appendChild(wordElem);
    });
}

function displaySituation(id) {
    if (!allSituations.hasOwnProperty(id)) {
        console.warn(`displaySituation(): Attempted to display situation of id "${id}", however no such situation exists.`);
    }

    let choices = document.getElementById("Choices");
    choices.innerHTML = "";

    let situation = allSituations[id];
    for (var i in situation.logs) {
        displayLog(situation.logs[i]);
    }
}
function displayLog(log) {
    if (log.type == "reset") {
        let container = document.getElementById("Log");
        container.innerHTML = "";
        let elem = document.createElement("p");
        elem.innerHTML = log.data;
        container.prepend(elem);  
        typewrite(elem); 
    } else if (log.type == "add") {
        let container = document.getElementById("Log");
        let elem = document.createElement("p");
        elem.innerHTML = log.data;
        container.prepend(elem);
        typewrite(elem);
    } else if (log.type == "choice") {
        let container = document.getElementById("Choices");
        container.innerHTML = "";
        for (var i in log.data) {
            let elem = log.data[i].elem();
            container.append(elem);
            typewrite(elem);
        }
    }
}
function startGame() {
    document.getElementById("Top").classList.remove("state-hidden");
    displaySituation("first")
}