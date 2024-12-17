function generateRandomePassword(lenght){
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special =  "!@#$%^&*()_+{}[]|:;,.<>?";
    const allCharacters = upper + lower + numbers + special;
    let password = "";
    for (let i =0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random()*allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
}

const password = generateRandomePassword(12);
console.log(password);