// Lucide Icons initialization
    lucide.createIcons();
// 🔔 Notification function (optional)
function showNotification(message, type = 'info') {
  const area = document.getElementById('notification-area');
  const note = document.createElement('div');
  note.className = `pointer-events-auto bg-${type === 'success' ? 'green' : 'indigo'}-500 text-white px-4 py-2 rounded-lg shadow-md mb-2`;
  note.innerText = message;
  area.appendChild(note);
  setTimeout(() => note.remove(), 3000);
}
    // --- MOCK DATA ---
    let MOCK_DATA = {
        currentUser: {
            id: 101,
            name: "Aakash Sharma",
            email: "aakash@example.com",
            profileImg: "https://placehold.co/40x40/1E40AF/ffffff?text=AS",
            credits: 550,
            skills: ["Physics", "Calculus", "Web Development"],
            learningGoals: ["Advanced Python", "Data Structures"],
            totalEarnedCredits: 700,
            totalSpentCredits: 150,
        },
        students: [
            { id: 101, name: "Aakash Sharma", skills: ["Physics", "Calculus"], profileImg: "https://placehold.co/100x100/1E40AF/ffffff?text=AS" },
            { id: 102, name: "Priya Singh", skills: ["Chemistry", "Biology"], profileImg: "https://placehold.co/100x100/EF4444/ffffff?text=PS" },
            { id: 103, name: "Rahul Verma", skills: ["History", "English"], profileImg: "https://placehold.co/100x100/059669/ffffff?text=RV" },
            { id: 104, name: "Sanya Gupta", skills: ["Coding", "Mathematics"], profileImg: "https://placehold.co/100x100/F59E0B/ffffff?text=SG" },
        ],
        requests: [
            { id: 1, type: "help_request", studentId: 102, studentName: "Priya Singh", title: "Need help with Biology", description: "Need to understand tough concepts of Cell Structure.", skill: "Biology", credits: 50, status: "Open" },
            { id: 2, type: "help_offer", studentId: 101, studentName: "Aakash Sharma", title: "Physics Tutoring", description: "Can help with Class 12th Optics. 2 hours session.", skill: "Physics", credits: 30, status: "Open" },
            { id: 3, type: "help_request", studentId: 103, studentName: "Rahul Verma", title: "Essay Proofreading", description: "Need final draft check for my English essay.", skill: "English", credits: 20, status: "Closed" },
            { id: 4, type: "help_offer", studentId: 104, studentName: "Sanya Gupta", title: "Web Dev Basics", description: "Teaching HTML/CSS basics, 1-on-1 session.", skill: "Web Development", credits: 40, status: "Open" },
        ],
        transactions: [
            { id: 1001, type: "Earn", date: "Oct 25, 2025", description: "Completed Physics help session", amount: 100 },
            { id: 1002, type: "Spend", date: "Oct 20, 2025", description: "Got Calculus doubt solved", amount: 50 },
            { id: 1003, type: "Earn", date: "Oct 15, 2025", description: "Won Community Quiz", amount: 20 },
        ],
        rewards: [
            { id: 201, name: "Rs 100 Amazon Voucher", cost: 200, type: "voucher", claimed: false },
            { id: 202, name: "1-Month Premium Access", cost: 500, type: "voucher", claimed: true },
            { id: 203, name: "E-book on Coding", cost: 100, type: "coupon", claimed: false },
        ],
        blogPosts: [
            { id: 1, title: "How to Prepare Smartly for Exams", snippet: "Tips for studying effectively and managing stress.", date: "Oct 28, 2025" },
            { id: 2, title: "Skill Exchange: A New Way to Learn", snippet: "The best platform for sharing and acquiring knowledge.", date: "Oct 20, 2025" },
            { id: 3, title: "Motivation and Focus Techniques", snippet: "Simple methods to maintain concentration during study.", date: "Oct 10, 2025" },
        ]
    };
    
    // Function to load and save data using localStorage (Simulating persistence)
    function initializeData() {
        const storedCredits = localStorage.getItem('userCredits');
        const storedTransactions = localStorage.getItem('userTransactions');
        const storedRewards = localStorage.getItem('userRewards');
        
        if (storedCredits) {
            MOCK_DATA.currentUser.credits = parseInt(storedCredits);
            MOCK_DATA.currentUser.totalEarnedCredits = parseInt(localStorage.getItem('totalEarnedCredits') || 700);
            MOCK_DATA.currentUser.totalSpentCredits = parseInt(localStorage.getItem('totalSpentCredits') || 150);
        }
        if (storedTransactions) {
            MOCK_DATA.transactions = JSON.parse(storedTransactions);
        }
        if (storedRewards) {
            MOCK_DATA.rewards = JSON.parse(storedRewards);
        }
        updateUIAccountInfo();
    }

    function saveCreditData() {
        localStorage.setItem('userCredits', MOCK_DATA.currentUser.credits);
        localStorage.setItem('totalEarnedCredits', MOCK_DATA.currentUser.totalEarnedCredits);
        localStorage.setItem('totalSpentCredits', MOCK_DATA.currentUser.totalSpentCredits);
        localStorage.setItem('userTransactions', JSON.stringify(MOCK_DATA.transactions));
        localStorage.setItem('userRewards', JSON.stringify(MOCK_DATA.rewards));
        updateUIAccountInfo();
    }

    function updateUIAccountInfo() {
        document.getElementById('user-credits').textContent = `${MOCK_DATA.currentUser.credits} Cr.`;
    }
    
    // --- SVG LOGO FUNCTION (Abstract Connection/Path) ---
    function knowledgeExchangeLogo(size = 'w-6 h-6', colorClass = 'text-accent') {
        // Logo: Abstract connection/path/network symbol
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
        const svgStroke = colorClass.includes('text-white') ? '#ffffff' : accentColor;
        
        return `
            <svg class="${size} ${colorClass}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${svgStroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- Main Connection Line -->
                <path d="M12 2v20"/>
                <!-- Left Nodes/Data Influx -->
                <path d="M5 8h4"/>
                <circle cx="5" cy="8" r="1"/>
                <!-- Right Nodes/Data Outflux -->
                <path d="M15 16h4"/>
                <circle cx="19" cy="16" r="1"/>
                <!-- Central Node -->
                <circle cx="12" cy="12" r="2"/>
            </svg>
        `;
    }

    // --- THEME SWITCH LOGIC ---
    function applyTheme(theme) {
        const html = document.documentElement;
        const navLogoContainer = document.getElementById('nav-logo-container');
        const themeIcon = document.getElementById('theme-toggle-icon');
        
        if (theme === 'dark') {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            
            if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
            if (navLogoContainer) navLogoContainer.innerHTML = knowledgeExchangeLogo('w-8 h-8', 'text-indigo-400');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');

            if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
            if (navLogoContainer) navLogoContainer.innerHTML = knowledgeExchangeLogo('w-8 h-8', 'text-indigo-600');
        }
        
        lucide.createIcons();
        // Re-render the current page to ensure all dynamic elements pick up the new CSS variables
        if (activePage) renderPage(activePage, true); 
    }

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }


    // --- ROUTING/PAGE RENDERING (Routing Simulation) ---
    
    const appContainer = document.getElementById('app');
    let activePage = 'home';

    // Rerender argument ensures content is fully refreshed, useful after theme change
    function renderPage(pageName, rerender = false) {
        // Hide all sections
        Array.from(appContainer.children).forEach(child => child.classList.remove('active'));

        // Show the requested section
        const pageElement = document.getElementById(`page-${pageName}`);
        if (pageElement) {
            pageElement.classList.add('active');
            activePage = pageName;
            
            // Re-render dynamic content only if explicitly requested or if it's a dynamic page
            if (pageName === 'dashboard' || rerender) renderDashboardContent();
            if (pageName === 'community' || rerender) renderCommunityContent();
            if (pageName === 'rewards' || rerender) renderRewardsContent();

            window.scrollTo(0, 0); // Scroll to top on page change
        } else {
            console.error(`Page '${pageName}' not found. Rendering Home.`);
            renderPage('home');
        }
    }

    // --- HOME PAGE ---
    function renderHome() {
        // Ensure to remove the hackathon winner text and tone down boldness
        return `
            <div id="page-home" class="active">
                <!-- Interactive Hero Section (Canvas Network) -->
                <section class="text-center mb-16 relative interactive-hero rounded-xl shadow-2xl">
                    <canvas id="hero-canvas" class="rounded-xl"></canvas>
                    <div class="hero-content text-white py-20">
                        <!-- Logo in Hero Section with subtle glow -->
                        <div class="w-20 h-20 mx-auto mb-6 logo-animation">
                            ${knowledgeExchangeLogo('w-20 h-20', 'text-indigo-200')} 
                        </div>

                        <!-- Subtler Typography -->
                        <h1 class="text-5xl font-bold mb-4 leading-tight sm:text-6xl" style="text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);">
                            THE <span class="text-indigo-300">FUTURE</span> OF KNOWLEDGE EXCHANGE
                        </h1>
                        <!-- Removed 'Hackathon Winner' tag -->
                        <p class="text-xl mb-10 max-w-4xl mx-auto opacity-90 font-light text-gray-200">
                            Empowering students through seamless, decentralized skill trading and collaborative learning.
                        </p>
                        <button onclick="renderPage('community')" class="bg-indigo-400 hover:bg-indigo-500 text-indigo-900 font-semibold py-3 px-10 rounded-full text-lg shadow-2xl transition duration-300 transform hover:scale-105 border-2 border-indigo-500/50">
                            Start Your Exchange Mission <span data-lucide="zap" class="w-5 h-5 inline-block ml-2"></span>
                        </button>
                    </div>
                </section>

                <section class="py-12">
                    <h2 class="text-4xl font-bold text-center text-primary mb-12 border-b-2 border-accent/20 pb-4">Core Mechanics</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Feature: Skill Exchange -->
                        <div class="card bg-secondary p-8 rounded-xl text-center hover:border-accent">
                            <span data-lucide="codesandbox" class="feature-icon w-12 h-12 mx-auto mb-4 text-accent"></span>
                            <h3 class="text-2xl font-bold text-primary mb-2">Decentralized Skill Exchange</h3>
                            <p class="text-secondary">Direct P2P knowledge transfer in advanced topics like AI, Quantum Physics, and Web3.</p>
                            <a href="#" onclick="renderPage('community')" class="text-accent font-semibold mt-4 inline-block hover:opacity-80">Explore Marketplace</a>
                        </div>
                        <!-- Feature: Earn Rewards -->
                        <div class="card bg-secondary p-8 rounded-xl text-center hover:border-accent">
                            <span data-lucide="bar-chart-3" class="feature-icon w-12 h-12 mx-auto mb-4 text-accent"></span>
                            <h3 class="text-2xl font-bold text-primary mb-2">Smart Credit System</h3>
                            <p class="text-secondary">Earn quantifiable credits (Cr.) based on session quality, redeemable for exclusive rewards.</p>
                            <a href="#" onclick="renderPage('rewards')" class="text-accent font-semibold mt-4 inline-block hover:opacity-80">View Rewards</a>
                        </div>
                        <!-- Feature: Smart Match -->
                        <div class="card bg-secondary p-8 rounded-xl text-center hover:border-accent">
                            <span data-lucide="git-branch" class="feature-icon w-12 h-12 mx-auto mb-4 text-accent"></span>
                            <h3 class="text-2xl font-bold text-primary mb-2">Optimized Learner Match</h3>
                            <p class="text-secondary">AI-driven matching to connect you instantly with the perfect peer for your learning goal.</p>
                            <a href="#" onclick="renderPage('community')" class="text-accent font-semibold mt-4 inline-block hover:opacity-80">Find a Match</a>
                        </div>
                    </div>
                </section>
                
                <section class="py-12 bg-secondary rounded-xl mt-12 p-10 shadow-xl border border-accent/10">
                    <div class="md:flex justify-between items-center">
                        <div class="md:w-1/2">
                            <h2 class="text-4xl font-bold text-primary mb-4">The Next-Gen Learning Network</h2>
                            <p class="text-secondary text-lg mb-6">This is where curiosity meets capability. Stop passive learning; start actively exchanging knowledge with top peers.</p>
                            <button onclick="renderPage('community')" class="btn-primary bg-accent hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200">
                                Join the Network
                            </button>
                        </div>
                        <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                            <img src="https://placehold.co/400x250/111827/818CF8?text=Connection+Network+Visual" class="rounded-lg shadow-2xl border-2 border-accent/50" alt="Community Graphic">
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    // --- DASHBOARD, COMMUNITY, REWARDS, BLOG, ABOUT FUNCTIONS (Kept as before, using updated CSS variables) ---
    
    function renderDashboardContent() {
        const dashboardDiv = document.getElementById('dashboard-content');
        if (!dashboardDiv) return;

        const { currentUser, transactions, requests } = MOCK_DATA;

        const transactionHTML = transactions.map(t => `
            <div class="flex justify-between items-center p-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <div class="flex items-center space-x-3">
                    <span data-lucide="${t.type === 'Earn' ? 'arrow-up-right' : 'arrow-down-left'}" class="w-5 h-5 ${t.type === 'Earn' ? 'text-green-500' : 'text-red-500'}"></span>
                    <div>
                        <p class="font-medium text-primary">${t.description}</p>
                        <p class="text-sm text-secondary">${t.date}</p>
                    </div>
                </div>
                <span class="font-semibold ${t.type === 'Earn' ? 'text-green-600' : 'text-red-600'}">
                    ${t.type === 'Earn' ? '+' : '-'} ${t.amount} Cr
                </span>
            </div>
        `).join('');

        const myRequests = requests.filter(r => r.studentId === currentUser.id);
        const requestHTML = myRequests.map(r => `
            <div class="p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${r.type === 'help_request' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'}">
                        ${r.type === 'help_request' ? 'Help Request' : 'Help Offer'}
                    </span>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${r.status === 'Open' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}">
                        ${r.status}
                    </span>
                </div>
                <h3 class="text-lg font-bold text-primary mt-2">${r.title}</h3>
                <p class="text-sm text-secondary truncate">${r.description}</p>
                <div class="flex justify-between items-center mt-3">
                    <span class="text-accent font-semibold">${r.credits} Cr</span>
                    <span class="text-sm text-secondary">${r.skill}</span>
                </div>
            </div>
        `).join('');

        dashboardDiv.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- User Profile Card -->
                <div class="lg:col-span-1 card bg-secondary p-6 rounded-xl shadow-lg border border-accent/10">
                    <div class="flex flex-col items-center">
                        <img class="w-28 h-28 rounded-full object-cover border-4 border-accent" src="${currentUser.profileImg}" onerror="this.onerror=null;this.src='https://placehold.co/40x40/1E40AF/ffffff?text=U';" alt="Profile">
                        <h2 class="text-2xl font-bold text-primary mt-4">${currentUser.name}</h2>
                        <p class="text-secondary">${currentUser.email}</p>
                        <div class="mt-4 flex space-x-4">
                            <button class="flex items-center space-x-1 text-sm text-accent hover:opacity-80">
                                <span data-lucide="edit" class="w-4 h-4"></span>
                                <span>Edit Profile</span>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <h3 class="text-lg font-semibold text-primary mb-3">Your Skills</h3>
                        <div class="flex flex-wrap gap-2">
                            ${currentUser.skills.map(s => `<span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">${s}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <!-- Stats & Summary -->
                <div class="lg:col-span-2">
                    <h2 class="text-3xl font-bold text-primary mb-6">Your Dashboard: Performance Summary</h2>
                    
                    <!-- Credit Summary -->
                    <div class="grid md:grid-cols-3 gap-4 mb-6">
                        <div class="card bg-accent text-white p-5 rounded-xl dark:bg-indigo-800">
                            <span data-lucide="wallet" class="w-6 h-6 mb-2"></span>
                            <p class="text-sm font-light text-indigo-100">Available Credits</p>
                            <p class="text-3xl font-bold">${currentUser.credits}</p>
                        </div>
                        <div class="card bg-secondary p-5 rounded-xl border border-green-200 dark:border-green-900">
                            <span data-lucide="trending-up" class="w-6 h-6 text-green-600 mb-2"></span>
                            <p class="text-sm text-secondary">Total Earned</p>
                            <p class="text-3xl font-bold text-green-600">${currentUser.totalEarnedCredits}</p>
                        </div>
                        <div class="card bg-secondary p-5 rounded-xl border border-red-200 dark:border-red-900">
                            <span data-lucide="trending-down" class="w-6 h-6 text-red-600 mb-2"></span>
                            <p class="text-sm text-secondary">Total Spent</p>
                            <p class="text-3xl font-bold text-red-600">${currentUser.totalSpentCredits}</p>
                        </div>
                    </div>
                    
                    <!-- Activity Section -->
                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Recent Transactions -->
                        <div class="card bg-secondary rounded-xl shadow-lg overflow-hidden">
                            <h3 class="text-xl font-bold text-primary p-4 border-b dark:border-gray-700">Recent Transactions</h3>
                            <div class="p-0 divide-y divide-gray-100 dark:divide-gray-700" id="transactions-list">
                                ${transactionHTML || '<p class="text-secondary p-4">No recent transactions.</p>'}
                            </div>
                        </div>

                        <!-- My Posts (Requests/Offers) -->
                        <div class="card bg-secondary rounded-xl shadow-lg overflow-hidden">
                            <h3 class="text-xl font-bold text-primary p-4 border-b dark:border-gray-700">My Posts (Active/Closed)</h3>
                            <div class="divide-y divide-gray-100 dark:divide-gray-700" id="my-requests-list">
                                ${requestHTML || '<p class="text-secondary p-4">You have not posted any requests or offers.</p>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        lucide.createIcons();
    }
    
    function renderCommunityContent() {
        const communityDiv = document.getElementById('community-content');
        if (!communityDiv) return;

        const { requests, students } = MOCK_DATA;
        let displayedRequests = requests;
        
        // Check for filters applied
        const skillFilter = document.getElementById('skill-filter')?.value;
        const typeFilter = document.getElementById('type-filter')?.value;
        const searchInput = document.getElementById('community-search-input')?.value.toLowerCase() || '';

        if (skillFilter && skillFilter !== 'All') {
            displayedRequests = displayedRequests.filter(r => r.skill === skillFilter);
        }
        if (typeFilter && typeFilter !== 'All') {
            displayedRequests = displayedRequests.filter(r => r.type === typeFilter);
        }
        if (searchInput) {
             displayedRequests = displayedRequests.filter(r => 
                r.title.toLowerCase().includes(searchInput) || 
                r.description.toLowerCase().includes(searchInput) || 
                r.skill.toLowerCase().includes(searchInput)
            );
        }

        const requestListHTML = displayedRequests.filter(r => r.status === 'Open').map(r => {
            const student = students.find(s => s.id === r.studentId) || {};
            const isRequest = r.type === 'help_request';
            
            return `
                <div class="card bg-secondary p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-accent/50 transition">
                    <div class="flex justify-between items-start">
                        <div>
                            <span class="text-xs font-semibold px-3 py-1 rounded-full ${isRequest ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'}">
                                ${isRequest ? 'Help Request' : 'Help Offer'}
                            </span>
                            <h3 class="text-xl font-bold text-primary mt-2">${r.title}</h3>
                        </div>
                       <div class="flex items-center space-x-2">
    <button onclick="updateCredits(${r.id}, -5, ${r.credits})" class="bg-gray-200 dark:bg-gray-700 text-lg font-bold px-2 rounded hover:bg-gray-300">−</button>
    <span id="credit-value-${r.id}" class="text-xl font-bold text-accent">${r.credits}</span>
    <button onclick="updateCredits(${r.id}, +5, ${r.credits})" class="bg-gray-200 dark:bg-gray-700 text-lg font-bold px-2 rounded hover:bg-gray-300">+</button>
    <span id="credits-display-${r.id}" class="text-sm text-secondary">Cr</span>
</div>

                    </div>
                    
                    <p class="text-secondary mt-3">${r.description}<br>
                   
                    
                    <div class="mt-4 flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <div class="flex items-center space-x-3">
                            <img class="w-8 h-8 rounded-full" src="${student.profileImg}" onerror="this.onerror=null;this.src='https://placehold.co/40x40/1E40AF/ffffff?text=U';" alt="${student.name}">
                            <span class="text-sm font-medium text-primary">${student.name}</span>
                        </div>
                        <div class="flex space-x-2">
                            <span class="bg-gray-100 text-secondary text-sm font-medium px-2 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">${r.skill}</span>
                            <button onclick="handleRequestAction(${r.id}, '${isRequest ? 'offer_help' : 'request_help'}')" class="text-sm font-semibold px-3 py-1 rounded-lg ${isRequest ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'} transition">
                                ${isRequest ? 'Offer Help' : 'Request Offer'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        communityDiv.innerHTML = `
            <h1 class="text-4xl font-extrabold text-primary mb-8">Community Exchange: Live Skill Trades</h1>

            <!-- Feature 1: Smart Match & Search Bar -->
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-8 border-l-4 border-accent shadow-md">
                <h2 class="text-2xl font-bold text-primary mb-4 flex items-center"><span data-lucide="search" class="w-6 h-6 mr-2 text-accent"></span> Filter & Smart Match</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Search Input -->
                    <input type="text" id="community-search-input" placeholder="e.g.: 'Calculus' or 'Web Dev'" class="md:col-span-2 p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-primary rounded-lg focus:ring-accent focus:border-accent" value="${searchInput}">

                    <!-- Skill Filter -->
                    <select id="skill-filter" class="p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-primary rounded-lg focus:ring-accent focus:border-accent">
                        <option value="All">All Skills</option>
                        ${[...new Set(requests.map(r => r.skill))].map(s => `<option value="${s}" ${skillFilter === s ? 'selected' : ''}>${s}</option>`).join('')}
                    </select>

                    <!-- Type Filter -->
                    <select id="type-filter" class="p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-primary rounded-lg focus:ring-accent focus:border-accent">
                        <option value="All">All Types</option>
                        <option value="help_request" ${typeFilter === 'help_request' ? 'selected' : ''}>Help Request</option>
                        <option value="help_offer" ${typeFilter === 'help_offer' ? 'selected' : ''}>Help Offer</option>
                    </select>
                </div>
                <button onclick="renderCommunityContent()" class="mt-4 bg-accent hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition shadow-md">
                    Apply Filters <span data-lucide="filter" class="w-4 h-4 inline-block ml-1"></span>
                </button>
            </div>

            <!-- Feature 2: Post New Request -->
            <div class="card bg-secondary p-6 rounded-xl mb-8 border border-green-200 dark:border-green-900">
                <h3 class="text-xl font-bold text-primary mb-4 flex items-center"><span data-lucide="plus-circle" class="w-5 h-5 mr-2 text-green-600"></span> Post a New Request/Offer</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <input type="text" id="new-title" placeholder="Title (e.g., Python Debugging)" class="p-3 border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-primary">
                    <select id="new-type" class="p-3 border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-primary">
                        <option value="help_request">Request Help (I pay)</option>
                        <option value="help_offer">Offer Help (I earn)</option>
                    </select>
                    <input type="text" id="new-skill" placeholder="Skill Tag (e.g.: Math, Coding)" class="p-3 border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-primary">
                    <input type="number" id="new-credits" placeholder="Credits (e.g., 50)" class="p-3 border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-primary">
                </div>
                <textarea id="new-description" placeholder="Provide details, duration, and expectations..." class="w-full p-3 border rounded-lg mt-4 dark:border-gray-600 dark:bg-gray-700 dark:text-primary" rows="3"></textarea>
                <button onclick="handlePostNewRequest()" class="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition shadow-md">
                    Post to Exchange
                </button>
            </div>

            <!-- Feature 3: Request/Offer List -->
            <h2 class="text-3xl font-bold text-primary mb-6">Active Opportunities (${displayedRequests.filter(r => r.status === 'Open').length} listed)</h2>
            <div id="request-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${requestListHTML || '<p class="text-secondary text-center col-span-full py-10">No active opportunities found matching the criteria.</p>'}
            </div>
        `;
        lucide.createIcons();
    }
    
// --- NEW HELPER FUNCTION for Credit Counter ---
function updateCredits(requestId, change, initialValue) {
    const creditValueElement = document.getElementById(`credit-value-${requestId}`);
    const creditsDisplayElement = document.getElementById(`credits-display-${requestId}`);
    if (!creditValueElement || !creditsDisplayElement) return;

    let currentValue = parseInt(creditValueElement.textContent);
    let newCreditValue = currentValue + change;
    
    // Minimum credit floor
    if (newCreditValue < 10) {
        showNotification('Credits cannot go below 10.', 'error');
        newCreditValue = 10;
    }

    // Maximum credit ceiling (e.g., 2x initial value)
    const maxValue = initialValue * 2;
    if (newCreditValue > maxValue) {
        showNotification(`Credits cannot exceed ${maxValue} for this post.`, 'error');
        newCreditValue = maxValue;
    }

    creditValueElement.textContent = newCreditValue;
    creditsDisplayElement.textContent = `${newCreditValue} Cr`;
}

// --- MODIFIED ACTION HANDLER ---
function handleRequestAction(requestId, actionType) {
    const request = MOCK_DATA.requests.find(r => r.id === requestId);
    const creditValueElement = document.getElementById(`credit-value-${requestId}`);
    
    if (!request || request.status !== 'Open' || !creditValueElement) return;

    const amount = parseInt(creditValueElement.textContent);

    let message = '';
    
    if (request.studentId === MOCK_DATA.currentUser.id) {
        showNotification('You cannot accept your own post.', 'error');
        return;
    }

    if (actionType === 'offer_help') {
        
        MOCK_DATA.currentUser.credits += amount;
        MOCK_DATA.currentUser.totalEarnedCredits += amount;
        
        MOCK_DATA.transactions.unshift({
            id: Date.now(),
            type: "Earn",
            date: new Date().toLocaleDateString('en-US'),
            description: `Completed request for ${request.title} (Negotiated: ${amount} Cr)`,
            amount: amount
        });
        
        message = `Success! You completed the task and earned ${amount} Credits.`;
        
    } else if (actionType === 'request_help') {
          
        if (MOCK_DATA.currentUser.credits < amount) {
            showNotification(`Insufficient Credits: You need ${amount} Cr, but only have ${MOCK_DATA.currentUser.credits} Cr.`, 'error');
            return;
        }
        
        MOCK_DATA.currentUser.credits -= amount;
        MOCK_DATA.currentUser.totalSpentCredits += amount;
        
        MOCK_DATA.transactions.unshift({
            id: Date.now(),
            type: "Spend",
            date: new Date().toLocaleDateString('en-US'),
            description: `Requested offer for ${request.title} (Negotiated: ${amount} Cr)`,
            amount: amount
        });
        
        message = `Success! You accepted the offer and spent ${amount} Credits. Meeting initiated.`;
    }

    request.status = 'Closed';
    saveCreditData();
    renderCommunityContent(); 
    
    showNotification(message, 'success');
}
    
    function handlePostNewRequest() {
        const title = document.getElementById('new-title').value;
        const type = document.getElementById('new-type').value;
        const skill = document.getElementById('new-skill').value;
        const credits = parseInt(document.getElementById('new-credits').value);
        const description = document.getElementById('new-description').value;
        
        if (!title || !skill || !credits || !description || isNaN(credits) || credits <= 0) {
            showNotification('Please fill all fields correctly, and ensure credits is a positive number.', 'error');
            return;
        }

        const newRequest = {
            id: Date.now(),
            type: type,
            studentId: MOCK_DATA.currentUser.id,
            studentName: MOCK_DATA.currentUser.name,
            title: title,
            description: description,
            skill: skill,
            credits: credits,
            status: "Open"
        };
        
        MOCK_DATA.requests.unshift(newRequest);
        
        // Clear inputs
        document.getElementById('new-title').value = '';
        document.getElementById('new-skill').value = '';
        document.getElementById('new-credits').value = '';
        document.getElementById('new-description').value = '';
        
        renderCommunityContent();
        showNotification('Your Exchange Post is now LIVE! Awaiting matches.', 'success');
    }

    function renderRewardsContent() {
        const rewardsDiv = document.getElementById('rewards-content');
        if (!rewardsDiv) return;

        const { currentUser, rewards } = MOCK_DATA;

        const rewardListHTML = rewards.map(r => `
            <div class="card bg-secondary p-5 rounded-xl border border-indigo-200 dark:border-gray-700 ${r.claimed ? 'opacity-50' : ''} hover:border-pink-300">
                <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold text-primary">${r.name}</h3>
                    <span class="text-2xl font-bold ${r.claimed ? 'text-gray-400' : 'text-pink-600'}">${r.cost} Cr</span>
                </div>
                <p class="text-sm text-secondary mt-1">${r.type === 'voucher' ? 'Digital Voucher' : 'Exclusive Coupon'}</p>
                <button 
                    onclick="handleClaimReward(${r.id})" 
                    class="mt-4 w-full font-semibold py-2 px-4 rounded-lg transition shadow-md ${r.claimed ? 'bg-gray-400 text-gray-800 cursor-not-allowed dark:bg-gray-600 dark:text-gray-300' : (currentUser.credits >= r.cost ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-red-500 text-white cursor-not-allowed')}"
                    ${r.claimed || currentUser.credits < r.cost ? 'disabled' : ''}
                >
                    ${r.claimed ? 'CLAIMED' : (currentUser.credits >= r.cost ? 'REDEEM NOW' : `Need ${r.cost - currentUser.credits} Cr more`)}
                </button>
            </div>
        `).join('');

        rewardsDiv.innerHTML = `
            <h1 class="text-4xl font-extrabold text-primary mb-8">Rewards Terminal</h1>
            
            <!-- Credit Summary -->
            <div class="grid md:grid-cols-3 gap-4 mb-8">
                <div class="card bg-indigo-100 dark:bg-indigo-900/50 p-5 rounded-xl border-l-4 border-accent">
                    <p class="text-sm text-secondary">Available Credits</p>
                    <p class="text-3xl font-bold text-accent">${currentUser.credits}</p>
                </div>
                <div class="card bg-green-100 dark:bg-green-900/50 p-5 rounded-xl border-l-4 border-green-600">
                    <p class="text-sm text-secondary">Total Knowledge Earned</p>
                    <p class="text-3xl font-bold text-green-600">${currentUser.totalEarnedCredits}</p>
                </div>
                <div class="card bg-red-100 dark:bg-red-900/50 p-5 rounded-xl border-l-4 border-red-600">
                    <p class="text-sm text-secondary">Total Knowledge Invested</p>
                    <p class="text-3xl font-bold text-red-600">${currentUser.totalSpentCredits}</p>
                </div>
            </div>

            <!-- Rewards List -->
            <h2 class="text-3xl font-bold text-primary mb-6 flex items-center"><span data-lucide="award" class="w-7 h-7 mr-2 text-pink-600"></span> Claimable Rewards</h2>
            <div id="rewards-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${rewardListHTML}
            </div>
            
            <!-- Earn Rewards Section (Conceptual) -->
            <div class="mt-12 p-8 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-600 shadow-lg">
                <h2 class="text-2xl font-bold text-primary mb-4 flex items-center"><span data-lucide="trending-up" class="w-6 h-6 mr-2 text-yellow-600"></span> MAXIMIZE YOUR EARNINGS</h2>
                <ul class="list-disc list-inside space-y-2 text-secondary">
                    <li>Fulfill high-value 'Help Requests' from the Community.</li>
                    <li>Achieve the 'Mentor' badge by completing 10+ sessions.</li>
                    <li>Contribute high-quality blog posts (Blog section).</li>
                </ul>
                <button onclick="renderPage('community')" class="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition shadow-md">
                    Start Earning Credits Now
                </button>
            </div>
        `;
        lucide.createIcons();
    }

    function handleClaimReward(rewardId) {
        const reward = MOCK_DATA.rewards.find(r => r.id === rewardId);
        if (!reward || reward.claimed) return;

        if (MOCK_DATA.currentUser.credits < reward.cost) {
            showNotification('Insufficient Credits: You need to earn more to claim this reward.', 'error');
            return;
        }

        MOCK_DATA.currentUser.credits -= reward.cost;
        MOCK_DATA.currentUser.totalSpentCredits += reward.cost;

        MOCK_DATA.transactions.unshift({
            id: Date.now(),
            type: "Spend",
            date: new Date().toLocaleDateString('en-US'),
            description: `Claimed Reward: ${reward.name}`,
            amount: reward.cost
        });

        reward.claimed = true;
        
        saveCreditData();
        renderRewardsContent(); 
        
        showNotification(`Reward Claimed! You received a code for '${reward.name}'.`, 'success');
    }

    function renderBlog() {
        return `
            <div id="page-blog">
                <h1 class="text-4xl font-extrabold text-primary mb-8">Blog: Insights & Deep Dives</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${MOCK_DATA.blogPosts.map(post => `
                        <div class="card bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <img src="https://placehold.co/400x250/2563EB/ffffff?text=Insights+Header" alt="Blog Image" class="w-full h-40 object-cover">
                            <div class="p-6">
                                <p class="text-sm text-accent mb-2">${post.date}</p>
                                <h3 class="text-xl font-bold text-primary mb-3">${post.title}</h3>
                                <p class="text-secondary">${post.snippet}</p>
                                <button class="mt-4 text-accent font-semibold hover:opacity-80 flex items-center" onclick="showNotification('Full blog post details... (This is a demo only)', 'info')">
                                    Read Full Post <span data-lucide="external-link" class="w-4 h-4 ml-2"></span>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderAbout() {
        return `
            <div id="page-about">
                <section class="bg-indigo-50 dark:bg-indigo-900/30 p-10 rounded-xl mb-10 border-l-4 border-accent">
                    <h1 class="text-4xl font-extrabold text-primary mb-4">About Knowledge Exchange Pro</h1>
                    <p class="text-xl text-secondary">A collaborative platform built on the principle that students learn best by teaching and helping one another.</p>
                </section>

                <div class="grid md:grid-cols-2 gap-8">
                    <div class="card bg-secondary p-6 rounded-xl">
                        <h2 class="text-2xl font-bold text-primary mb-4 flex items-center"><span data-lucide="shield" class="w-6 h-6 mr-2 text-green-600"></span> Transparency & Trust</h2>
                        <p class="text-secondary">Our credit system ensures every knowledge exchange is fair and rewarded. We prioritize a secure, respectful, and reliable peer-to-peer environment.</p>
                    </div>
                    <div class="card bg-secondary p-6 rounded-xl">
                        <h2 class="text-2xl font-bold text-primary mb-4 flex items-center"><span data-lucide="cpu" class="w-6 h-6 mr-2 text-red-600"></span> Technology & Future</h2>
                        <p class="text-secondary">Utilizing AI matching and a robust, single-file architecture (like this demo!), we aim to make the learning experience fast, reliable, and highly scalable.</p>
                    </div>
                </div>
                
                <div class="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                     <h2 class="text-3xl font-bold text-primary mb-6 text-center">Our Student Leaders (Demo Data)</h2>
                     <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${MOCK_DATA.students.map(s => `
                            <div class="text-center card bg-secondary p-4 rounded-xl">
                                <img class="w-16 h-16 rounded-full mx-auto mb-2 object-cover border-2 border-accent/50" src="${s.profileImg}" onerror="this.onerror=null;this.src='https://placehold.co/40x40/1E40AF/ffffff?text=U';" alt="${s.name}">
                                <p class="font-semibold text-primary">${s.name}</p>
                                <p class="text-xs text-secondary">${s.skills[0]}</p>
                            </div>
                        `).join('')}
                     </div>
                </div>
            </div>
        `;
    }

    // --- NOTIFICATION UTILITY (Custom Modal Replacement) ---
    function showNotification(message, type = 'info') {
        const notificationArea = document.getElementById('notification-area');
        let bgColor = '';
        let icon = '';
        if (type === 'success') {
            bgColor = 'bg-green-600';
            icon = 'check-circle';
        } else if (type === 'error') {
            bgColor = 'bg-red-600';
            icon = 'alert-triangle';
        } else {
            bgColor = 'bg-blue-600';
            icon = 'info';
        }

        const notificationDiv = document.createElement('div');
        notificationDiv.className = `p-4 rounded-lg shadow-2xl text-white font-medium flex items-center space-x-3 ${bgColor} transition transform duration-300 mb-3 opacity-0 translate-x-full`;
        notificationDiv.innerHTML = `<span data-lucide="${icon}" class="w-5 h-5"></span><span>${message}</span>`;
        
        notificationArea.prepend(notificationDiv);
        lucide.createIcons();

        setTimeout(() => {
            notificationDiv.classList.remove('opacity-0', 'translate-x-full');
            notificationDiv.classList.add('opacity-100', 'translate-x-0');
        }, 10);

        setTimeout(() => {
            notificationDiv.classList.remove('opacity-100', 'translate-x-0');
            notificationDiv.classList.add('opacity-0', 'translate-x-full');
            notificationDiv.addEventListener('transitionend', () => notificationDiv.remove());
        }, 5000);
    }
    
    // --- CANVAS ANIMATION LOGIC (Connecting Particles) ---

    let canvas, ctx, particles = [], mouse = { x: null, y: null };
    const maxParticles = 50;
    const connectionDistance = 120;
    const repulsionRadius = 70;
    
    // Particle Class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2 + 0.5;
            this.baseSpeedX = (Math.random() - 0.5) * 0.5;
            this.baseSpeedY = (Math.random() - 0.5) * 0.5;
            this.color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
        }

        update() {
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            // Repulsion effect
            if (distance < repulsionRadius) {
                let force = repulsionRadius / distance;
                let angle = Math.atan2(dy, dx);
                this.x += Math.cos(angle) * force * 0.5;
                this.y += Math.sin(angle) * force * 0.5;
            }

            // Normal movement
            this.x += this.baseSpeedX;
            this.y += this.baseSpeedY;

            // Boundary check and bounce
            if (this.x > canvas.width || this.x < 0) this.baseSpeedX = -this.baseSpeedX;
            if (this.y > canvas.height || this.y < 0) this.baseSpeedY = -this.baseSpeedY;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initCanvasAnimation() {
        const heroSection = document.querySelector('.interactive-hero');
        canvas = document.getElementById('hero-canvas');
        
        if (!canvas || !heroSection) return;

        ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = heroSection.clientWidth;
            canvas.height = heroSection.clientHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Populate particles
        particles = [];
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle(
                Math.random() * canvas.width, 
                Math.random() * canvas.height
            ));
        }
        
        // Mouse tracking
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        
        // Reset mouse position when cursor leaves
        canvas.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Get current accent color for connections
            const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect particles
                for (let j = i; j < particles.length; j++) {
                    let p1 = particles[i];
                    let p2 = particles[j];
                    
                    let dx = p1.x - p2.x;
                    let dy = p1.y - p2.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.strokeStyle = accent;
                        ctx.lineWidth = 0.5 * (1 - distance / connectionDistance); // Line fades as distance increases
                        ctx.globalAlpha = 0.5 * (1 - distance / connectionDistance); // Opacity fades
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1; // Reset alpha
                    }
                }
            }
        }
        animate();
    }
  
    function init() {

        initializeData();

        appContainer.innerHTML = 
            renderHome() + 
            `<div id="page-dashboard"><div id="dashboard-content" class="py-5"></div></div>` +
            `<div id="page-community"><div id="community-content" class="py-5"></div></div>` +
            `<div id="page-rewards"><div id="rewards-content" class="py-5"></div></div>` +
            renderBlog() +
            renderAbout();

        const storedTheme = localStorage.getItem('theme') || 'dark'; // Defaulting to dark mode for the 'Pro' look
        applyTheme(storedTheme);

        renderPage('home');
        
        initCanvasAnimation();


        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });
        
        // 7. Re-render icons after adding all innerHTML
        lucide.createIcons();
    }

    window.onload = init;


    // login
    // === GLOBAL ===
const API_URL = "https://timebank-backend-bt2o.onrender.com/users";
let currentUserEmail = null;

// === OPEN/CLOSE OVERLAYS ===
function openLogin() { document.getElementById("loginOverlay").style.display = "flex"; }
function closeLogin() { document.getElementById("loginOverlay").style.display = "none"; }
function openSignup() { document.getElementById("signupOverlay").style.display = "flex"; }
function closeSignup() { document.getElementById("signupOverlay").style.display = "none"; }

// === UPDATE NAV UI ===
function updateUIAfterLogin(email) {
  currentUserEmail = email;
  document.getElementById("navLoginBtn").style.display = "none";
  document.getElementById("navSignupBtn").style.display = "none";
  document.getElementById("welcomeMessage").textContent = `Welcome, ${email}!`;
  document.getElementById("welcomeMessage").style.display = "inline";
  document.getElementById("navLogoutBtn").style.display = "inline";
}

function handleLogout() {
  currentUserEmail = null;
  document.getElementById("navLoginBtn").style.display = "inline";
  document.getElementById("navSignupBtn").style.display = "inline";
  document.getElementById("welcomeMessage").style.display = "none";
  document.getElementById("navLogoutBtn").style.display = "none";
  alert("You have been logged out.");
}

// === SIGNUP ===
document.getElementById("signupSubmitBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  if (!email || !password) {
    alert("Please enter both email and password to sign up.");
    return;
  }

  try {
    const check = await fetch(`${API_URL}?email=${email}`);
    const existing = await check.json();

    if (existing.length > 0) {
      alert("Account already exists. Please login instead.");
      return;
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      alert("Signup successful! You can now login.");
      document.getElementById("signupForm").reset();
      closeSignup();
      openLogin();
    } else {
      alert("Signup failed. Try again later.");
    }
  } catch (err) {
    console.error("Signup error:", err);
    alert("Server not reachable. Make sure JSON Server is running.");
  }
});

// === LOGIN ===
document.getElementById("loginSubmitBtn").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    const res = await fetch(`${API_URL}?email=${email}&password=${password}`);
    const users = await res.json();

    if (users.length === 1) {
      alert(`Welcome back, ${email}!`);
      updateUIAfterLogin(email);
      document.getElementById("loginForm").reset();
      closeLogin();
    } else {
      const emailCheck = await fetch(`${API_URL}?email=${email}`);
      const existing = await emailCheck.json();

      if (existing.length === 0) {
        alert("Account not found. Please sign up first!");
      } else {
        alert("Incorrect password. Try again.");
      }
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Cannot connect to JSON Server. Check your server status.");
  }
});



// === CLOSE OVERLAY ON OUTSIDE CLICK ===
window.addEventListener("click", function (event) {
  const loginOverlay = document.getElementById("loginOverlay");
  const signupOverlay = document.getElementById("signupOverlay");
  if (event.target === loginOverlay) closeLogin();
  if (event.target === signupOverlay) closeSignup();
});

// 
function renderAbout() {
    return `
        <div id="page-about">
            <section class="bg-indigo-50 dark:bg-indigo-900/30 p-10 rounded-xl mb-10 border-l-4 border-accent">
                <h1 class="text-4xl font-extrabold text-primary mb-4">About Knowledge Exchange Pro</h1>
                <p class="text-xl text-secondary">
                    A collaborative platform built on the principle that students learn best by teaching and helping one another.
                </p>
            </section>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="card bg-secondary p-6 rounded-xl">
                    <h2 class="text-2xl font-bold text-primary mb-4 flex items-center">
                        <span data-lucide="shield" class="w-6 h-6 mr-2 text-green-600"></span> Transparency & Trust
                    </h2>
                    <p class="text-secondary">
                        Our credit system ensures every knowledge exchange is fair and rewarded. We prioritize a secure, respectful, and reliable peer-to-peer environment.
                    </p>
                </div>
                <div class="card bg-secondary p-6 rounded-xl">
                    <h2 class="text-2xl font-bold text-primary mb-4 flex items-center">
                        <span data-lucide="cpu" class="w-6 h-6 mr-2 text-red-600"></span> Technology & Future
                    </h2>
                    <p class="text-secondary">
                        Utilizing AI matching and a robust, single-file architecture (like this demo!), we aim to make the learning experience fast, reliable, and highly scalable.
                    </p>
                </div>
            </div>
            
            <div class="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 class="text-3xl font-bold text-primary mb-6 text-center">Our Student Leaders (Demo Data)</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${MOCK_DATA.students.map(s => `
                        <div class="text-center card bg-secondary p-4 rounded-xl">
                            <img class="w-16 h-16 rounded-full mx-auto mb-2 object-cover border-2 border-accent/50"
                                 src="${s.profileImg}"
                                 onerror="this.onerror=null;this.src='https://placehold.co/40x40/1E40AF/ffffff?text=U';"
                                 alt="${s.name}">
                            <p class="font-semibold text-primary">${s.name}</p>
                            <p class="text-xs text-secondary">${s.skills[0]}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Reviews Section -->
            <section id="reviews" class="mt-16">
                <h2 id="headrev" class="text-3xl font-bold text-primary mb-8 text-center">What Our Clients Say</h2>
                <div id="rev" class="grid md:grid-cols-3 gap-6">
                    <div class="reveiwcards p-4 rounded-xl bg-secondary shadow">
                        <p class="reveiwp">"Great platform for quick learning. Used my credits for a web dev session and it really helped."</p>
                        <h4 class="reveiwname mt-2 font-semibold text-primary">— Kartik Malhotra</h4>
                    </div>
                    <div class="reveiwcards p-4 rounded-xl bg-secondary shadow">
                        <p class="reveiwp">"Teaching here is smooth and rewarding."</p>
                        <h4 class="reveiwname mt-2 font-semibold text-primary">— Rahul Sharma</h4>
                    </div>
                    <div class="reveiwcards p-4 rounded-xl bg-secondary shadow">
                        <p class="reveiwp">"Got clear explanations for my JS and math doubts. Very helpful and student-friendly platform."</p>
                        <h4 class="reveiwname mt-2 font-semibold text-primary">— Disha Aggarwal</h4>
                    </div>
                </div>
            </section>

            <!-- Review by user -->
            <section class="revbyuser mt-16 bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-xl">
                <h2 class="text-2xl font-bold text-primary mb-4 text-center">Your reviews are valuable ✨</h2>
                <form class="reviewform flex flex-col items-center gap-4" id="reviewForm">
                    <input type="text" pattern="[A-Za-z ]+" id="user" placeholder="Your Name..." required
                           class="w-full md:w-1/2 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent">
                    <textarea id="message" placeholder="Write your review..." required
                              class="w-full md:w-1/2 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                    <button type="submit"
                            class="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/80 transition">
                        Submit Review
                    </button>
                </form>

                <div id="reviewList" class="mt-8 grid md:grid-cols-3 gap-6 text-center">
                    <!-- New reviews will appear here -->
                </div>
            </section>
        </div>
    `;
}

