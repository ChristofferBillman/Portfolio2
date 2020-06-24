submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    var pswd = document.getElementById("pswd").value

    axios.post("/password",{"pswd": pswd}).then(res => 
        {
        console.log(res)
        setCookie("token",res.data.token,10)
        location.reload();  
    })
})

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }