// Cryptovaluta data
const cryptos = [
    { name: 'Bitcoin', price: 90000, invested: 0 },
    { name: 'Ethereum', price: 4800, invested: 0 },
    { name: 'Litecoin', price: 250, invested: 0 },
  ];
  
  // Selectoren
  const cryptoList = document.getElementById('cryptoList');
  const cryptoSelect = document.getElementById('cryptoSelect');
  const cryptoAmount = document.getElementById('cryptoAmount');
  const cryptoMessage = document.getElementById('cryptoMessage');
  
  // Initialisatie
  function init() {
    cryptos.forEach((crypto, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = crypto.name;
      cryptoSelect.appendChild(option);
  
      updateCryptoList();
    });
  }
  
  // Update overzicht
  function updateCryptoList() {
    cryptoList.innerHTML = '';
    cryptos.forEach((crypto) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <span>${crypto.name}: €${crypto.invested.toFixed(2)} (${crypto.price} per eenheid)</span>
      `;
      cryptoList.appendChild(div);
    });
  }
  
  // Cryptodetails
  function updateCryptoDetails() {
    cryptoAmount.value = '';
    cryptoMessage.textContent = '';
  }
  
  // Kopen
  function buyCrypto() {
    const selectedCrypto = cryptos[cryptoSelect.value];
    const amount = parseFloat(cryptoAmount.value);
    if (isNaN(amount) || amount <= 0) {
      cryptoMessage.textContent = 'Voer een geldig bedrag in.';
      cryptoMessage.className = 'message error';
      return;
    }
  
    selectedCrypto.invested += amount;
    updateCryptoList();
    cryptoMessage.textContent = `Je hebt €${amount.toFixed(2)} in ${selectedCrypto.name} geïnvesteerd.`;
    cryptoMessage.className = 'message success';
  }
  
  // Verkopen
  function sellCrypto() {
    const selectedCrypto = cryptos[cryptoSelect.value];
    const amount = parseFloat(cryptoAmount.value);
    if (isNaN(amount) || amount <= 0 || amount > selectedCrypto.invested) {
      cryptoMessage.textContent = 'Onvoldoende investering beschikbaar.';
      cryptoMessage.className = 'message error';
      return;
    }
  
    selectedCrypto.invested -= amount;
    updateCryptoList();
    cryptoMessage.textContent = `Je hebt €${amount.toFixed(2)} in ${selectedCrypto.name} verkocht.`;
    cryptoMessage.className = 'message success';
  }
  
  init();
  
  