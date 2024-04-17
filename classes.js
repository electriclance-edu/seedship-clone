class Tier {
    degree; // Red, yellow, green, pink
    descriptor; // Scant, modest, bountiful, extreme
    name; // ie. "Crystals"
    tags; // Extra identifiers
    
    constructor(degree,descriptor,name = "",tags = "") {
        this.degree = degree;
        this.descriptor = descriptor;
        this.name = name;
        this.tags = tags;
    }
}
class Situation {
    logs = [];
    constructor() {
        for (var i = 0; i < arguments.length; i++) {
            let item = arguments[i];
            if (typeof item == "string") item = new Log(i == 0 ? "reset" : null,item);
            this.logs.push(item);
        }
    }
}
class Log {
    type; 
    // add [adds to already existing text]
    // reset [clears the log first]
    // choice [displays choices at the bottom]
    data;
    constructor(type="add") {
        this.type = type;
        this.data = [...arguments];
        this.data.shift();
    }
}
class Option {
    text;
    effect;
    constructor(text, effect) {
        this.text = text;
        this.effect = effect;
    }
    elem() {
        let e = document.createElement("div");
        e.onclick = ()=>{
            this.call();
        }
        e.innerHTML = this.text;
        return e;
    }
    call() {
        this.effect();
    }
}