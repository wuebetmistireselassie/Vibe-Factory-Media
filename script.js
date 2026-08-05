document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. POPULATE DATA FROM data.js
    // ==========================================
    
    // Set Social & Channel Links
    document.getElementById('nav-youtube').href = siteData.socials.youtubeChannel;
    document.getElementById('nav-facebook').href = siteData.socials.facebook;
    document.getElementById('nav-instagram').href = siteData.socials.instagram;
    document.getElementById('nav-telegram').href = siteData.socials.telegram;
    
    document.getElementById('hero-listen-btn').href = siteData.socials.youtubeChannel;
    document.getElementById('cta-youtube').href = siteData.socials.youtubeChannel;
    
    document.getElementById('footer-youtube').href = siteData.socials.youtubeChannel;
    document.getElementById('footer-facebook').href = siteData.socials.facebook;
    document.getElementById('footer-instagram').href = siteData.socials.instagram;
    document.getElementById('footer-tiktok').href = siteData.socials.tiktok;
    document.getElementById('footer-telegram').href = siteData.socials.telegram;
    
    const emailLink = document.getElementById('footer-email');
    emailLink.href = `mailto:${siteData.socials.email}`;
    emailLink.textContent = siteData.socials.email;

    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Set Latest Release Data
    document.getElementById('hero-watch-btn').setAttribute('data-video-id', siteData.hero.latestVideoId);
    
    document.getElementById('latest-category').textContent = siteData.latestRelease.category;
    document.getElementById('latest-title').textContent = siteData.latestRelease.title;
    document.getElementById('latest-artist').textContent = siteData.latestRelease.artist;
    document.getElementById('latest-views').textContent = `▷ ${siteData.latestRelease.views}`;
    document.getElementById('latest-watch-btn').setAttribute('data-video-id', siteData.latestRelease.videoId);
    
    // Auto-pull YouTube thumbnail for Latest Release Background
    const latestBg = document.getElementById('latest-card-bg');
    latestBg.style.background = `linear-gradient(to right, rgba(0,0,0,0.9), transparent), url('https://img.youtube.com/vi/${siteData.latestRelease.videoId}/maxresdefault.jpg') center/cover`;

    // Set Stats
    document.getElementById('stat-subscribers').textContent = `👥 ${siteData.stats.subscribers}`;
    document.getElementById('stat-views').textContent = `👁️ ${siteData.stats.views}`;
    document.getElementById('stat-productions').textContent = `🎬 ${siteData.stats.productions}`;

    // Generate Featured Music Grid
    const gridContainer = document.getElementById('featured-grid');
    siteData.featuredMusic.forEach(music => {
        const card = document.createElement('div');
        card.className = 'music-card play-video-btn';
        card.setAttribute('data-video-id', music.videoId);
        card.style.cursor = 'pointer';
        
        card.innerHTML = `
            <div class="music-img" style="background: url('https://img.youtube.com/vi/${music.videoId}/maxresdefault.jpg') center/cover;"></div>
            <h4>${music.title}</h4>
            <p>${music.artist}</p>
            <small>▷ ${music.views}</small>
        `;
        gridContainer.appendChild(card);
    });


    // ==========================================
    // 2. MODAL & VIDEO PLAYER LOGIC
    // ==========================================
    const modal = document.getElementById('videoModal');
    const closeModalBtn = document.getElementById('closeModal');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const youtubeDirectLink = document.getElementById('youtubeDirectLink');
    const playButtons = document.querySelectorAll('.play-video-btn');

    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const videoId = button.getAttribute('data-video-id');
            
            if (videoId) {
                youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                youtubeDirectLink.href = `https://www.youtube.com/watch?v=${videoId}`;
                modal.classList.add('active');
            }
        });
    });

    const closeVideoModal = () => {
        modal.classList.remove('active');
        setTimeout(() => { youtubePlayer.src = ''; }, 300); 
    };

    closeModalBtn.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeVideoModal();
    });


    // ==========================================
    // 3. SIDEBAR NAVIGATION LOGIC
    // ==========================================
    const openMenuBtn = document.getElementById("openMenu");
    const closeMenuSidebarBtn = document.getElementById("closeMenu");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    openMenuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    closeMenuSidebarBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});
