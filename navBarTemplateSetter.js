document.addEventListener('DOMContentLoaded', function() {
    
    if (!document.querySelector('link[href="nav-bar.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'nav-bar.css';
        document.head.appendChild(link);
    } 

    fetch('nav-bar.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const template = doc.querySelector('#nav-bar');
            if (template) {
                const clone = template.content.cloneNode(true);
                document.body.insertBefore(clone, document.body.firstChild);
            }
        })
        .catch(error => console.error('Error loading template:', error));
});