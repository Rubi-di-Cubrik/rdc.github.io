let members_discord_ids = [
    "536798044939878403",
    "649350001079615491",
    "723875572622557194",
    "545158792891990016",
    "717113000024080466",
    "290522233611354113",
    "262679667134300162",
    "1064158930340692058",
    "465501045007712257",
    "201375685992906752",
    "690665428963426414",
    "814444722579963915",
    "582108359927529472",
    "575687473003233280",
    "652569634343747586",
    "428240634407813131",
    "343502456233394179",
    "421047534392180756",
    "565651758617985027",
    "691564968687960114",
    "495989571780345876",
    "679753728752091166",
    "770558769490165780",
    "457124182858268673",
    "329566380070404097",
    ""
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(members_discord_ids);

let members_div = document.getElementById("members");

function get_default_avatar(){
    let arr = ["Tribal-Indigo.png", "Tribal-Blue.png", "Tribal-Green.png", "Tribal-Orange.png", "Tribal-Pink.png", "Tribal-Red.png", "Tribal-Violet.png", "Tribal-Yellow.png"]
    return arr[parseInt(Math.random() * (arr.length - 1)) + 1];
}

for(let i in members_discord_ids){
    fetch(`https://discordlookup.mesavirep.xyz/v1/user/${members_discord_ids[i]}`).then(async response => await response.json()).then(async data => {
        let member_div = document.createElement("div");
        member_div.style.display = "inline-block";
        member_div.style.margin = "10px";
        let img = document.createElement("img");
        let global_username = document.createElement("h3");
        let alias = document.createElement("h4");
        if(screen.width >= 768){
            member_div.style.width = "170px";
        }else{
            member_div.style.width = "100px";
            img.style.width = "80px";
            global_username.style.fontSize = "small";
            alias.style.fontSize = "small";
        }
        img.style.borderRadius = "20px";
        img.src = await data.avatar.link || `./static/imgs/discord-default-pfps/${get_default_avatar()}`;
        global_username.textContent = await data.global_name;
        alias.textContent = await data.username;
        member_div.appendChild(img);
        member_div.appendChild(global_username);
        member_div.appendChild(alias);
        members_div.appendChild(member_div);
    });
}