writeups_json = {
    "2023": {
        "Texas Security Awareness Week": [
            "Lost Visual",
            "Image Extraction",
            "Mail"
        ]
    },
    "2022": {
        "n00bzCTF": [
            "Mark That Down",
            "Curl as a Service"
        ]
    }
};

let writeups = document.getElementById("writeups");
let writeups_tree = document.createElement("nav");
writeups_tree.className = "tree-nav";
parse(writeups_tree, writeups_json);
writeups.appendChild(writeups_tree);

