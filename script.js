/* =========================================
   GENESIS DATA & LOGIC
   ========================================= */

/* --- 1. LEADER DATA --- */
const leadersData = [
    {
        name: "นายนาวี บานกระโทก",
        pos: "ประธานพรรค GENESIS",
        nick: "เอ็ม",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านกุดโคลนจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_15.jpg",
        ig: "https://www.instagram.com/m_nawee_52/",
        fb: "https://www.facebook.com/nawin.niram"
    },
    {
        name: "นางสาวณัฐพร พะนิรัมย์",
        pos: "รองฝ่ายอำนวยการ",
        nick: "แก้ม",
        edu: "ประวัติการศึกษาจบประถมศึกษาปีที่6จาก โรงเรียนบ้านศรีภูมิสามัคคี จบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_14.jpg",
        ig: "https://www.instagram.com/kaxi_em6/",
        fb: "https://www.facebook.com/nattaporn.phaniram"
    },
    // ... COPY AND PASTE THE BLOCK BELOW FOR LEADERS 3-15 ...
    {
        name: "นางสาวสุชาดา บุญก้อง",
        pos: "รองฝ่ายวิชาการ",
        nick: "น้ำหวาน",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านขามตาเบ้าจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_13.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/suchadaa_._.09/",
        fb: "https://www.facebook.com/suchada.buykong"
    },
    {
        name: "นายเผดิมภพ จันทร์ดวง",
        pos: "รองฝ่ายกิจการนักเรียน",
        nick: "มาร์ค",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านสวายสอ 'ไกรปัญญานุเคราะห์' จบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_12.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/mmk_.on2u/",
        fb: "https://www.facebook.com/mark.kung.317227"
    },
    {
        name: "นางสาวสิริรัตน์ พิเรศรัมย์",
        pos: "รองฝ่ายบริหารทั่วไป",
        nick: "ไข่มุก",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนวัดธรรมถาวรจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_11.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/mmookk_sirirat/",
        fb: "https://www.facebook.com/sirirat.kaimook"
    },
    {
        name: "นางสาวปิยะนุช ปรากฏหาญ",
        pos: "ประธานฝ่ายเหรัญญิก",
        nick: "น้ำอิง",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านสูงเนินจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_10.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/ingxiiii/",
        fb: "https://www.facebook.com/piyanuch.prakodhan"
    },
    {
        name: "นางสาวจิรัชยา การเพียร",
        pos: "ประธานฝ่านเลขานุการ",
        nick: "โมโม่",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านกะนัง(ฤทธ์ประชาสรรค์)จบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_9.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/momo_meow._/",
        fb: "https://www.facebook.com/jiratchaya.kanphean"
    },
    {
        name: "นางสาวปรีดาพร อาจทวีกูล",
        pos: "ประธานฝ่ายสำนักงานและธุรการ",
        nick: "ข้าวฟ่าง",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านอโณทัยจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_8.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/_luvfang/",
        fb: "https://www.facebook.com/preedaporn.ardtaweekul"
    },
    {
        name: " นางสาวอเล็กซานดร้า นาตาชา พาร์คคิน",
        pos: "ประธานฝ่ายประชาสัมพันธ์",
        nick: "อเล็กซ์",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านตารามจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_7.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/alexnatachz/",
        fb: "https://www.facebook.com/alexandra.parkin.5891"
    },
    {
        name: "นางสาวณัฐธิดา พะนิรัมย์",
        pos: "ประธานฝ่ายกิจกรรมและนันทนาการ",
        nick: "ไอซ์",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านลำดวนจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_6.jpg", // ใส่ path รูปภาพ
        ig: "https://www.facebook.com/nttidr.paniram",
        fb: "https://www.instagram.com/jusst.mxe/"
    },
    {
        name: "นางสาวพรธิวา บาลไธสง",
        pos: "ประธานฝ่ายวัดและประเมินผล",
        nick: "ฟ้า",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนวัดบ้านเมืองโพธิ์จบมัธยมศึกษาตอนต้นจาก โรงเรียนวัดบ้านเมืองโพธิ์",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_5.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/missold_u/",
        fb: "https://www.facebook.com/phothiwa.phothiwa"
    },
    {
        name: "นายจักรรินทร์ ซาเสน",
        pos: "ประธานฝ่ายโสตทัศนศึกษาและเทคโนโลยี",
        nick: "การ์ด",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนบ้านขามตาเบ้าจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_4.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/x3salen9/",
        fb: "https://www.facebook.com/profile.php?id=100095134456086"
    },
    {
        name: "นายพีระภาค สนุกล้ำ",
        pos: "ประธานฝ่ายระดับชั้นและระเบียบวินัย",
        nick: "พุฒ",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนวัดอินทบูรพาจบมัธยมศึกษาตอนต้นจาก โรงเรียนวัดอินทบูรพา",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_3.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/pu_typ/",
        fb: "https://www.facebook.com/pudpeerapak"
    },
    {
        name: "นางสาวณัฏฐาวรีย์ พินิชรัมย์",
        pos: "ประธานฝ่ายสวัสดิการและปฏิคม",
        nick: "แอ๋ม",
        edu: "จบประถมศึกษาปีที่6จาก โรงเรียนวัดธรรมถาวรจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_2.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/natawaree_/",
        fb: "https://www.facebook.com/natawaree.amm"
    },
    {
        name: "นายปัญญา กุลแก้ว",
        pos: "ประธานฝ่ายอาคารและสถานที่",
        nick: "บอล",
        edu: "ประวัติการศึกษาจบประถมศึกษาปีที่6จาก โรงเรียนบ้านระกาเสม็ดจบมัธยมศึกษาตอนต้นจาก โรงเรียนกระสังพิทยาคม",
        img: "img/photoimg/LINE_ALBUM_แกนนำ_260125_1.jpg", // ใส่ path รูปภาพ
        ig: "https://www.instagram.com/panya_2009/",
        fb: "https://www.facebook.com/panya.kunkaew"
    },
];


