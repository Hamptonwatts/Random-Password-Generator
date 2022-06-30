const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
let passwordLength = 15

function mainRandom() {
    function getRandomCharacter() {
        let randomCharacter = Math.floor(Math.random() * characters.length)
        return characters[randomCharacter]
    }

    function getRandomPassword() {
        let randomPassword = ""
        for (let i = 0; i < passwordLength; i++) {
                randomPassword += getRandomCharacter()
        }
        return randomPassword;
        }

    let getPassword1 = getRandomPassword();
    let getPassword2 = getRandomPassword();
        
    passwordOne.innerText = getPassword1
    passwordTwo.innerText = getPassword2
}