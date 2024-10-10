class App {
    constructor() {
        this.contentElement = document.getElementById('content');
        this.initEventListeners();
        this.loadContent('home');
    }

    initEventListeners() {
        const pages = [
            { id: 'homeLink', name: 'home' },
            { id: 'chartsLink', name: 'charts' },
            { id: 'contactLink', name: 'contact' },
        ];

        pages.forEach(page => {
            document.getElementById(page.id).addEventListener('click', () => this.loadContent(page.name));
        });
    }

    async loadContent(page) {
        try {
            const response = await fetch(`views/${page}.html`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const html = await response.text();
            this.contentElement.innerHTML = html;
        } catch (error) {
            this.contentElement.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
            console.error('Error loading content:', error);
        }
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
