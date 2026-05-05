const username = 
document.getElementById("username");
const email = 
document.getElementById("email");
const password =
document.getElementById("password");

const userError =
document.getElementById("userError");
const emailError =
document.getElementById("emailError");
const passError =
document.getElementById("passError");

const button =
document.getElementById("submitBtn");
const togglePassword =
document.getElementById("togglePassword");


togglePassword.addEventListener("click",() =>{
    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
});


function validate(){
    let valid = true;


if (username.value.trim() === ""){
    userError.innerText = "Username required";

    valid = false;
} else {
    userError.innerText = "";
}


if (!email.value.includes("@")){
    emailError.innerText = "Enter valid email";
    valid = false;
} else {
    emailError.innerText = "";
}

if (password.value.length < 6){
    passError.innerText = "Minimum 6 characters";
    valid = false;
} else {
    passError.innerText = "";
}

return valid;

}


button.addEventListener("click", () =>{

    if (validate()){

    console.log("Button clicked");

const userData = {
    username: username.value,
    email: email.value,
    password: password.value
};

console.log(userData);

    localStorage.setItem("loginData", JSON.stringify(userData));

    console.log("Saved: ", localStorage.getItem("loginData"));

        button.innerText = "Loading...";
        button.disabled = true;

        setTimeout(() => {
            button.innerText = "SUCCESS";
            button.style.background = "green";
        },2000);
    }
});