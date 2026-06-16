// ============================================
// STATIC NEWS DATA - Easy to Maintain
// ============================================
// Simply add or edit articles in this structure
// Format: { title, description, category, image, source, date, url }

const newsArticles = [
  // FEATURED ARTICLE (appears at top)
  {
    id: 1,
    title: 'Global Markets Rally Amid Economic Optimism',
    description: 'Stock markets across major economies show strong growth as investors gain confidence in economic recovery and sustainable growth opportunities.',
    category: 'general',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    source: 'Financial Times',
    date: 'Jun 16, 2026',
    url: '#'
  },
  
  // BREAKING NEWS
  {
    id: 2,
    title: 'Tech Giants Announce New AI Initiatives',
    description: 'Leading technology companies unveil groundbreaking artificial intelligence projects aimed at solving climate issues and improving accessibility.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3d4fc58b55c6a1f1f?w=800&h=500&fit=crop',
    source: 'TechCrunch',
    date: 'Jun 15, 2026',
    url: '#'
  },

  // GENERAL NEWS
  {
    id: 3,
    title: 'International Climate Summit Reaches Historic Agreement',
    description: 'World leaders sign landmark climate accord, committing to significant emission reduction targets by 2035.',
    category: 'general',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=800&h=500&fit=crop',
    source: 'BBC',
    date: 'Jun 14, 2026',
    url: '#'
  },
  {
    id: 4,
    title: 'Space Agency Launches New Mars Exploration Mission',
    description: 'Historic launch sends advanced rover to search for signs of ancient microbial life on Mars and collect samples.',
    category: 'science',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=500&fit=crop',
    source: 'NASA',
    date: 'Jun 13, 2026',
    url: '#'
  },
  {
    id: 5,
    title: 'Healthcare Innovation Transforms Patient Care',
    description: 'New medical technologies are revolutionizing treatment methods and improving patient outcomes globally.',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=800&h=500&fit=crop',
    source: 'Medical News Today',
    date: 'Jun 12, 2026',
    url: '#'
  },

  // BUSINESS NEWS
  {
    id: 6,
    title: 'Fortune 500 Companies Report Record Profits',
    description: 'Leading corporations announce exceptional earnings driven by digital transformation initiatives and market expansion.',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    source: 'Bloomberg',
    date: 'Jun 16, 2026',
    url: '#'
  },
  {
    id: 7,
    title: 'Startup Scene Booms with Record Funding',
    description: 'Venture capital investments hit all-time highs as investors bet on emerging technologies and innovative solutions.',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    source: 'Crunchbase',
    date: 'Jun 11, 2026',
    url: '#'
  },

  // TECHNOLOGY NEWS
  {
    id: 8,
    title: 'Revolutionary Quantum Computing Breakthrough',
    description: 'Scientists achieve major milestone in quantum computing, opening new possibilities for complex problem-solving in cryptography.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
    source: 'Wired',
    date: 'Jun 16, 2026',
    url: '#'
  },
  {
    id: 9,
    title: 'Smartphone Technology Reaches New Heights',
    description: 'Latest devices feature breakthrough display technology and all-day battery life with advanced power management.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1678203422067-b98c4a59bd54?w=800&h=500&fit=crop',
    source: 'The Verge',
    date: 'Jun 10, 2026',
    url: '#'
  },

  // HEALTH NEWS
  {
    id: 10,
    title: 'Medical Breakthrough in Cancer Treatment',
    description: 'Researchers announce successful trials of new immunotherapy treatment for advanced cancers with promising results.',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    source: 'Health News',
    date: 'Jun 16, 2026',
    url: '#'
  },
  {
    id: 11,
    title: 'Exercise Linked to Better Cognitive Health',
    description: 'New study shows regular physical activity significantly improves memory and reduces cognitive decline in older adults.',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=500&fit=crop',
    source: 'Medical Research',
    date: 'Jun 09, 2026',
    url: '#'
  },

  // SCIENCE NEWS
  {
    id: 12,
    title: 'New Element Discovered in Arctic Ice Core',
    description: 'Scientists uncover rare elements in ancient ice, providing insights into Earth\'s geological history.',
    category: 'science',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=500&fit=crop',
    source: 'Nature',
    date: 'Jun 16, 2026',
    url: '#'
  },
  {
    id: 13,
    title: 'Ocean Temperatures Stabilize with Climate Action',
    description: 'Latest data shows positive trends in ocean health as global warming efforts begin to show measurable results.',
    category: 'science',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=500&fit=crop',
    source: 'Science Daily',
    date: 'Jun 08, 2026',
    url: '#'
  },

  // SPORTS NEWS
  {
    id: 14,
    title: 'Championship Team Wins Historic Title',
    description: 'In a thrilling match, the underdog team defeats the defending champions in overtime, securing their first championship.',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop',
    source: 'Sports World',
    date: 'Jun 16, 2026',
    url: '#'
  },
  {
    id: 15,
    title: 'Olympic Games Break Viewership Records',
    description: 'Global audiences tune in for unprecedented coverage of the international sporting event with online streaming.',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=800&h=500&fit=crop',
    source: 'ESPN',
    date: 'Jun 07, 2026',
    url: '#'
  }
];

