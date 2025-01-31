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
                    // Extract CSS rules from style tag
                    const styleTag = svg.querySelector('style');
                    const cssRules = {};
                    if (styleTag) {
                        const cssText = styleTag.textContent;
                        // Parse CSS rules like .B{fill:#0f0f0f}
                        cssText.match(/\.[A-Z]{1,2}\{fill:#[0-9a-f]{6}\}/g)?.forEach(rule => {
                            const className = rule.match(/\.[A-Z]{1,2}/)[0].substring(1);
                            const fillColor = rule.match(/#[0-9a-f]{6}/)[0];
                            cssRules[className] = fillColor;
                        });
                        // Remove the style tag since we'll inline the styles
                        styleTag.remove();
                    }

                    // Set SVG attributes for proper sizing
                    svg.setAttribute('width', '100%');
                    svg.setAttribute('height', '100%');
                    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    
                    // Process all paths and inline their styles
                    const paths = svg.querySelectorAll('path');
                    paths.forEach(path => {
                        const classAttr = path.getAttribute('class');
                        if (classAttr && cssRules[classAttr]) {
                            // Inline the fill color from CSS
                            path.setAttribute('fill', cssRules[classAttr]);
                            path.removeAttribute('class');
                        } else if (!path.getAttribute('fill')) {
                            // Use theme color for paths without specific fill
                            path.setAttribute('fill', 'currentColor');
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
