var buttons = document.getElementsByClassName("status-button");
var status = 0;

console.log(buttons)

for(var i = 0; i < buttons.length; i++) {
    button = buttons[i];

    button.addEventListener("click", (button) => {

        console.log("Hek")
        console.log(status)

        axios.post("/status",{"pstatus": i}).then(res => 
            {
                document.createElement("card")
                console.log(res)
                console.log(res.data.pstatus)
        })
    })
}