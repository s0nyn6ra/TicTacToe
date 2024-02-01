var correctUsernames = ["sofia123"];
var correctPasswords = ["12345"];

var loginButton = document.getElementById("login_button");
console.log({loginButton})

function login() {

    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    // Check if the entered username and password are correct
    if (validateInput(enteredUsername, enteredPassword)) {
        alert("Logged in successfully!");

        // Redirect to homepage.html
        window.location.href = "homepage.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

loginButton.addEventListener("click", () => {
        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;

        // Check if the entered username and password are correct
        if (validateInput(enteredUsername, enteredPassword)) {
            alert("Logged in successfully!");

            // Redirect to homepage.html
            window.location.href = "homepage.html";
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });

function validateInput(username, password) {
    // Check if the fields are not empty
    if (username && password) {
        // Check if the entered username and password are correct
        for (var i = 0; i < correctUsernames.length; i++) {
            if (username === correctUsernames[i] && password === correctPasswords[i]) {
                return true;
            }
        }
        return false; // If the loop finishes and no correct username and password are found
    } else {
        alert("Please fill in all fields.");
        return false;
    }
}
