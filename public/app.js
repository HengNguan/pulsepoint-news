const siteData = {
  trending: [
    {
      title: 'Government reconsiders petrol subsidy for T20',
      summary: 'Officials are reviewing petrol subsidy support tied to the upcoming T20 cricket season, balancing sports funding with national fuel reform goals.',
      source: 'PulsePoint News'
    },
    {
      title: 'Scanwolf secures RM75 mil piling job for KL high-rise project',
      summary: 'Scanwolf has won a RM75 million piling contract for a new Kuala Lumpur high-rise development, boosting construction sector confidence.',
      source: 'PulsePoint News'
    },
    {
      title: 'MITI Launches New EV Policy Starting July',
      summary: 'Malaysia’s Ministry of Investment, Trade and Industry introduces stricter import conditions for EVs starting July 1, 2026, moving away from the earlier low-threshold exemption framework.',
      source: 'MITI press release',
      youtubeId: 'OR9EX-BUH_4',
      url: 'miti-ev-policy.html'
    },
    {
      title: 'MD continues with share trading as Tanco claims ‘business as usual’',
      summary: 'Tanco insists business remains normal while its MD proceeds with share trading amid ongoing scrutiny.',
      source: 'PulsePoint News'
    },
    {
      title: 'Elsa closes nearly 20% higher in ACE Market debut',
      summary: 'Elsa posted a strong debut on the ACE Market, closing nearly 20% higher after its first trading session.',
      source: 'PulsePoint News'
    }
  ],
  corporate: [
    {
      title: 'CIMB Islamic Bank wins two accolades at The Banker Islamic Banking Awards 2026',
      summary: 'CIMB Islamic Bank was honored with two awards at the 2026 Banker Islamic Banking Awards, highlighting its growth in digital shariah-compliant services.',
      source: 'The Edge Malaysia',
      url: 'https://theedgemalaysia.com/node/807245'
    },
    {
      title: 'Allianz Malaysia to launch basic insurance product next year',
      summary: 'Allianz Malaysia plans to introduce an affordable basic insurance product aimed at improving protection access for underserved consumers.',
      source: 'Allianz Malaysia'
    },
    {
      title: 'Capital A says Teleport stake foreclosure capped at arbitration sum owed, plans challenge',
      summary: 'Capital A confirmed that the Teleport stake foreclosure amount is capped by the arbitration award and intends to challenge the decision.',
      source: 'PulsePoint News'
    },
    {
      title: 'Bursa approves Vantris Energy’s application to uplift PN17 status',
      summary: 'Bursa Malaysia approved Vantris Energy’s request to uplift its PN17 status after the company met required corporate governance conditions.',
      source: 'PulsePoint News'
    },
    {
      title: 'Beshom Holdings to sell 14.6 acres of land in Klang for RM86 mil',
      summary: 'Beshom Holdings revealed plans to divest 14.6 acres of Klang land for RM86 million as part of its capital recycling strategy.',
      source: 'The Edge Malaysia',
      url: 'https://theedgemalaysia.com/node/807228'
    }
  ],
  economy: [
    {
      title: 'SME Bank sees Malaysian MSMEs remaining resilient despite weaker sentiment in 1H',
      summary: 'SME Bank predicts that local MSMEs will remain resilient in the first half of the year despite softer business sentiment.',
      source: 'The Edge Malaysia',
      url: 'https://theedgemalaysia.com/node/807209'
    },
    {
      title: 'Customs revenue up 25% to RM23.6 bil in 1Q',
      summary: 'Malaysia’s customs revenue grew 25% in the first quarter, reaching RM23.6 billion on stronger trade and collection performance.',
      source: 'The Edge Malaysia',
      url: 'https://theedgemalaysia.com/node/807208'
    },
    {
      title: 'DOSM: Malaysia’s total trade hits RM3.1 tril in 2025, Penang tops exports',
      summary: 'DOSM reported total Malaysian trade of RM3.1 trillion in 2025, with Penang leading the export rankings.',
      source: 'The Edge Malaysia',
      url: 'https://theedgemalaysia.com/node/807172'
    },
    {
      title: 'Domestic tourism spending reaches RM121.3 bil in 2025 — DOSM',
      summary: 'Domestic tourism spending climbed to RM121.3 billion in 2025, underlining the sector’s strength in post-pandemic recovery.',
      source: 'The Edge Malaysia',
      url: 'https://theedgemalaysia.com/node/807161'
    },
    {
      title: 'Viral ECRL fare rates only speculation, actual rates not announced yet, says MRL',
      summary: 'Malaysia Rail Link clarified that viral fare rate figures for the ECRL remain speculative, with actual pricing still pending official announcement.',
      source: 'The Edge Malaysia',
      url: 'https://theedgemalaysia.com/node/807145'
    }
  ],
  about: [
    {
      name: 'Aishhwarya Lakshmi',
      id: 'JRN2409041',
      role: 'Communications & Editorial'
    },
    {
      name: 'Thong Qian Hui',
      id: 'JRN2409048',
      role: 'Research & Content Strategy'
    },
    {
      name: 'Lee Zhao Qi',
      id: 'JRN2409045',
      role: 'Design & User Experience'
    },
    {
      name: 'Chea Zhi Xuan',
      id: 'JRN2409036',
      role: 'Product & Web Development'
    }
  ]
};

function createArticleCard(item) {
  const sourceLine = item.source ? `<p class="article-meta">${item.source}</p>` : '';
  const link = item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">Read more</a>` : '';
  const videoEmbed = item.youtubeId
    ? `<div class="video-card"><iframe src="https://www.youtube.com/embed/${item.youtubeId}" title="${item.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    : '';
  
  const titleElement = item.url 
    ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;"><h3>${item.title}</h3></a>`
    : `<h3>${item.title}</h3>`;

  return `
    <article class="section-card">
      <div class="section-card-body">
        ${titleElement}
        <p>${item.summary}</p>
        ${sourceLine}
        ${link}
      </div>
      ${videoEmbed}
    </article>
  `;
}

function renderSection(sectionId, items) {
  const container = document.getElementById(`${sectionId}Grid`);
  if (!container) return;
  container.innerHTML = items.map(createArticleCard).join('');
}

function renderAboutSection() {
  const container = document.getElementById('aboutGrid');
  if (!container) return;
  container.innerHTML = siteData.about
    .map(member => `
      <div class="about-card">
        <div class="about-avatar">${member.name
          .split(' ')
          .map(word => word[0])
          .join('')}</div>
        <div class="about-details">
          <h3>${member.name}</h3>
          <p class="student-id">${member.id}</p>
          <p>${member.role}</p>
        </div>
      </div>
    `)
    .join('');
}

function initPage() {
  renderSection('trending', siteData.trending);
  renderSection('corporate', siteData.corporate);
  renderSection('economy', siteData.economy);
  renderAboutSection();
}

document.addEventListener('DOMContentLoaded', initPage);
