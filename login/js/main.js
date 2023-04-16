let user = []
user = JSON.parse(localStorage.getItem("user"))
let signinEmail=document.getElementById ("signEmail")
let signinPassword=document.getElementById ("signPassword")



document.getElementById("login").addEventListener( "click", function (){
    if(signinEmail.value == '' || signinPassword.value == '') {

        document.getElementById('message').innerHTML = `<p class ='text-danger text-center'>All inputs is required</p>`;
    }
    else{
        check()      
    }
})

function check(){
    for(var i=0 ; i<user.length;i++){
        if(signinEmail.value == user[i].email && signinPassword.value == user[i].password){
            var x= user[i].name ;
            localStorage.setItem('userName',x);
            location.href = '../home/index.html';

        }

    }
    
}