// ============================================
// END OF NEWS DATA
// ============================================

let currentCategory = 'general';
let allArticles = newsArticles;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  loadArticles('general');
});

// Setup navigation buttons
function setupNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      navBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.category;
      loadArticles(currentCategory);
    });
  });
}

// Load and filter articles by category
function loadArticles(category) {
  currentCategory = category;
  
  // Filter articles by category
  const filtered = category === 'general' 
    ? allArticles 
    : allArticles.filter(a => a.category === category);
  
  if (filtered.length > 0) {
    displayFeaturedArticle(filtered[0]);
    displayBreakingNews(filtered.slice(1, 4));
    displayNewsGrid(filtered.slice(4, 13));
    displayTrending(filtered.slice(13, 17));
  } else {
    showNoResults();
  }
}

// Display featured article
function displayFeaturedArticle(article) {
  const container = document.getElementById('featured');
  
  container.innerHTML = `
    <article class="featured-article">
      <img src="${article.image}" alt="${article.title}" class="featured-image" onerror="this.src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop'">
      <div class="featured-content">
        <span class="featured-tag">Featured</span>
        <h3>${article.title}</h3>
        <p>${truncateText(article.description, 200)}</p>
        <div class="featured-meta">
          <p>${article.source} • ${article.date}</p>
          <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="featured-link">Read Full Story →</a>
        </div>
      </div>
    </article>
  `;
}

// Display breaking news
function displayBreakingNews(articles) {
  const container = document.getElementById('breaking');
  if (!articles || articles.length === 0) return;
  
  const article = articles[0];
  
  container.innerHTML = `
    <div class="breaking-content">
      <span class="breaking-label">⚡ Breaking News</span>
      <h3>${article.title}</h3>
      <p>${truncateText(article.description, 150)}</p>
      <p class="featured-meta" style="margin-top: 0.5rem;">${article.source} • ${article.date}</p>
    </div>
  `;
}

// Display news grid
function displayNewsGrid(articles) {
  const container = document.getElementById('newsGrid');
  
  if (!articles || articles.length === 0) {
    container.innerHTML = '<div class="loading">No articles found</div>';
    return;
  }
  
  const html = articles.map(article => {
    return `
      <article class="news-card">
        <img src="${article.image}" alt="${article.title}" class="news-card-image" onerror="this.src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop'">
        <div class="news-card-content">
          <span class="news-card-tag">${article.category.toUpperCase()}</span>
          <h3>${article.title}</h3>
          <p>${truncateText(article.description, 120)}</p>
          <div class="news-card-meta">
            <p>${article.source} • ${article.date}</p>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read more →</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
  
  container.innerHTML = html;
}

// Display trending articles
function displayTrending(articles) {
  const container = document.getElementById('trending');
  
  if (!articles || articles.length === 0) {
    container.innerHTML = '<div class="loading">No trending articles</div>';
    return;
  }
  
  const html = articles.map((article, index) => {
    return `
      <article class="trending-card">
        <img src="${article.image}" alt="${article.title}" class="trending-card-image" onerror="this.src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop'">
        <div class="trending-card-content">
          <h4>${article.title}</h4>
          <p>${truncateText(article.description, 90)}</p>
        </div>
      </article>
    `;
  }).join('');
  
  container.innerHTML = html;
}

// Utility: Truncate text
function truncateText(text, length) {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
}

// Show error message
function showError() {
  document.getElementById('newsGrid').innerHTML = `
    <div class="loading">
      <p>Unable to load news. Please try refreshing the page.</p>
    </div>
  `;
}

// Show no results message
function showNoResults() {
  document.getElementById('newsGrid').innerHTML = `
    <div class="loading">
      <p>No articles found for this category.</p>
    </div>
  `;
}
