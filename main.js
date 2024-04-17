// settings
const typewriteSpeedSeconds = 0.005;

function onload() {
    displaySituation("intro1");
}

// functions
function typewrite(elem, options = {}) {
    let settingSpeed = options.speed || typewriteSpeedSeconds;
    
    let text = elem.innerHTML;
    elem.style.height = getComputedStyle(elem).heightheight;
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
        wordElem.style.animation = "0.5s fadein ease-in forwards";
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
    } else if (log.type == "land") {
        let container = document.getElementById("Log");
        let land = Land.generateLand();

        let landElem = document.createElement("div");
        landElem.classList.add("land");
        landElem.classList.add("lexend");
        let header = document.createElement("p");
        header.innerHTML = titalize(land.type);
        landElem.appendChild(header);
        let cols = document.createElement("div");
        cols.classList.add("land-columns");
        landElem.appendChild(cols);

        let leftCol = document.createElement("div");
        leftCol.classList.add("land-leftCol");
        let rightCol = document.createElement("div");
        rightCol.classList.add("land-rightCol");
        Object.keys(land.att).forEach((att)=>{
            let tier = land.att[att];
            let left = document.createElement("p");
            left.innerHTML = `${capitalize(tier.att)}:`;
            leftCol.appendChild(left);
            let right = document.createElement("p");
            right.classList.add(`state-${tier.degree}`)
            right.innerHTML = `${tier.name || tier.descriptor}`;
            rightCol.appendChild(right);
        });
        cols.appendChild(leftCol);
        cols.appendChild(rightCol);

        container.prepend(landElem);

    } else if (log.type == "function") {
        log.data[0]();
    } else {
        console.group("displayLog():");
        console.warn(`Received log of type "${log.type}", however no such log type exists. As such, did nothing. Full log object is as follows:`);
        console.warn(log);
        console.groupEnd();
    }
}
function startGame() {
    document.getElementById("Top").classList.remove("state-hidden");
    Player.resetStats();
    displaySituation("first")
}
function updateStatElem(stat) {
    var elem = document.getElementById(`counter-${stat.name}`);
    elem.classList.remove("state-red");
    elem.classList.remove("state-yellow");
    elem.classList.remove("state-green");
    elem.classList.remove("state-blue");
    if (stat.name == "statues" || stat.name == "years") {
        elem.innerHTML = stat.value;
    } else { 
        elem.innerHTML = stat.value + "%";
        elem.classList.add(`state-${stat.getState()}`);
    }

    elem.classList.remove("state-changed");
    setTimeout(()=>{
        elem.classList.add("state-changed");
    },16);
}
function randElem(arr) {
    return arr[randInt(arr.length - 1)];
}
function randInt(max) {
    return Math.round(Math.random() * max);
}
function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1,str.length);
}
function titalize(str) {
    let newStr = "";
    str.split(" ").forEach((word)=>{
        newStr += capitalize(word) + " ";
    })
    return newStr;
}