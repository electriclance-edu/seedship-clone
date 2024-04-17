class Tier {
    static tiers = {
        resources:[],
        food:[],
        freshwater:[],
        light:[]
    };
    att;
    degree; // Red, yellow, green, blue
    descriptor; // Scant, modest, bountiful, extreme
    name; // ie. "Crystals"
    tags; // Extra identifiers
    
    constructor(att,degree,descriptor,name = "",tags = "") {
        this.att = att;
        this.degree = degree;
        this.descriptor = descriptor;
        this.name = name;
        this.tags = tags;
        
        Tier.tiers[att].push(this);
    }
}
class Situation {
    logs = [];
    constructor() {
        for (var i = 0; i < arguments.length; i++) {
            let item = arguments[i];
            if (typeof item == "string") item = new Log("reset",item);
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
    constructor(type = "reset") {
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

class Stat {
    startingValue;
    minimum;
    redThreshold;
    yellowThreshold;
    greenThreshold;
    value;
    constructor(name, startingValue, minimum, redThreshold, yellowThreshold, greenThreshold) {
        this.name = name;
        this.startingValue = startingValue;
        this.value = startingValue;
        this.minimum = minimum;
        this.redThreshold = redThreshold;
        this.yellowThreshold = yellowThreshold;
        this.greenThreshold = greenThreshold;
    }
    getState() {
        return this.value <= this.redThreshold    ? "red"    :
               this.value <= this.yellowThreshold ? "yellow" :
               this.value <= this.greenThreshold  ? "green"  :
               "blue";
    }
    set(value) {
        this.value = value;
    }
    increment(value) {
        this.value += value;
    }
}
class Player {
    static statues = new Stat(
        'statues',
        1000,0
    );
    static years = new Stat(
        'years',
        0,0
    );
    static knowledge = new Stat(
        'knowledge',
        100,0,
        33,66,100
    );
    static tradition = new Stat(
        'tradition',
        100,0,
        33,66,100
    );
    static supplies = new Stat(
        'supplies',
        100,0,
        33,66,100
    );
    static hull = new Stat(
        'hull',
        100,0,
        33,66,100
    );
    static muscle = new Stat(
        'muscle',
        100,0,
        33,66,100
    );
    static bone = new Stat(
        'bone',
        100,0,
        33,66,100
    );

    static resetStats() {
        Player.setStat("statues",1000);
        Player.setStat("years",0);
        Player.setStat("knowledge",100);
        Player.setStat("tradition",100);
        Player.setStat("supplies",0);
        Player.setStat("hull",100);
        Player.setStat("muscle",100);
        Player.setStat("bone",100);
    }
    static setStat(stat, val) {
        this[stat].set(val);
        updateStatElem(this[stat]);
    }
    static incrementStat(stat, val) {
        this[stat].increment(val);
        updateStatElem(this[stat]);
    }
}
class Land {
    att; // Dictionary of tiers, corresponding to resources, food, freshwater, and light.
    type;

    constructor(att,type) {
        this.att = att;
        this.type = type;
    }
    static generateLand() {
        return new Land(
            {
                resources: randElem(Tier.tiers["resources"]),
                food:      randElem(Tier.tiers["food"]),
                freshwater:randElem(Tier.tiers["freshwater"]),
                light:     randElem(Tier.tiers["light"]),
            },
            randElem(["Island Chain","Mountain","Mountain","Mountain","Island","Island","Island","Shallows"])
        )
    }
}