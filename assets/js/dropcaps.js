document.addEventListener('DOMContentLoaded', function() {
    const dropcap = document.querySelector('span.dropcap');
    if (!dropcap) return;

    const letter = dropcap.textContent.trim().toLowerCase();
    const availableLetters = ['a', 'b', 'c', 'f', 'g', 'i', 'q', 't', 'v'];
    
    if (availableLetters.includes(letter)) {
        // Set styles first
        dropcap.style.display = 'inline-block';
        dropcap.style.width = '2.8em';  // Match new font size
        dropcap.style.height = '2.8em';
        dropcap.style.verticalAlign = 'middle';
        dropcap.style.marginRight = '0.2em';
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
                        // Parse all CSS rules including rgb, rgba, and hex colors
                        const ruleRegex = /\.([A-Z]{1,2})\{([^}]+)\}/g;
                        let match;
                        while ((match = ruleRegex.exec(cssText)) !== null) {
                            const className = match[1];
                            const styles = match[2].split(';').reduce((acc, style) => {
                                const [prop, value] = style.split(':').map(s => s.trim());
                                if (prop && value) acc[prop] = value;
                                return acc;
                            }, {});
                            cssRules[className] = styles;
                        }
                        // Keep the style tag to preserve complex styles
                    }

                    // Set SVG attributes for proper sizing
                    svg.setAttribute('width', '100%');
                    svg.setAttribute('height', '100%');
                    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    
                    // Process all elements that might have styles
                    const elements = svg.querySelectorAll('*');
                    elements.forEach(el => {
                        const classAttr = el.getAttribute('class');
                        if (classAttr && cssRules[classAttr]) {
                            // Apply all styles from CSS rules
                            const styles = cssRules[classAttr];
                            Object.entries(styles).forEach(([prop, value]) => {
                                el.style[prop] = value;
                            });
                            // Keep the class as some styles might be complex
                        }
                        
                        // Preserve existing fill and opacity attributes
                        const fill = el.getAttribute('fill');
                        const opacity = el.getAttribute('opacity');
                        const style = el.getAttribute('style');
                        
                        if (!fill && !style?.includes('fill:')) {
                            el.style.fill = 'currentColor';
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
