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
    <div id="genesis-loader">
        <div class="loader-content">
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
        // Slight delay to ensure browsers respect the jump
        setTimeout(() => {
            window.scrollTo(0, parseInt(savedScroll));
        }, 0);
    }

    // 4. HIDE LOADER (Fade Out)
    setTimeout(() => {
        document.getElementById('genesis-loader').classList.add('hidden');
        document.body.classList.add('loaded'); // Trigger existing fade-in
    }, 500); // 0.5s loading time

    // 5. SETUP LINK INTERCEPTORS (To Save Scroll on Exit)
    setupNavigation();
};

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

                // B. Show Loader
                document.getElementById('genesis-loader').classList.remove('hidden');

                // C. Go to new page after delay
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }
        });
    });
}

/* --- RENDERING FUNCTIONS --- */
function renderLeaders() {
    const container = document.getElementById('leaders-container');
    if(!container) return;
    
    let html = '';
    leadersData.forEach((l) => {
        const imageSrc = l.img ? l.img : 'https://via.placeholder.com/400x600/000000/ff0033?text=NO+IMAGE';
        html += `
        <div class="leader-block">
            <div class="leader-left">
                <img src="${imageSrc}" alt="${l.name}">
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
    for(let i = 1; i <= 100; i++) {
        let name = membersData[i-1] ? membersData[i-1] : `สมาชิกพรรค ${i}`;
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
    
    let html = '';
    policies.forEach((p, index) => {
        html += `<div class="policy-card" onclick="openPolicy(${index})">${p.t}</div>`;
    });
    grid.innerHTML = html;
}

/* --- MODAL LOGIC --- */
function openPolicy(index) { 
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modalBody');
    if(!modal || !body) return;
    const p = policies[index];
    
    body.innerHTML = `
        <div style="padding: 40px; text-align: center;">
            <h2 style="color:var(--laser); font-family:'Cinzel'; margin-bottom:20px; font-size:2rem;">${p.t}</h2>
            <p style="font-size:1.3rem; line-height:1.8; color:#ddd;">${p.d}</p>
        </div>`;
    modal.classList.add('show');
}
function closePopup() { document.getElementById('infoModal').classList.remove('show'); }
function closeOutside(e) { if(e.target.id === 'infoModal') closePopup(); }