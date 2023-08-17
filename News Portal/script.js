const newsSection = document.querySelector('.news');

const newsData = [
    {
        title: 'New Smartphone Model Unveiled by Tech Giant',
        category: 'Technology',
        date: 'August 8, 2023',
        content: 'Tech Giant Corporation has unveiled its latest smartphone model, featuring cutting-edge technology and improved performance.',
        image: 'mobile1.jpg' // Replace with the actual image file name or path
    },
    { 
        title: 'SpaceX Achievements: Advancements in Space Exploration and Mars Missions', 
        category: 'Science', 
        date: 'August 16, 2023', 
        content: 'SpaceX continues to make significant strides in space exploration, with successful launches, reusable rocket technology, and ongoing efforts towards human missions to Mars. The company\'s innovative approach is reshaping the future of space travel and expanding humanity\'s reach beyond Earth.',
        image: 'spacex.jpg' // Replace with the actual image file name or path
    },
    { 
        title: 'Environmental Milestone: City Achieves 100% Renewable Energy', 
        category: 'Environment', 
        date: 'August 13, 2023', 
        content: 'In a remarkable achievement, the city has successfully transitioned to using 100% renewable energy sources.',
        image: '1.jpeg' // Replace with the actual image file name or path
    },
    { 
        title: 'Tech Innovation: AI-Powered Translator Revolutionizes Language Learning', 
        category: 'Technology', 
        date: 'August 10, 2023', 
        content: 'A breakthrough in artificial intelligence has led to the development of an advanced language learning tool. The AI-powered translator can instantly convert spoken words into different languages, offering a seamless and immersive experience for language learners.',
        image: 'ai.jpeg' // Replace with the actual image file name or path
    }
];

newsData.forEach((article) => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('news-article');
    articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>Category:</strong> ${article.category}</p>
        <p><strong>Date:</strong> ${article.date}</p>
        <img src="${article.image}" alt="${article.title}" class="article-image" />
        <p>${article.content}</p>
    `;
    newsSection.appendChild(articleElement);
});
