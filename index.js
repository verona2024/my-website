document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header) {
        fetch('/navbar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                header.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading navbar:', error);
                header.innerHTML = '<p>Failed to load navbar.</p>';
            });
    }
});
