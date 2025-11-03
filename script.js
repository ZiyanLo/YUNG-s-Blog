// 数据定义
const blogData = {
    // 博客文章数据
    allArticles: [
        {
            id: 1,
            category: 'tech',
            title: '人工智能时代的编程哲学：代码与艺术的融合',
            summary: '探讨AI如何改变我们的编程思维，以及开发者如何在自动化时代保持创造力。',
            content: `<p>在人工智能快速发展的今天，编程不再仅仅是逻辑的体现，更成为了一种艺术表达。当我们与AI协作编写代码时，我们需要重新思考什么是"好的代码"。</p>

            <p>现代编程已经超越了单纯的功能实现。优雅的代码架构就像诗歌一样，有着自己的韵律和美感。AI工具可以帮助我们生成标准的代码结构，但真正的创新仍然来自于人类的想象力和对问题本质的深刻理解。</p>

            <p>在这个新的时代，程序员需要成为代码的"艺术家"，不仅要懂技术，更要懂设计、懂美学、懂用户心理。AI是我们的画笔，但我们才是那个决定画什么的人。</p>`,
            date: '2024-11-01',
            image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            source: '原创思考'
        },
        {
            id: 2,
            category: 'philosophy',
            title: '简约主义在数字时代的重新定义',
            summary: '从密斯·凡德罗到现代产品设计，简约理念如何影响我们的数字生活。',
            content: `<p>"少即是多"这个由建筑大师密斯·凡德罗提出的理念，在今天的数字世界中显得尤为重要。</p>

            <p>当信息过载成为常态，当我们的屏幕被无数的通知和应用占据时，简约主义不仅是一种美学选择，更是一种生存智慧。</p>

            <p>真正的简约不是删除，而是精炼。通过限制信息的数量和时间窗口，让每一篇文章都变得更加珍贵。这种设计哲学值得我们深思：在这个信息爆炸的时代，我们是否需要更多的"限制"来获得真正的自由？</p>`,
            date: '2024-11-02',
            image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            source: '哲学思考'
        },
        {
            id: 3,
            category: 'art',
            title: '威廉·布莱克：浪漫主义诗人的数字重生',
            summary: '18世纪的艺术家如何在21世纪的互联网上找到新的生命力。',
            content: `<p>威廉·布莱克，这位18世纪的英国诗人和艺术家，在Yews.News上获得了意想不到的"重生"。</p>

            <p>他的画作与现代新闻的结合，创造了一种独特的视觉体验。这种古典艺术与现代内容的碰撞，提醒我们：艺术的价值在于它能够跨越时空，与不同时代的人们对话。</p>

            <p>布莱克作品中那种对精神世界的追求，对传统权威的质疑，以及对想象力的无限赞美，在今天的数字时代依然具有强烈的现实意义。</p>`,
            date: '2024-11-03',
            image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            source: '艺术评论'
        },
        {
            id: 4,
            category: 'life',
            title: '慢生活：数字时代的反叛',
            summary: '在快节奏的世界中，如何保持内心的平静和专注。',
            content: `<p>我们生活在一个追求效率的时代，但Yews.News的限时阅读模式却提供了一种不同的可能性。</p>

            <p>每天三次的新闻更新，过期即删除的机制，这种设计创造了一种"稀缺性"，让读者更加珍惜每一次阅读机会。这不禁让我思考：是否在这个信息无限的时代，我们需要人为的"限制"来找回阅读的本质？</p>

            <p>慢生活不是懒惰，而是一种主动的选择。选择深度而非广度，选择质量而非数量，选择专注而非分散。</p>`,
            date: '2024-11-04',
            image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            source: '生活感悟'
        },
        {
            id: 5,
            category: 'tech',
            title: '移动优先设计的未来趋势',
            summary: '从响应式到移动优先，设计哲学的演进如何影响用户体验。',
            content: `<p>Yews.News的移动端优先策略揭示了现代产品设计的一个重要趋势。</p>

            <p>在大多数用户通过移动设备访问内容的今天，移动优先不再是一个选择，而是必需。这种设计哲学要求我们从最小的屏幕开始思考，然后逐步扩展到更大的屏幕。</p>

            <p>这种方法不仅改变了我们的设计流程，更重要的是改变了我们的思维方式：如何在有限的屏幕空间内提供最优质的用户体验？这正是对设计师创造力的最大考验。</p>`,
            date: '2024-11-05',
            image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            source: '设计观察'
        },
        {
            id: 6,
            category: 'philosophy',
            title: 'FOMO文化下的心理健康',
            summary: '社交媒体如何放大了我们的错失恐惧，以及如何与之共存。',
            content: `<p>"错失恐惧症"（FOMO）已经成为这个时代的流行病。Yews.News巧妙地利用了这种心理，但却是以一种积极的方式。</p>

            <p>通过限制内容的可获得性，它创造了良性的FOMO：你可能会错过今天的内容，但明天还有新的。这种模式既保持了用户的参与度，又避免了无限刷屏带来的焦虑。</p>

            <p>这给我们的启示是：我们不需要完全消除FOMO，而是要学会如何健康地与之相处。适度的紧迫感可以让我们更加珍惜当下，而过度的焦虑则会毁掉我们的生活质量。</p>`,
            date: '2024-11-06',
            image: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            source: '心理学观察'
        },
        {
            id: 7,
            category: 'art',
            title: '夜读：艺术与文学的完美结合',
            summary: '在安静的夜晚，艺术如何治愈我们疲惫的心灵。',
            content: `<p>夜晚是阅读的最佳时光。当世界安静下来，当白天的喧嚣逐渐远去，我们终于有时间与自己对话。</p>

            <p>Yews.News的晚间新闻投放，就像是为夜猫子们准备的精神食粮。配上艺术作品的阅读体验，让每一个夜晚都变得特别而有意义。</p>

            <p>艺术的魅力在于它能够触动我们内心最柔软的部分。在一天的忙碌之后，一幅画、一首诗、一篇文章，都可能成为治愈心灵的良药。</p>`,
            date: '2024-11-07',
            image: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            source: '夜读笔记'
        },
        {
            id: 8,
            category: 'life',
            title: '独处的艺术：如何在孤独中找到自我',
            summary: '孤独不是缺陷，而是一种能力。学会与自己相处是成长的必修课。',
            content: `<p>现代人害怕孤独，总是试图用各种信息和娱乐来填满每一个空闲时刻。但Yews.News的限时内容模式却提醒我们：有时候，少即是多。</p>

            <p>真正的独处不是与世隔绝，而是在宁静的环境中与自己对话。在这样的时刻，我们才能听到内心真正的声音，才能理清自己的想法，才能找到生活的方向。</p>

            <p>学会独处，就是学会生活。因为只有在独处时，我们才是完全真实的自己。</p>`,
            date: '2024-11-08',
            image: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
            source: '独处感悟'
        },
        {
            id: 9,
            category: 'tech',
            title: '代码如诗：编程的审美追求',
            summary: '好的代码不仅要能运行，更要优雅。探索编程中的美学原则。',
            content: `<p>深夜是最好的编程时间。当世界安静下来，只有代码在屏幕上流动，那种感觉就像诗人笔下的文字。</p>

            <p>优雅的代码有着自己的韵律和节奏。变量命名就像选词，函数结构就像句法，算法逻辑就像段落组织。好的程序员不仅是技术专家，更是代码诗人。</p>

            <p>Yews.News的设计让我想到：无论是代码还是设计，最终的目标都是创造美。功能是基础，但美学才是让作品持久的关键。</p>`,
            date: '2024-11-09',
            image: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
            source: '编程美学'
        },
        {
            id: 10,
            category: 'philosophy',
            title: '信息时代的认知革命',
            summary: '互联网如何改变了我们的思维方式和知识获取途径。',
            content: `<p>互联网不仅仅是一个工具，它正在重塑我们的认知方式。从搜索引擎到社交媒体，从在线课程到AI助手，我们获取信息和知识的途径发生了根本性的变化。</p>

            <p>这种变化既是机遇也是挑战。一方面，知识的获取变得前所未有的便捷；另一方面，深度思考的能力却可能被碎片化的信息消费所削弱。</p>

            <p>我们需要学会在这个信息海洋中航行，既要拥抱技术带来的便利，又要保持独立思考和深度学习的能力。</p>`,
            date: '2024-11-10',
            image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            source: '认知科学'
        }
    ],

    // 作品数据
    works: [
        {
            id: 1,
            title: '数字山水',
            description: '基于算法生成的山水画作品，探索东方美学与数字技术的融合',
            image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            year: '2024'
        },
        {
            id: 2,
            title: '时间碎片',
            description: '交互式时间可视化装置，展现时间的流动与静止',
            image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            year: '2024'
        },
        {
            id: 3,
            title: '声音雕塑',
            description: '将音频数据转化为三维形态的生成艺术作品',
            image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            year: '2023'
        },
        {
            id: 4,
            title: '文字迷宫',
            description: '基于文字游戏的空间化叙事实验',
            image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            year: '2023'
        },
        {
            id: 5,
            title: '城市回响',
            description: '城市声音数据的可视化与听觉化双重呈现',
            image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            year: '2023'
        },
        {
            id: 6,
            title: '记忆地图',
            description: '个人记忆的地理信息系统重构',
            image: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            year: '2022'
        },
        {
            id: 7,
            title: '光之诗',
            description: '光影交互装置，捕捉自然光的诗意表达',
            image: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            year: '2022'
        },
        {
            id: 8,
            title: '算法书法',
            description: '机器学习与传统书法艺术的跨界实验',
            image: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
            year: '2022'
        }
    ]
};

