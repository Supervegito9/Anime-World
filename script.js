document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// List of sample news articles
const newsArticles = [
    {
        title: 'Breaking News: Market Hits Record Highs',
        content: 'The stock market reached new record highs today, with major indices showing significant gains.'
    },
    {
        title: 'Technology: New Smartphone Released',
        content: 'The latest smartphone model has been released, featuring cutting-edge technology and new features.'
    },
    {
        title: 'Health: Tips for a Healthy Lifestyle',
        content: 'Experts share their top tips for maintaining a healthy lifestyle, including diet and exercise advice.'
    },
    {
        title: 'Sports: Championship Game Results',
        content: 'The championship game concluded with a thrilling finish, leaving fans on the edge of their seats.'
    },
    {
        title: 'Entertainment: Upcoming Movie Releases',
        content: 'A list of upcoming movie releases has been announced, with many highly anticipated films on the horizon.'
    }
];

// Function to load news articles into the page
function loadNewsArticles() {
    const articlesContainer = document.getElementById('articles');
    newsArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    });
}

// Load news articles when the page loads
document.addEventListener('DOMContentLoaded', loadNewsArticles);
