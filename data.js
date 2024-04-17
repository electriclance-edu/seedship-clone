var resources = {
    resources:[new Tier("red","scant")]
}
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
        new Log("add","The earth shook as she arose, nine legs carrying her weight and more. Setting her thousand eyes to the desolate ocean before her, she began the first of many steps."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro5")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro5:new Situation(
        new Log("add","She looked into herself with her in-eyes. On her stood the Archive, a frenetic gathering of millions of records, all scientific knowledge humanity could gather before their fall. *** Beside it was the Repository, the unimaginably large vault of cultural artifacts that would guide the survivors to create a wise civilization. *** And deep inside her lied those very survivors. They did not sway as she walked, but she feared for them all the same. Their stone eyes seemed to look back at her, awaiting their shepherd to lead them."),
        new Log(
            "choice",
            new Option("Continue",()=>{displaySituation("intro6")}),
            new Option("Skip",()=>{startGame()}),
        )
    ),
    intro6:new Situation(
        new Log("add","To a direction beyond the darkness, *** across the Infinite Sea, *** in search of a land of light."),
        new Log(
            "choice",
            new Option("Start Trek",()=>{startGame()}),
        )
    ),
    first:new Situation(
        "The Infinite Ocean extends far into the darkness. As you walk, a part of you is aware of the emptiness of it; water upon water upon water. But humanity wrote of myths of lands beyond it, of islands that could possibly host civilization once more. Your existence banks on that myth."
    )
}