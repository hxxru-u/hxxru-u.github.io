document.addEventListener('DOMContentLoaded', function() {
    const dropcap = document.querySelector('span.dropcap');
    if (!dropcap) return;

    const letter = dropcap.textContent.trim().toLowerCase();
    const availableLetters = ['a', 'b', 'c', 'f', 'g', 'i', 'q', 't', 'v'];
    
    if (availableLetters.includes(letter)) {
        // Set styles first
        dropcap.style.display = 'inline-block';
        dropcap.style.width = '3.5em';  // Match the font-size we were using before
        dropcap.style.height = '3.5em';
        dropcap.style.verticalAlign = 'middle';
        dropcap.style.marginRight = '0.1em';
        dropcap.style.marginBottom = '-0.1em';

        // Fetch and insert the SVG content directly
        fetch(`/assets/fonts/dropcaps/svg-dropcaps/${letter}.svg`)
            .then(response => response.text())
            .then(svgContent => {
                // Create a temporary div to parse the SVG
                const div = document.createElement('div');
                div.innerHTML = svgContent;
                const svg = div.querySelector('svg');
                
                if (svg) {
                    // Ensure SVG has proper attributes
                    svg.setAttribute('width', '100%');
                    svg.setAttribute('height', '100%');
                    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    
                    // Force the fill color through inline style
                    const elements = svg.querySelectorAll('path, use, symbol, g');
                    elements.forEach(el => {
                        el.style.fill = 'currentColor';
                        el.style.color = 'currentColor';
                    });
                    
                    dropcap.innerHTML = svg.outerHTML;
                    dropcap.classList.add('dropcap-svg');
                }
            })
            .catch(error => {
                console.log('Error loading SVG:', error);
                // Keep the text fallback if SVG fails to load
            });
    }
});
