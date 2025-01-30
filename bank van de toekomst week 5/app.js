const transactions = [
    { id: 1, type: 'inkomend', datum: '2024-11-01', bedrag: 150.00 },
    { id: 2, type: 'uitgaand', datum: '2024-11-03', bedrag: -50.00 },
    { id: 3, type: 'inkomend', datum: '2024-11-05', bedrag: 200.00 },
    { id: 4, type: 'uitgaand', datum: '2024-11-10', bedrag: -30.00 }
  ];
  
  // Functie om transacties weer te geven
  function displayTransactions(filteredTransactions) {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';
    filteredTransactions.forEach(transaction => {
      const transactionItem = document.createElement('div');
      transactionItem.classList.add('transaction-item');
      transactionItem.classList.add(transaction.type === 'inkomend' ? 'incoming' : 'outgoing');
      transactionItem.innerHTML = `
        <span>Type: ${transaction.type}</span>
        <span>Datum: ${transaction.datum}</span>
        <span>Bedrag: €${transaction.bedrag.toFixed(2)}</span>
      `;
      transactionList.appendChild(transactionItem);
    });
  }
  
  // Functie om transacties te filteren
  function filterTransactions() {
    const typeFilter = document.getElementById('typeFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;
    let filteredTransactions = transactions;
  
    if (typeFilter !== 'alle') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.type === typeFilter);
    }
  
    if (dateFilter) {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.datum === dateFilter);
    }
  
    displayTransactions(filteredTransactions);
  }
  
  // Initialiseer met alle transacties
  displayTransactions(transactions);
  