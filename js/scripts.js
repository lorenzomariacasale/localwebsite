document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Add Search Icon Functionality (Optional)
    const searchToggle = document.getElementById('search-toggle');
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            alert('Search functionality coming soon!');
        });
    }

    // Fetch the news from the JSON file
    fetch('news.json')
        .then(response => response.json())
        .then(newsItems => {
            const newsSection = document.querySelector('#news');
            let newsHTML = '<h2>Recent News</h2>'; // Start with a title

            // Loop through the news items and create HTML for each
            newsItems.forEach(item => {
                newsHTML += `
                    <div class="news-item">
                        <h3>${item.title}</h3>
                        <p><strong>Date:</strong> ${item.date}</p>
                        <p>${item.description}</p>
                        <a href="${item.link}" target="_blank">Read more</a>
                    </div>
                `;
            });

            // Inject the HTML into the #news section
            newsSection.innerHTML = newsHTML;
        })
        .catch(error => console.error('Error loading news:', error));
});