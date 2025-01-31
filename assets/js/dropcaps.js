document.addEventListener('DOMContentLoaded', function() {
    const dropcap = document.querySelector('span.dropcap');
    if (!dropcap) return;

    const letter = dropcap.textContent.trim().toLowerCase();
    const availableLetters = ['a', 'b', 'c', 'f', 'g', 'i', 'q', 't', 'v'];
    
    if (availableLetters.includes(letter)) {
        fetch(`/assets/fonts/dropcaps/svg-dropcaps/${letter}.svg`)
            .then(response => response.text())
            .then(svgContent => {
                // Extract the SVG content from the font file
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
                const glyph = svgDoc.querySelector('glyph');
                if (glyph) {
                    const pathData = glyph.getAttribute('d');
                    const svgString = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <path d="${pathData}" fill="currentColor"/>
                    </svg>`;
                    dropcap.innerHTML = svgString;
                    dropcap.classList.add('dropcap-svg');
                }
            })
            .catch(error => {
                console.log('Error loading SVG:', error);
                // Keep the text fallback if SVG fails to load
            });
    }
});
