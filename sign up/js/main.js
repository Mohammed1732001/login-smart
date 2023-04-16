let signUpName = document.getElementById("signName")
let signUpEmail = document.getElementById("signEmail")
let signUpPassword = document.getElementById("signPassword")
let user = []


if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"))
}


function add() {
    if (signUpName.value == " " || signUpEmail.value == "" || signUpPassword.value == "") {
        document.getElementById("message").innerHTML = "<p class = 'text-danger text-center'>All inputs is required</p>"

    } else {
        let object = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
        }
        user.push(object)
        location.href = "../Login/index.html"
        localStorage.setItem("user", JSON.stringify(user))
    }
}