/* --- 2. MEMBER DATA --- */
const membersData = [
    "นาย สวัส ดี", "นางสาว รัก ดี", "นาย ใจ กล้า"
];

/* --- 3. POLICY DATA --- */
const policies = [
  { t: "1. สุขาน่าใช้", d: "ห้องน้ำจะต้องได้รับการแก้ไขในด้านต่างๆ เพราะห้องน้ำที่ดีต้องถูกต้องตามหลักสุขลักษณะ จุดประสงค์เพื่อใช้ในการขับถ่าย เพื่อความสะอาดส่วนบุคคล เพื่อป้องกันการแพร่กระจายของเชื้อโรค ปัญหาที่เราพบ ประตูพัง มีกลิ่นที่รุนแรง น้ำสำหรับใช้ทำธุระส่วนตัวหมด ฯลฯ ปัญหาเหล่านี้จะต้องหมดไป" },
  { t: "2. โรงเรียนไร้ควัน", d: "เราพร้อมที่จะทำงานร่วมกับเจ้าหน้าที่ลาดตระเวนหรือฝ่ายกิจการนักเรียน ในการควบคุมดูแลนักเรียนไม่ให้นักเรียนสูบบุหรี่ภายในโรงเรียน หรือสถานที่ราชการ และเพื่อป้องกันโรคที่มาพร้อมกับการสูบบุหรี่อีกด้วย นักเรียนจะได้มีสุขภาพที่ดีขึ้น และไม่เป็นปัญหาของสังคม" },
  { t: "3. นักเรียนกล้าพูด", d: "เพื่อปัญหาภายในโรงเรียนหมดไป นักเรียนคนใดที่พบปัญหาที่อยู่ภายในโรงเรียน สามารถแจ้งพวกเราให้ดำเนินการแก้ไข โดยทางเราจะเปิดช่องทางรับฟังปัญหาและข้อเสนอแนะจากนักเรียนอย่างทั่วถึง" },
  { t: "4. ความเท่าเทียม", d: "เราจะทำให้นักเรียนทุกคนมีความเท่าเทียมกัน มีสิทธิ์ที่จะแสดงความคิดเห็นในเรื่องต่างๆ มีสิทธิ์ที่จะแสดงออกในด้านต่างๆที่สร้างสรรค์และพวกเรา Genesis พร้อมที่จะสนับสนุน lgbtq+ ในทุกๆโอกาส" },
  { t: "5. พี่ช่วยน้อง", d: "พี่ช่วยน้อง น้องช่วยพี่ภายโรงเรียนเรามีนักเรียนที่มีความสามารถมากมายในด้านต่างๆ หากเราต้องการเรียนรู้ในสิ่งที่สนใจ สามารถปรึกษาผู้รู้ไม่ว่าจะเป็นรุ่นพี่หรือรุ่น้องเพื่อกระชับความสัมพันธ์ภายในโรงเรียน" },
  { t: "6. ฝันที่เป็นจริง", d: "ทำฝันให้เป็นจริงนักเรียนทุกคนล้วนมี ความคิด ความฝัน ความสามารถ ในด้านต่างๆ พวกเราพร้อมที่จะสนับสนุนและจัดกิจกรรมเพื่อให้นักเรียนแสดงความสามารถนั้นได้เต็มที่" },
  { t: "7. พัฒนาโรงอาหาร", d: "พวกเราพร้อมที่จะทำให้โรงอาหารมีความสะอาด สะดวกต่อการรับประทานอาหาร และจัดการเรื่องพัดลมที่อยู่ภายในโรงอาหารให้สามารถใช้งานได้ทุกตัวครอบคลุมทั้งโรงอาหาร" },
  { t: "8. ส่งรักรายเดือน", d: "เราจะจัดทำจุดส่งจดหมายถึงนักเรียนและคณะครูภายในโรงเรียน เพื่อให้นักเรียนเขียนความในใจส่งถึงคนที่เราอยากให้อ่าน โดยระหว่างที่จดหมายอยู่กับเรา จะไม่สามารถมีใครอ่านได้ จนกว่าจะถึงมือผู้รับ" },
  { t: "9. สานต่อนโยบายเดิม", d: "เราจะนำนโยบายที่รุ่นพี่ที่เคยทำไว้ในปีการศึกษาที่ผ่านมา หรือการที่นโยบายนั้นดำเนินอยู่นำมาพัฒนาโรงเรียนให้มีความน่าอยู่มากยิ่งขึ้น" },
  { t: "10. ดาวเดือนสร้างสรรค์", d: "เราจะให้นักเรียนแต่ละคนที่มีสามารถสมัครเข้าประกวดดาวเดือนในแต่ละข่วงชั้นนั้นๆ เพื่อให้นักเรียนมีความกล้าแสดงออกในด้านต่างๆ" },
  { t: "11. ทิชชู่ทั่วถึง", d: "ภายในห้องน้ำควรมีสิ่งอำนวยความสะดวกให้แก่ผู้ใช้งาน โดยหนึ่งในนั้นคือกระดาษชำระ เราจะจัดเตรียมกระดาษชำระให้แก่นักเรียนที่ต้องการใช้ภายในห้องน้ำ เพื่อความสะดวกและความสะอาดแก่ผู้ใช้งานห้องน้ำ" },
  { t: "12. ออกแบบปกสมุด", d: "ก่อนเปิดภาคเรียน จะมีการแจกสมุดพร้อมอุปกรณ์การเรียนเพื่อให้นักเรียนได้ใช้เรียน เราจะเปิดให้นักเรียนได้ออกแบบปกสมุดเพื่อใช้ในการเรียน เพื่อสนับสนุนความสามารถนักเรียนด้านศิลปะการออกแบบ การวาดรูป" },
  { t: "13. น้ำดื่มสะอาด", d: "เราจะทำการตรวจสอบตู้กดน้ำในทุกๆเช้าเพื่อความสะอาดของตู้กดน้ำ เพราะน้ำดื่มเป็นสิ่งที่จำเป็นต่อการใช้ชีวิต เราจึงต้องทำให้น้ำสะอาดดื่มสะอาดตลอดเวลา" },
  { t: "14. กล่องฉุกเฉิน", d: "ห้องน้ำเราจะใส่กล่องฉุกเฉินในห้องน้ำ เพื่อให้นักเรียนที่เกิดเหตุฉุกเฉินสามารถช่วยเหลือตัวเองได้ทันทีที่ต้องการ เช่นผ้าอนามัย ยางมัดผม กิ๊ปติดผม " },
  { t: "15. Content สร้างสรรค์", d: "โรงเรียนเพื่อสนับสนุนให้นักเรียนมีความกล้าแสดงออก เพื่อพัฒนาศักยภาพของนักเรียนด้านการนำเสนอ และเป็นการทำให้โรงเรียนเป็นที่รุูจักมากยิ่งขึ้นอีกด้วย" },
  { t: "16. สาระยามเช้า", d: "เราจะมีการประชาสัมพันธ์พูดคุย อัพเดทข่าวสารต่างๆในช่วงเช้าว่าในช่วงนั้นมีสถานกนารณ์อะไรเกิดขึ้นบ้าง สัปดาห์ละ 1 วัน" }
];


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

window.onload = () => {
    
    // 2. RENDER CONTENT FIRST
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