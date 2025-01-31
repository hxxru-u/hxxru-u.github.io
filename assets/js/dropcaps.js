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

        // Create SVG with proper viewBox and styling
        const svgString = `<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <use href="/assets/fonts/dropcaps/svg-dropcaps/${letter}.svg#dropcap" />
        </svg>`;
        
        dropcap.innerHTML = svgString;
        dropcap.classList.add('dropcap-svg');
    }
});
