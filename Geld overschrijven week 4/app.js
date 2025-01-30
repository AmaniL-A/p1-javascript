document.getElementById("transferForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fromAccount = document.getElementById("fromAccount");
    const toAccount = document.getElementById("toAccount").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const balance = parseFloat(fromAccount.value);

    const feedbackSection = document.getElementById("feedback");
    const successMessage = document.getElementById("successMessage");
    const successImage = document.getElementById("successImage");

    // Validatie: controleer saldo
    if (amount <= 0 || isNaN(amount)) {
        alert("Voer een geldig bedrag in.");
        return;
    }

    if (amount > balance) {
        alert("Onvoldoende saldo op de geselecteerde rekening.");
        return;
    }

    // Toon succesbericht
    successMessage.textContent = `€${amount.toFixed(2)} is succesvol overgeschreven van ${fromAccount.options[fromAccount.selectedIndex].text} naar ${toAccount}.`;
    successImage.src = "success.png"; // Zorg dat dit pad correct is
    feedbackSection.style.display = "block";

    // Verminder saldo in dropdown (simulatie)
    fromAccount.value = (balance - amount).toFixed(2);
});
