function valideteForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword){
        alert("All fields must be filled.")
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.text(email)){
        alert("Wrong email format.")
        return false
    }
    const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordStrengthRegex.test(password)) {
        alert("The password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters.");
        return false;
    }

    if (password !== confirmPassword){
        alert("Password dont match")
        return false;
    }

    alert("Form successfully submitted!")
    return true;

}