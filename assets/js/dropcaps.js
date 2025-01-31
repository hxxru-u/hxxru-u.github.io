document.addEventListener('DOMContentLoaded', function() {
    const dropcap = document.querySelector('span.dropcap');
    if (!dropcap) return;

    const letter = dropcap.textContent.trim().toLowerCase();
    const availableLetters = ['a', 'b', 'c', 'f', 'g', 'i', 'q', 't', 'v'];
    
    if (availableLetters.includes(letter)) {
        // Set styles first
        dropcap.style.display = 'inline-block';
        dropcap.style.width = '3.5em';
        dropcap.style.height = '3.5em';
        dropcap.style.verticalAlign = 'middle';
        dropcap.style.marginRight = '0.1em';
        dropcap.style.marginBottom = '-0.1em';

        // Fetch and process the SVG
        fetch(`/assets/fonts/dropcaps/svg-dropcaps/${letter}.svg`)
            .then(response => response.text())
            .then(svgContent => {
                // Create a temporary div to parse the SVG
                const div = document.createElement('div');
                div.innerHTML = svgContent;
                const svg = div.querySelector('svg');
                
                if (svg) {
                    // Set SVG attributes for proper sizing
                    svg.setAttribute('width', '100%');
                    svg.setAttribute('height', '100%');
                    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    
                    // Process all elements that might have fill or opacity
                    const elements = svg.querySelectorAll('*');
                    elements.forEach(el => {
                        // If element has fill="rgb(...)" or fill="#..." or opacity, preserve it
                        if (!el.getAttribute('fill') && !el.getAttribute('opacity')) {
                            el.style.fill = 'currentColor';
                        }
                        
                        // Remove any external classes that might interfere
                        const classAttr = el.getAttribute('class');
                        if (classAttr && classAttr.includes('ai-style-change')) {
                            el.removeAttribute('class');
                        }
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
