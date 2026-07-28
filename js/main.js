// ===== Set current year in footer =====
document.getElementById('year').innerText = new Date().getFullYear();

// ===== Loading screen =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
        loader.classList.add('hidden');
    }
});

// ===== Mobile Menu =====
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (menuBtn && mobileMenu && menuIcon) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.className = mobileMenu.classList.contains('hidden')
            ? 'fa-solid fa-bars'
            : 'fa-solid fa-xmark';
    });

    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.className = 'fa-solid fa-bars';
        });
    });
}

// ===== Navbar scroll effect & Active link highlighting =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('back-to-top');

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        if (backToTop) backToTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        if (backToTop) backToTop.classList.remove('show');
    }
}

// Smooth scroll offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = navbar ? navbar.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', updateNavbar);
updateNavbar();

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== FAQ Toggle =====
function toggleFaq(id) {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    if (!content || !icon) return;
    const isHidden = content.classList.contains('hidden');
    content.classList.toggle('hidden');
    icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
}

// ===== Booking Form =====
function handleBooking(event) {
    event.preventDefault();
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    document.getElementById('consultation-form').reset();
}

// ===== Contact Form =====
function handleContactMessage(event) {
    event.preventDefault();
    const phone = '0777104910';
    alert(`تم استلام رسالتك، وسيتم التواصل معك مباشرة على الرقم ${phone}.`);
    event.target.reset();
}

// ===== Article Modal =====
function openArticleModal(title, content) {
    const titleEl = document.getElementById('article-modal-title');
    const bodyEl = document.getElementById('article-modal-body');
    const modal = document.getElementById('article-modal');
    if (titleEl) titleEl.innerText = title;
    if (bodyEl) {
        bodyEl.innerHTML = `
            <p class="text-sm text-slate-200 leading-relaxed">${content}</p>
            <p class="text-luxury-gold text-xs pt-4 border-t border-slate-800 font-bold">
                بقلم: المحامي مؤيد رحاحله
            </p>`;
    }
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// ===== Close Modal =====
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Close modals on backdrop click
document.querySelectorAll('.modal-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (e) => {
        if (e.target === wrapper) {
            wrapper.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-wrapper:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }
});
