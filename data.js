var allSituations = {
    intro1:new Situation(
        "And when the last night settled, the Worldwalker began her trek.",
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro2")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro2:new Situation(
        new Log("add","On her vast back she bore the last village of humanity, built in desperation before the light faded."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro3")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro3:new Situation(
        new Log("add","Within her halls lie a thousand statues, the last survivors in magical sleep. They were her heart---much in the same way a mortal creature could not live without one, she would have no reason to continue if they were broken."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro4")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro4:new Situation(
        new Log("add","There was a simple goal she was imbued with, one that was never spoken but was imbued in every spell made and tear cried the constructors left within her. She would find a home for new humanity and awaken them from sleep."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro4")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro4:new Situation(
        new Log("add","The earth shook as she arose, nine leg-towers carrying her weight and more. Setting her thousand eyes to the desolate ocean before her, she began the first of many steps."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro5")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro5:new Situation(
        new Log("add","She peered at herself with her in-eyes. On her she saw the Archive, a messy gathering of millions of records, all scientific knowledge humanity could gather before their fall. *** Beside it towered the Repository, the unimaginably large vault of cultural artifacts that would guide the survivors to create a wise civilization. *** And deep inside her lied those very survivors."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro6")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro6: new Situation(
        new Log("add","They did not sway as she walked, but she feared for them all the same. Their stone eyes seemed to look back at her, awaiting their shepherd to lead them."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro7")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro7:new Situation(
        new Log("add","To a direction beyond the darkness, *** across the Infinite Sea, *** in search of a land of light."),
        new Log(
            "choice",
            new Option("Start Trek",()=>{startGame()}),
        )
    ),
    first:new Situation(
        new Log("function",()=>{Player.incrementStat("years",randInt(100) + 50)}),
        "The Infinite Ocean extends far into the darkness. As you walk, a part of you is aware of the emptiness of it; water upon water upon water. But humanity wrote of myths of lands beyond it, of islands that could possibly host civilization once more. You set your eyes, finally, on the proof of this myth.",
        new Log("land"),
        new Log(
            "choice",
            new Option("Settle",()=>{displaySituation("first")}),
            new Option("Leave land",()=>{displaySituation("first")}),
        )
    )
}

let test = `
[YOU ARRIVE AT] [YOU SET FOOT BEFORE] [YOU REST BEFORE] [YOU LAND AT] [THE SEA REVEALS] [YOU SET YOUR EYES UPON]
A
[LARGE] [SMALL] [TINY]
[ISLAND] [ISLAND CHAIN] [MOUNTAIN] [SHALLOW OCEAN]
.
{DESCRIPTION OF SIZE [Its breadth extends past the horizon, near-endless.] [You can see the other side of the shore.]}
{DESCRIPTION OF LANDMASS [The waves crash against stone cliffs reaching to the sky.] [You can see the sands below the water, rising up from the deep seafloor.]}
`


new Tier("resources","red"   ,"None"     ,"");
new Tier("resources","yellow","Modest"   ,"Magical aura",["magic"]);
new Tier("resources","yellow","Modest"   ,"Magical crystals",["magic"]);
new Tier("resources","green" ,"Rich"     ,"Magical wellspring",["magic"]);
new Tier("resources","green" ,"Rich"     ,"Magical spirits",["magic"]);
new Tier("resources","blue"  ,"Extreme"  ,"Slumbering deity",["magic"]);
new Tier("resources","yellow","Modest"   ,"Caves",["technology"]);
new Tier("resources","green" ,"Rich"     ,"Mineral caves",["technology"]);
new Tier("resources","blue"  ,"Extreme"  ,"Advanced ruins",["technology"]);

new Tier("food","red"   ,"None");
new Tier("food","red"   ,"Scant"      ,"Rot");
new Tier("food","yellow","Modest"     ,"Herd animals");
new Tier("food","yellow","Modest"     ,"Schools of fish");
new Tier("food","green" ,"Bountiful"  ,"Thriving ecosystem");
new Tier("food","blue"  ,"Overflowing","Grove of Eden");

new Tier("freshwater","red"   ,"None");
new Tier("freshwater","yellow","Modest"     ,"Underground aquifers");
new Tier("freshwater","yellow","Modest"     ,"Glaciers");
new Tier("freshwater","green" ,"Overflowing","Large lake");
new Tier("freshwater","green" ,"Overflowing","Frequent rains");

new Tier("light","red"   ,"Darkness"     ,);
new Tier("light","red"   ,"Dangerous","Piercing moonlight");
new Tier("light","yellow","Dim"      ,"Fireflies");
new Tier("light","green" ,"Bright"   ,"Bioluminescent trees");
new Tier("light","blue"  ,"Radiant"  ,"Blessed starlight");