// 分类信息
const categories = {
    tech: '科技',
    art: '艺术',
    life: '生活',
    philosophy: '哲学'
};

// DOM元素
const blogTitle = document.getElementById('blog-title');
const navLinks = document.querySelectorAll('.nav-link');
const postsPage = document.getElementById('posts-page');
const worksPage = document.getElementById('works-page');
const aboutPage = document.getElementById('about-page');
const articleDetail = document.getElementById('article-detail');
const backButton = document.getElementById('back-button');

// Posts页面元素
const sortBtns = document.querySelectorAll('.sort-btn');
const postsList = document.getElementById('posts-list');

// Works页面元素
const worksGrid = document.getElementById('works-grid');

// 搜索元素
const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchClose = document.getElementById('search-close');
const searchResults = document.getElementById('search-results');

// 主题切换元素
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');

// 当前状态
let currentPage = 'posts';
let currentSort = 'date-desc';
let isDarkMode = false;

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    renderCurrentPage();
    setupEventListeners();
});

// 初始化主题
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 博客标题点击事件 - 回到主页
    blogTitle.addEventListener('click', function() {
        navigateToPage('posts');
    });

    // 导航链接事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navigateToPage(page);
        });
    });

    // Posts页面排序按钮
    sortBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sortBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSort = this.dataset.sort;
            renderPostsList();
        });
    });

    // 返回按钮
    backButton.addEventListener('click', closeArticle);

    // 搜索功能
    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', handleSearch);

    // 点击搜索模态框外部关闭
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            closeSearch();
        }
    });

    // 主题切换
    themeToggle.addEventListener('click', toggleTheme);

    // ESC键关闭各种模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (articleDetail.style.display === 'block') {
                closeArticle();
            } else if (searchModal.style.display === 'flex') {
                closeSearch();
            }
        }
    });
}

