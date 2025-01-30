const rekeningen = [
  { naam: "Betaalrekening", saldo: 1500 },
  { naam: "Spaarrekening", saldo: 3200.50 },
];

function updateRekeningen() {
  const rekeningLijst = document.getElementById("rekening-lijst");
  rekeningLijst.innerHTML = "";
  rekeningen.forEach((rekening) => {
    const item = document.createElement("div");
    item.classList.add("rekening-item");
    item.innerHTML = `
      <span>${rekening.naam}</span>
      <span>€${rekening.saldo.toFixed(2)}</span>
    `;
    rekeningLijst.appendChild(item);
  });
}

document.getElementById("nieuwe-rekening-btn").addEventListener("click", () => {
  document.getElementById("rekening-form").classList.remove("hidden");
});

document.getElementById("annuleer-btn").addEventListener("click", () => {
  document.getElementById("rekening-form").classList.add("hidden");
});

document.getElementById("form-nieuwe-rekening").addEventListener("submit", (e) => {
  e.preventDefault();
  const naam = document.getElementById("rekening-naam").value;
  const saldo = parseFloat(document.getElementById("rekening-saldo").value);
  rekeningen.push({ naam, saldo });
  updateRekeningen();
  document.getElementById("rekening-form").classList.add("hidden");
});

updateRekeningen();

  