// Constante lijst met gebruikers en wachtwoorden
const users = [
    { username: "admin", password: "1234" },
    { username: "Amani", password: "Amani123" },
    { username: "gebruiker2", password: "wachtwoord2" }
];

// Event listener voor het formulier
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Voorkom standaard formulierverzending

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Controleer of de ingevoerde gegevens overeenkomen met een gebruiker in de lijst
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Inloggen succesvol! Welkom, " + username + ".");
        console.log("Ingelogd als:", username);
        // Hier kun je bijvoorbeeld de gebruiker doorsturen naar een andere pagina:
        // window.location.href = "dashboard.html";
    } else {
        alert("Onjuiste gebruikersnaam of wachtwoord. Probeer opnieuw.");
    }
});

