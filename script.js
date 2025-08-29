const SEARCH_STRING = "[SeeMTA - Siker]: Sikeresen lezártad az ügyet!";

const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');
const resultCard = document.getElementById('resultCard');
const resultCountDisplay = document.getElementById('resultCount');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        fileNameDisplay.textContent = `Kiválasztott fájl: ${file.name}`;
        
        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = (e) => {
            const content = e.target.result;
            const occurrences = content.match(new RegExp(SEARCH_STRING.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || [];
            const count = occurrences.length;

            resultCountDisplay.textContent = count;
            resultCard.style.display = 'block';
        };

        reader.onerror = () => {
            fileNameDisplay.textContent = 'Hiba történt a fájl olvasása közben.';
            resultCard.style.display = 'none';
        };
    }
});
