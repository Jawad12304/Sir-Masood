// --- Background Slideshow ---
const slideshowContainer = document.getElementById('slideshow-container');
const images = [
    "images/KSA Prefab Housing System - Contemporary Design.jpg",
    "images/KSA Prefab Housing System - Post Modern Design.png",
    "images/KSP Design Review.png",
    "images/KSP Design.png",
    "images/KSP Grand Mosque.jpg",
    "images/KSP Hub Design.png",
    "images/KSP Loop Bridges.jpg",
    "images/KSP Loop Bridges.png",
    "images/King Salman Park 1.jpg",
    "images/King Salman Park 2.jpg",
    "images/Museum of the Earth.jpg",
    "images/Royal Arts Complex.png",
    "images/Visitor Centre.jpg"
];

let currentImageIndex = 0;
const slideElements = [];

// Preload and create img elements
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('slide-img');
    if (index === 0) img.classList.add('active');
    slideshowContainer.appendChild(img);
    slideElements.push(img);
});

function nextSlide() {
    slideElements[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % slideElements.length;
    slideElements[currentImageIndex].classList.add('active');
}

// Change slide every 4 seconds
setInterval(nextSlide, 4000);


// --- Modal and Content Logic ---
const modalOverlay = document.getElementById('content-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalContentArea = document.getElementById('modal-content-area');
const navBtns = document.querySelectorAll('.nav-btn');

const contentData = {
    about: `
        <h2 class="section-title">ABOUT SILHOUETTE</h2>
        <div class="content-grid">
            <div class="text-col">
                <h3>Our Origins</h3>
                <p>Silhouette Architectural and Engineering Consultants was established in June of 2025 in Riyadh, Saudi Arabia.</p>
                <p>Its founders are Tarek Abousakher, Saudi national, architect and businessman, and Caspar Smeets, Saudi resident since 2012, architect, engineer and entrepreneur.</p>
            </div>
            <div class="visual-col">
                <div class="project-card">
                    <h4>A Strategic Partnership</h4>
                    <p>Before coming to the Kingdom in 2012, Smeets worked as an architect and project manager for OMA, UNStudio and EGM Architects in the Netherlands. Abousakher became a key account manager responsible for business development, sales, contracts, and design-management of the KAFD real estate.</p>
                </div>
            </div>
        </div>
    `,
    services: `
        <h2 class="section-title">SERVICES</h2>
        <div class="content-grid">
            <div class="text-col">
                <h3>Comprehensive Capabilities</h3>
                <p>Silhouette provides the full range of Architectural and Engineering services from inception to completion of the project.</p>
                <p>These include Design, Design Review, Design Management, Project Management and Supervision.</p>
            </div>
            <div class="visual-col">
                <div class="project-card" style="border-left: 4px solid var(--bg-dark)">
                    <h4>Core Disciplines</h4>
                    <p>• Architecture<br>• Interior Design<br>• Landscape Architecture<br>• Wayfinding<br>• Structural Engineering<br>• Civil Engineering<br>• MEP Engineering<br>• Specialist Engineering</p>
                </div>
            </div>
        </div>
    `,
    projects: `
        <h2 class="section-title">SELECTED PROJECTS</h2>
        <div class="content-grid">
            <div class="text-col">
                <h3>King Salman Park (KSP)</h3>
                <p>Extensive involvement in the famous King Salman Park project, managing technical design reviews for major landmarks.</p>
                
                <h3 style="margin-top: 2rem;">Residential & Commercial</h3>
                <p>Delivering high-end private villas, townhouses, and corporate headquarters across Riyadh.</p>
            </div>
            <div class="visual-col">
                <div class="pie-chart">
                    <div class="pie-slice pie-slice-left">
                        <img src="images/King Salman Park 1.jpg" alt="King Salman Park 1">
                    </div>
                    <div class="pie-slice pie-slice-right">
                        <img src="images/King Salman Park 2.jpg" alt="King Salman Park 2">
                    </div>
                </div>
                <div class="project-card">
                    <h4>KSP Highlights</h4>
                    <p>- KSP Hub Design & Loop Bridges<br>- King Salman Park Grand Mosque<br>- Royal Arts Complex<br>- Museum of the Earth</p>
                </div>
                <div class="project-card">
                    <h4>Private & Commercial Developments</h4>
                    <p>- Riyadh Tower (A new Tower on the Riyadh Skyline)<br>- KSA Prefab Housing (Contemporary, Post Modern, Avantgarde)<br>- Saudi Gaming Company HQ Fitout<br>- Private Villa & Pool, An Nakheel Distr.<br>- Town Houses, King Salman Distr.</p>
                </div>
            </div>
        </div>
    `,
    team: `
        <h2 class="section-title">THE TEAM</h2>
        <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #555;">Silhouette Multi-disciplinary Design Review Team</p>
        <div class="team-grid">
            <div class="team-member">
                <h4>Caspar Smeets</h4>
                <p>Architect - Partner (Netherlands)</p>
            </div>
            <div class="team-member">
                <h4>Tarek Abousakher</h4>
                <p>Architect - Partner (Saudi Arabia)</p>
            </div>
            <div class="team-member">
                <h4>Carlo A.T. Quevedo</h4>
                <p>Architect - Office Manager (Philippines)</p>
            </div>
            <div class="team-member">
                <h4>Ooi Kah Loo</h4>
                <p>Chief Struct & Civil Engineer (Malaysia)</p>
            </div>
            <div class="team-member">
                <h4>Naushad Ali</h4>
                <p>Senior Architect (Pakistan)</p>
            </div>
            <div class="team-member">
                <h4>Awais Ul Haq</h4>
                <p>Senior Architect (Pakistan)</p>
            </div>
            <div class="team-member">
                <h4>Muhammad Shafiq</h4>
                <p>Senior Architect (Pakistan)</p>
            </div>
            <div class="team-member">
                <h4>Muhammad Awais</h4>
                <p>Architect (Pakistan)</p>
            </div>
            <div class="team-member">
                <h4>Kashif Ullah</h4>
                <p>Architect (Pakistan)</p>
            </div>
        </div>
    `
};

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        
        // Inject Content
        if(contentData[target]) {
            modalContentArea.innerHTML = contentData[target];
        } else {
            modalContentArea.innerHTML = '<h2 class="section-title">Coming Soon</h2>';
        }
        
        // Open Modal
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// --- Audio Toggle Logic ---
const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioOnIcon = document.getElementById('audio-on-icon');
const audioOffIcon = document.getElementById('audio-off-icon');

if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
        audioOnIcon.classList.toggle('hidden');
        audioOffIcon.classList.toggle('hidden');
    });
}
