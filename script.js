/* =========================================
   GENESIS DATA & LOGIC
   ========================================= */

/* --- DATA STORAGE (Loaded from JSON files) --- */
let leadersData = [];
let membersData = [];
let policies = [];

/* --- LOAD DATA FROM JSON FILES --- */
async function loadData() {
    try {
        // Fetch all JSON files in parallel
        const [leadersResponse, membersResponse, policiesResponse] = await Promise.all([
            fetch('data/leaders.json'),
            fetch('data/members.json'),
            fetch('data/policies.json')
        ]);

        // Parse JSON data
        leadersData = await leadersResponse.json();
        membersData = await membersResponse.json();
        policies = await policiesResponse.json();

        console.log('✅ Data loaded successfully');
    } catch (error) {
        console.error('❌ Error loading data:', error);
    }
}


/* =========================================
   CORE LOGIC (LOADING & SCROLL)
   ========================================= */

// 1. Create Loader HTML immediately
document.write(`
    <div id="genesis-loader" style="opacity:0; pointer-events:none;">
        <div class="loader-content">
            <img class="loader-logo" src="img/LOGO.real.png" alt="Genesis Logo">
            <div class="loader-spinner"></div>
            <div class="loader-text">SYSTEM INITIALIZING...</div>
        </div>
    </div>
`);

window.onload = async () => {
    
    // 1. LOAD DATA FROM JSON FILES FIRST
    await loadData();
    
    // 2. RENDER CONTENT AFTER DATA IS LOADED
    renderLeaders();
    renderMembers();
    renderPolicies();

    // 3. RESTORE SCROLL POSITION
    // We do this AFTER rendering so the page is long enough to scroll
    const currentPath = window.location.pathname;
    const savedScroll = sessionStorage.getItem(`scrollPos_${currentPath}`);
    
    if (savedScroll) {
        // Delay to ensure smooth scroll restoration
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(savedScroll),
                behavior: 'instant'
            });
        }, 50);
    }

    // 4. HIDE LOADER (Smooth Fade Out)
    // Minimum loading time ensures smooth transition
    const introPlayed = runIntroSequence();
    if (!introPlayed) {
        setTimeout(() => {
            const loader = document.getElementById('genesis-loader');
            if (loader) {
                loader.classList.add('hidden');
            }
            document.body.classList.add('loaded');
            document.body.classList.remove('show-loader');
        }, 600); // Slightly longer for smoother feel
    } else {
        const loader = document.getElementById('genesis-loader');
        if (loader) {
            loader.classList.add('hidden');
        }
        document.body.classList.add('loaded');
        document.body.classList.remove('show-loader');
    }

    // 5. SETUP LINK INTERCEPTORS (To Save Scroll on Exit)
    setupNavigation();
};

function runIntroSequence() {
    const overlay = document.getElementById('intro-overlay');
    if (!overlay) return false;

    const alreadyShown = sessionStorage.getItem('introShown') === '1';
    if (alreadyShown) {
        document.documentElement.classList.remove('has-intro');
        overlay.remove();
        return false;
    }

    sessionStorage.setItem('introShown', '1');
    document.body.classList.add('intro-active', 'loaded');

    overlay.classList.add('play');

    setTimeout(() => {
        overlay.classList.add('done');
        document.body.classList.remove('intro-active');
        document.documentElement.classList.remove('has-intro');
        setTimeout(() => {
            overlay.remove();
        }, 400);
    }, 10000);

    return true;
}

// Fix back/forward cache (bfcache) restoring a faded-out page
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        // Ensure page is visible after history navigation (back/forward swipe)
        document.body.classList.remove('fade-out-active');
        document.body.classList.add('loaded');

        const loader = document.getElementById('genesis-loader');
        if (loader) {
            loader.classList.add('hidden');
        }
        document.body.classList.remove('show-loader');

        // Restore scroll position if available
        const currentPath = window.location.pathname;
        const savedScroll = sessionStorage.getItem(`scrollPos_${currentPath}`);
        if (savedScroll) {
            window.scrollTo({
                top: parseInt(savedScroll, 10) || 0,
                behavior: 'instant'
            });
        }
    }
});

/* --- NAVIGATION HANDLER --- */
function setupNavigation() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            
            // Only intercept internal links (not # or external)
            if (target && !target.startsWith('#') && !target.startsWith('http')) {
                e.preventDefault(); // Stop instant jump

                // A. Save Current Scroll Position
                const currentPath = window.location.pathname;
                sessionStorage.setItem(`scrollPos_${currentPath}`, window.scrollY);

                // B. Fade out body smoothly
                document.body.classList.add('fade-out-active');
                document.body.classList.add('show-loader');

                // C. Show Loader with slight delay for smooth transition
                setTimeout(() => {
                    const loader = document.getElementById('genesis-loader');
                    if (loader) {
                        loader.classList.remove('hidden');
                    }
                }, 200);

                // D. Navigate to new page after smooth fade
                setTimeout(() => {
                    window.location.href = target;
                }, 600); // Increased for smoother transition
            }
        });
    });
}

