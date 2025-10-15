// Get references to HTML elements
const urlInput = document.getElementById('urlInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultsContainer = document.getElementById('resultsContainer');

analyzeBtn.addEventListener('click', () => {
    const url = urlInput.value;

    if (!url) {
        alert('Please enter a URL.');
        return;
    }

    resultsContainer.innerHTML = `<div class="loading">Analyzing... Please wait.</div>`;

    setTimeout(() => {
        
        const fakeData = {
            accessibilityScore: 85,
            colorContrast: 'Passed',
            imageAltTags: {
                status: 'Fail',
                details: '3 out of 10 images are missing alt tags.'
            },
            readabilityLevel: 'Good'
        };

        // Display the results
        displayResults(fakeData);

    }, 2000); 
});


function displayResults(data) {
    // Clear the loading message
    resultsContainer.innerHTML = '';

    // Create and append results to the container
    resultsContainer.innerHTML = `
        <div class="result-item">
            <h3>Accessibility Score</h3>
            <p class="${data.accessibilityScore > 80 ? 'status-pass' : 'status-fail'}">${data.accessibilityScore} / 100</p>
        </div>
        <div class="result-item">
            <h3>Color Contrast</h3>
            <p class="${data.colorContrast === 'Passed' ? 'status-pass' : 'status-fail'}">${data.colorContrast}</p>
        </div>
        <div class="result-item">
            <h3>Image Alt Tags</h3>
            <p class="${data.imageAltTags.status === 'Pass' ? 'status-pass' : 'status-fail'}">${data.imageAltTags.status}</p>
            <small>${data.imageAltTags.details}</small>
        </div>
        <div class="result-item">
            <h3>Readability Level</h3>
            <p class="status-pass">${data.readabilityLevel}</p>
        </div>
    `;
}