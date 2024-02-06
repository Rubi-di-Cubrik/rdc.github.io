if(screen.width >= 1030){
    title = `\
/$$$$$$$            /$$       /$$             /$$ /$$        /$$$$$$            /$$                 /$$ /$$       
| $$__  $$          | $$      |__/            | $$|__/       /$$__  $$          | $$                |__/| $$      
| $$  \\ $$ /$$   /$$| $$$$$$$  /$$        /$$$$$$$ /$$      | $$  \\__/ /$$   /$$| $$$$$$$   /$$$$$$  /$$| $$   /$$
| $$$$$$$/| $$  | $$| $$__  $$| $$       /$$__  $$| $$      | $$      | $$  | $$| $$__  $$ /$$__  $$| $$| $$  /$$/
| $$__  $$| $$  | $$| $$  \\ $$| $$      | $$  | $$| $$      | $$      | $$  | $$| $$  \\ $$| $$  \\__/| $$| $$$$$$/ 
| $$  \\ $$| $$  | $$| $$  | $$| $$      | $$  | $$| $$      | $$    $$| $$  | $$| $$  | $$| $$      | $$| $$_  $$ 
| $$  | $$|  $$$$$$/| $$$$$$$/| $$      |  $$$$$$$| $$      |  $$$$$$/|  $$$$$$/| $$$$$$$/| $$      | $$| $$ \\  $$
|__/  |__/ \\______/ |_______/ |__/       \\_______/|__/       \\______/  \\______/ |_______/ |__/      |__/|__/  \\__/\
`
}else{
    title = `\
/$$$$$$$        /$$  /$$$$$$  
| $$__  $$      | $$ /$$__  $$
| $$  \\ $$  /$$$$$$$| $$  \\__/
| $$$$$$$/|/$$__  $$| $$      
| $$__  $$| $$  | $$| $$      
| $$  \\ $$| $$  | $$| $$    $$
| $$  | $$|  $$$$$$$|  $$$$$$/
|__/  |__/ \\_______/ \\______/ 
`
}

title_arr = []

function rdc_splitString(str, n) {
    const chunks = [];
    const numChunks = Math.ceil(str.length / n);
    let start, end;
    for (let i = 0; i < numChunks; i++) {
        if(i == numChunks - 1 && numChunks > 3){
            start = end;
        }else{
            start = i * n;
        }
        if(i == numChunks - 2 && numChunks > 3){
            end = start + 4;
        }
        else{
            end = start + n;
        }
        const chunk = str.substring(start, end);
        chunks.push(chunk);
    }
    return chunks;
}

for(let i in title.split("\n")){
    let line = title.split("\n")[i];
    let chunks = rdc_splitString(line, 10);
    for(let j in chunks){
        if(i == 0){
            title_arr[j] = chunks[j]+"\n";
        }else{
            title_arr[j] += chunks[j]+"\n";
        }
    }
}

function updateText(old_text, text_to_add){
    let new_text = "";
    let old_text_splitted = old_text.split("\n"), text_to_add_splitted = text_to_add.split("\n");
    if(old_text === ""){
        new_text = text_to_add;
    }else{
        for(let i in text_to_add_splitted){
            new_text += old_text_splitted[i] + text_to_add_splitted[i] + "\n";
        }
    }
    return new_text;
}

i = 0;

function print_title(){
    if(i < title_arr.length){
        let obj = document.getElementById("title");
        let newTextContent = updateText(obj.textContent, title_arr[i]);
        obj.textContent = newTextContent;
        i++;
        setTimeout(print_title, 200);
    }
}

print_title();

// document.getElementById("title").textContent = title;