/* --- RENDERING FUNCTIONS --- */
function renderLeaders() {
    const container = document.getElementById('leaders-container');
    if(!container) return;
    
    // Card ranks for leader hierarchy
    const leaderRanks = ['A', 'K', 'K', 'K', 'K', 'Q', 'Q', 'Q', 'Q', 'J', 'J', 'J', 'J', '10', '10'];
    const suits = ['♠', '♥', '♦', '♣'];
    const suitClasses = ['suit-black', 'suit-red', 'suit-red', 'suit-black'];
    
    let html = '';
    leadersData.forEach((l, index) => {
        const imageSrc = l.img ? l.img : 'https://via.placeholder.com/400x600/000000/ff0033?text=NO+IMAGE';
        
        // Get rank & suit for this leader
        const rank = leaderRanks[index] || '10';
        const suitIndex = index % 4;
        const suit = suits[suitIndex];
        const suitClass = suitClasses[suitIndex];
        
        html += `
        <div class="leader-block">
            <!-- Card Rank Badge -->
            <div class="leader-rank-badge">
                <span class="rank-number">${rank}</span>
                <span class="rank-suit ${suitClass}">${suit}</span>
            </div>
            
            <div class="leader-left">
                <img src="${imageSrc}" alt="${l.name}">
                <!-- Corner decorations -->
                <div class="card-corner top-left">
                    <span class="corner-rank">${rank}</span>
                    <span class="corner-suit ${suitClass}">${suit}</span>
                </div>
                <div class="card-corner bottom-right">
                    <span class="corner-rank">${rank}</span>
                    <span class="corner-suit ${suitClass}">${suit}</span>
                </div>
            </div>
            <div class="leader-right">
                <div class="info-box position-highlight">
                    <span class="box-label">ตำแหน่ง</span>
                    <h2>${l.pos}</h2>
                </div>
                <div class="info-box">
                    <span class="box-label">ชื่อ-สกุล</span>
                    <span class="box-value">${l.name}</span>
                </div>
                <div class="info-box">
                    <span class="box-label">ชื่อเล่น</span>
                    <span class="box-value">${l.nick}</span>
                </div>
                <div class="info-box">
                    <span class="box-label">ประวัติการศึกษา</span>
                    <span class="box-value">${l.edu}</span>
                </div>
                <div class="contact-area">
                    <div class="contact-header">ช่องทางการติดต่อ</div>
                    <div class="social-grid">
                        <a href="${l.ig}" target="_blank" class="social-link ig">Instagram</a>
                        <a href="${l.fb}" target="_blank" class="social-link fb">Facebook</a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function renderMembers() {
    const grid = document.getElementById('members-grid');
    if(!grid) return;
    
    let html = '';
    for(let i = 1; i <= membersData.length; i++) {
        let name = membersData[i-1];
        html += `
        <div class="member-card">
            <div class="m-num">#${i}</div>
            <div class="m-name">${name}</div>
        </div>`;
    }
    grid.innerHTML = html;
}

function renderPolicies() {
    const grid = document.getElementById('policyGrid');
    if(!grid) return;
    
    // All red suits for decoration
    const suits = ['♠', '♥', '♦', '♣'];
    
    let html = '';
    policies.forEach((p, index) => {
        // Simple number 1-16
        const cardNumber = index + 1;
        
        // Cycle through suits (all red)
        const suitIndex = index % 4;
        const suit = suits[suitIndex];
        
        html += `
        <div class="policy-card" data-number="${cardNumber}" onclick="openPolicy(${index})">
            <span class="card-suit-top suit-red">${suit}</span>
            <span class="card-center-suit suit-red">${suit}</span>
            <span class="policy-text">${p.t}</span>
            <span class="card-suit-bottom suit-red">${suit}</span>
        </div>`;
    });
    grid.innerHTML = html;
}

/* --- MODAL LOGIC --- */
function openPolicy(index) { 
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modalBody');
    if(!modal || !body) return;
    const p = policies[index];

    const formattedDescription = formatPolicyDescription(p.d);
    
    body.innerHTML = `
        <div style="padding: 40px; text-align: center;">
            <h2 style="color:var(--laser); font-family:'Cinzel'; margin-bottom:20px; font-size:2rem;">${p.t}</h2>
            <div style="font-size:1.3rem; line-height:1.8; color:#ddd; text-align:left;">${formattedDescription}</div>
        </div>`;
    
    // Get current scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    // Store scroll position for restore
    modal.dataset.scrollY = String(scrollY);
    
    // Show modal
    modal.classList.add('show');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closePopup() { 
    const modal = document.getElementById('infoModal');
    if(modal) {
        modal.classList.remove('show');
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Restore scroll position
    const scrollY = modal?.dataset?.scrollY || '0';
    if (modal?.dataset) {
        delete modal.dataset.scrollY;
    }
    window.scrollTo(0, parseInt(scrollY, 10) || 0);
}

function closeOutside(e) { 
    if(e.target.id === 'infoModal') {
        closePopup();
    }
}

function formatPolicyDescription(text) {
    if (!text) return '';
    const lines = text.split('\n');
    let html = '';
    let inList = false;

    const closeList = () => {
        if (inList) {
            html += '</ul>';
            inList = false;
        }
    };

    lines.forEach((rawLine) => {
        const line = rawLine.trim();
        if (!line) {
            closeList();
            html += '<div style="height:12px;"></div>';
            return;
        }

        if (line.startsWith('- ')) {
            if (!inList) {
                html += '<ul style="margin:0 0 12px 22px; text-align:left;">';
                inList = true;
            }
            html += `<li>${line.slice(2)}</li>`;
        } else {
            closeList();
            html += `<p style="margin:0 0 12px;">${line}</p>`;
        }
    });

    closeList();
    return html;
}