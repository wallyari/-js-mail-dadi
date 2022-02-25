//Email

let allowedEmail = [
    "brontolo@gmail.com","cucciolo@gmail.com",
    "dotto@gmail.com","eolo@gmail.com",
    "gongolo.com","mammolo@gmail.com",
    "pisolo.com"];
    
    let email = document.getElementById("email");
    let btnVerify = document.getElementById("my-btn");
    let message = document.getElementById("message");
    
    btnVerify.addEventListener("click", function(){
        for(let i = 0; i < allowedEmail.length; i++){
    
            if(allowedEmail.value == email[i]){
            message.innerHTML = "Ci sei."
        }
    
            else{
                message.innerHTML = "Non ci sei, riprova."
            }
        }
    });