let balance = 1000.00; // Begin saldo
let investments = {
  aandelen: {
    TechCorp: { price: 200.00, owned: 2 },
    FinBank: { price: 80.00, owned: 0 }
  },
  crypto: {
    Bitcoin: { price: 35000.00, owned: 0 },
    Ethereum: { price: 2200.00, owned: 0 }
  }
};

function updateProducts() {
  const category = document.getElementById("category").value;
  const productSelect = document.getElementById("product");

  productSelect.innerHTML = ""; // Maak select leeg

  for (let product in investments[category]) {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
  }

  updatePrice();
}

function updatePrice() {
  const category = document.getElementById("category").value;
  const product = document.getElementById("product").value;
  const currentPrice = investments[category][product].price;
  const ownedUnits = investments[category][product].owned;

  document.getElementById("currentPrice").textContent = `€${currentPrice.toFixed(2)}`;
  document.getElementById("ownedUnits").textContent = `${ownedUnits} eenheden`;
}

function buyInvestment() {
  const category = document.getElementById("category").value;
  const product = document.getElementById("product").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const currentPrice = investments[category][product].price;

  if (isNaN(amount) || amount <= 0) {
    showMessage("Voer een geldig bedrag in.", "error");
    return;
  }

  if (balance < amount) {
    showMessage("Onvoldoende saldo.", "error");
    return;
  }

  const units = Math.floor(amount / currentPrice); // Aantal eenheden dat gekocht kan worden
  investments[category][product].owned += units;
  balance -= units * currentPrice;

  updatePrice();
  updateBalance();
  showMessage(`Je hebt €${(units * currentPrice).toFixed(2)} geïnvesteerd in ${product}.`, "success");
}

function sellInvestment() {
  const category = document.getElementById("category").value;
  const product = document.getElementById("product").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const currentPrice = investments[category][product].price;

  if (isNaN(amount) || amount <= 0) {
    showMessage("Voer een geldig bedrag in.", "error");
    return;
  }

  const unitsToSell = Math.floor(amount / currentPrice); // Aantal eenheden dat verkocht kan worden

  if (investments[category][product].owned < unitsToSell) {
    showMessage("Onvoldoende eenheden om te verkopen.", "error");
    return;
  }

  investments[category][product].owned -= unitsToSell;
  balance += unitsToSell * currentPrice;

  updatePrice();
  updateBalance();
  showMessage(`Je hebt €${(unitsToSell * currentPrice).toFixed(2)} verdiend met de verkoop van ${product}.`, "success");
}

function updateBalance() {
  document.getElementById("balance").textContent = `€${balance.toFixed(2)}`;
}

function showMessage(message, type) {
  const messageElement = document.getElementById("investmentMessage");
  messageElement.textContent = message;
  messageElement.className = `message ${type}`;
}

// Initialiseer
updateProducts();