// 页面导航
function navigateToPage(page) {
    currentPage = page;

    // 更新导航状态
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    // 关闭文章详情
    closeArticle();

    // 渲染对应页面
    renderCurrentPage();
}

// 渲染当前页面
function renderCurrentPage() {
    // 隐藏所有页面
    postsPage.classList.add('hidden');
    worksPage.classList.add('hidden');
    aboutPage.classList.add('hidden');

    // 显示当前页面
    switch (currentPage) {
        case 'posts':
            postsPage.classList.remove('hidden');
            renderPostsList();
            break;
        case 'works':
            worksPage.classList.remove('hidden');
            renderWorksGrid();
            break;
        case 'about':
            aboutPage.classList.remove('hidden');
            break;
    }
}

// 渲染Posts列表
function renderPostsList() {
    let posts = [...blogData.allArticles];
    const currentFilterElement = document.getElementById('current-filter');

    if (currentSort === 'date-desc') {
        // 从新到旧
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        currentFilterElement.textContent = '时间排序：从新到旧';
        let html = '';
        posts.forEach(post => {
            html += `
                <article class="post-item" onclick="openArticle(${post.id})">
                    <h3 class="post-item-title">${post.title}</h3>
                    <span class="post-item-date">${formatDate(post.date)}</span>
                </article>
            `;
        });
        postsList.innerHTML = html;
    } else if (currentSort === 'date-asc') {
        // 从旧到新
        posts.sort((a, b) => new Date(a.date) - new Date(b.date));
        currentFilterElement.textContent = '时间排序：从旧到新';
        let html = '';
        posts.forEach(post => {
            html += `
                <article class="post-item" onclick="openArticle(${post.id})">
                    <h3 class="post-item-title">${post.title}</h3>
                    <span class="post-item-date">${formatDate(post.date)}</span>
                </article>
            `;
        });
        postsList.innerHTML = html;
    } else if (currentSort === 'category') {
        // 按分类分组
        currentFilterElement.textContent = '分类浏览：点击展开查看分类';
        const postsByCategory = {};
        posts.forEach(post => {
            if (!postsByCategory[post.category]) {
                postsByCategory[post.category] = [];
            }
            postsByCategory[post.category].push(post);
        });

        let html = '';
        Object.keys(postsByCategory).forEach(category => {
            const categoryPosts = postsByCategory[category].sort((a, b) => new Date(b.date) - new Date(a.date));

            html += `
                <div class="category-section">
                    <div class="category-header" onclick="toggleCategory('${category}')">
                        <h2 class="category-title">
                            <span class="category-arrow">▶</span>
                            ${categories[category]}
                            <span class="category-count">(${categoryPosts.length})</span>
                        </h2>
                    </div>
                    <div class="category-content" id="category-${category}" style="display: none;">
                        <div class="posts-list">
                `;

            categoryPosts.forEach(post => {
                html += `
                    <article class="post-item" onclick="openArticle(${post.id})">
                        <h3 class="post-item-title">${post.title}</h3>
                        <span class="post-item-date">${formatDate(post.date)}</span>
                    </article>
                `;
            });

            html += `
                        </div>
                    </div>
                </div>
            `;
        });

        postsList.innerHTML = html;
    }
}

