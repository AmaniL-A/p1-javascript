// Functie om secties te tonen/verbergen
function showSection(sectionId) {
    // Verberg alle secties
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Toon de geselecteerde sectie
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Voeg event listeners toe aan knoppen
document.querySelectorAll('button[data-section]').forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Toon standaard de eerste sectie bij het laden
showSection('rekeningen');


  