function checkLogin(){
    let userlogin = document.getElementsByName("login")[0]
    let pass = document.getElementsByClassName("pass")[0]

    if(userlogin.value == "admin"){
        userlogin.classList.remove("invalid")
        userlogin.classList.add("valid")

        pass.classList.add("visible")
    } else{
        userlogin.classList.remove("valid")
        userlogin.classList.add("invalid")
        pass.classList.remove("visible")
    }
}