function instance(v){
    if(Array.isArray(v)){
        return 1;
    }else{
        return 2;
    }
}

function parse(root, json){
    for(let key in json){
        let r = document.createElement("details");
        r.className = "tree-nav__item is-expandable";
        let sum = document.createElement("summary");
        sum.className = "tree-nav__item-title";
        sum.textContent = key;
        r.appendChild(sum);
        if(instance(json[key]) == 2){
            parse(r, json[key]);
        }else{
            let div = document.createElement("div");
            div.className = "tree-nav__item";
            for(let i in json[key]){
                let anchor = document.createElement("a");
                anchor.className = "tree-nav__item-title";
                anchor.textContent = json[key][i];
                div.appendChild(anchor);
            }
            r.appendChild(div);
        }
        root.appendChild(r);
    }
}