// 渲染Works网格
function renderWorksGrid() {
    let html = '';
    blogData.works.forEach(work => {
        html += `
            <div class="work-item" onclick="openWork(${work.id})">
                <div class="work-image" style="background: ${work.image}"></div>
                <div class="work-overlay">
                    <h3 class="work-title">${work.title}</h3>
                </div>
            </div>
        `;
    });

    worksGrid.innerHTML = html;
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${year}年${month}月${day}日`;
}

// 切换分类展开/收起
function toggleCategory(categoryId) {
    const categoryContent = document.getElementById(`category-${categoryId}`);
    const categorySection = categoryContent.closest('.category-section');
    const arrow = categorySection.querySelector('.category-arrow');

    if (categoryContent.style.display === 'none') {
        categoryContent.style.display = 'block';
        arrow.textContent = '▼';
    } else {
        categoryContent.style.display = 'none';
        arrow.textContent = '▶';
    }
}

// 打开文章详情
function openArticle(articleId) {
    const article = blogData.allArticles.find(a => a.id === articleId);
    if (!article) return;

    // 填充文章详情内容
    document.getElementById('detail-title').textContent = article.title;
    document.getElementById('detail-category').textContent = categories[article.category];
    document.getElementById('detail-time').textContent = formatDate(article.date);
    document.getElementById('detail-content').innerHTML = article.content;
    document.getElementById('detail-source').textContent = `来源: ${article.source}`;

    // 设置文章图片
    const imageElement = document.getElementById('detail-image');
    imageElement.style.background = article.image;

    // 显示文章详情页面
    articleDetail.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // 滚动到顶部
    articleDetail.scrollTop = 0;
}

// 打开作品详情
function openWork(workId) {
    const work = blogData.works.find(w => w.id === workId);
    if (!work) return;

    // 填充作品详情内容
    document.getElementById('detail-title').textContent = work.title;
    document.getElementById('detail-category').textContent = `作品 · ${work.year}`;
    document.getElementById('detail-time').textContent = '';
    document.getElementById('detail-content').innerHTML = `<p>${work.description}</p>`;
    document.getElementById('detail-source').textContent = `创作年份: ${work.year}`;

    // 设置作品图片
    const imageElement = document.getElementById('detail-image');
    imageElement.style.background = work.image;

    // 显示文章详情页面
    articleDetail.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // 滚动到顶部
    articleDetail.scrollTop = 0;
}

// 关闭文章详情
function closeArticle() {
    articleDetail.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 打开搜索
function openSearch() {
    searchModal.style.display = 'flex';
    searchInput.focus();
}

// 关闭搜索
function closeSearch() {
    searchModal.style.display = 'none';
    searchInput.value = '';
    searchResults.innerHTML = '';
}

// 处理搜索
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (query === '') {
        searchResults.innerHTML = '';
        return;
    }

    // 搜索文章
    const articleResults = blogData.allArticles.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        categories[article.category].toLowerCase().includes(query)
    );

    // 搜索作品
    const workResults = blogData.works.filter(work =>
        work.title.toLowerCase().includes(query) ||
        work.description.toLowerCase().includes(query)
    );

    let html = '';

    // 显示文章结果
    if (articleResults.length > 0) {
        html += '<div class="search-section">文章</div>';
        articleResults.forEach(result => {
            html += `
                <div class="search-result-item" onclick="selectSearchResult(${result.id})">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-date">${formatDate(result.date)}</div>
                </div>
            `;
        });
    }

    // 显示作品结果
    if (workResults.length > 0) {
        html += '<div class="search-section">作品</div>';
        workResults.forEach(result => {
            html += `
                <div class="search-result-item" onclick="selectWorkResult(${result.id})">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-date">${result.year}</div>
                </div>
            `;
        });
    }

    if (articleResults.length === 0 && workResults.length === 0) {
        html = '<div class="search-result-item">没有找到相关内容</div>';
    }

    searchResults.innerHTML = html;
}

// 选择搜索结果
function selectSearchResult(articleId) {
    closeSearch();
    navigateToPage('posts');
    setTimeout(() => openArticle(articleId), 100);
}

// 选择作品搜索结果
function selectWorkResult(workId) {
    closeSearch();
    navigateToPage('works');
    setTimeout(() => openWork(workId), 100);
}

// 切换主题
function toggleTheme() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'light');
    }
}

// 导出函数供外部使用
window.BlogApp = {
    openArticle,
    openWork,
    navigateToPage,
    toggleTheme
};