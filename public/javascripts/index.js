var coll_btn = document.getElementsByClassName("collapsiable-button");
var coll_cont = document.getElementsByClassName("collapsiable-content");

class collapsiable {

    constructor(button, content) {
        button.addEventListener("click", () => {

            if(content.style.maxHeight) {
                content.style.maxHeight = null;
                button.children[0].innerHTML = "Läs mer";
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
                button.children[0].innerHTML = "Stäng";
              } 
        })
    }
}

new collapsiable(coll_btn[0],coll_cont[0]);
new collapsiable(coll_btn[1],coll_cont[1]);

axios.post("/pa",{"pswd": pswd}).then(res => 
    {
    
})

