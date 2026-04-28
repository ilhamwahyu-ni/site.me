document.addEventListener('DOMContentLoaded', () => {
    fetch('partials/nav.html')
        .then(response => response.text())
        .then(html => {
            const placeholder = document.getElementById('navbar-placeholder');
            if (placeholder) {
                placeholder.innerHTML = html;

                // Highlight active link
                let currentPage = window.location.pathname.split('/').pop();
                if (!currentPage || currentPage === '') {
                    currentPage = 'index.html';
                }
                
                // Desktop active state
                const desktopLinks = document.querySelectorAll('#desktop-menu a[data-page]');
                desktopLinks.forEach(link => {
                    if (link.getAttribute('data-page') === currentPage) {
                        link.classList.remove('text-gray-700');
                        link.classList.add('text-[#e07a5f]', 'font-semibold');
                    }
                });

                // Mobile active state
                const mobileLinks = document.querySelectorAll('#mobile-nav-menu a[data-page]');
                mobileLinks.forEach(link => {
                    if (link.getAttribute('data-page') === currentPage) {
                        link.classList.remove('text-gray-700');
                        link.classList.add('text-[#e07a5f]', 'font-semibold');
                    }
                });

                // Mobile menu logic
                const menuBtn = document.getElementById('menuBtn');
                const closeMenuBtn = document.getElementById('closeMenuBtn');
                const mobileMenu = document.getElementById('mobileMenu');
                const mobileMenuContent = document.getElementById('mobileMenuContent');
                const allMobileLinks = document.querySelectorAll('.mobile-link');

                const openMenu = () => {
                    if(mobileMenu && mobileMenuContent) {
                        mobileMenu.classList.remove('hidden');
                        mobileMenuContent.classList.remove('hidden');
                        document.body.style.overflow = 'hidden';
                        requestAnimationFrame(() => {
                            mobileMenuContent.classList.remove('translate-x-full');
                        });
                    }
                };

                const closeMenu = () => {
                    if(mobileMenu && mobileMenuContent) {
                        mobileMenuContent.classList.add('translate-x-full');
                        setTimeout(() => {
                            mobileMenu.classList.add('hidden');
                            mobileMenuContent.classList.add('hidden');
                            document.body.style.overflow = 'auto';
                        }, 300);
                    }
                };

                if(menuBtn) {
                    menuBtn.addEventListener('click', openMenu);
                }
                if(closeMenuBtn) {
                    closeMenuBtn.addEventListener('click', closeMenu);
                }
                if(mobileMenu) {
                    mobileMenu.addEventListener('click', closeMenu);
                }
                allMobileLinks.forEach(link => link.addEventListener('click', closeMenu));
            }
        })
        .catch(error => console.error('Error loading navigation:', error));
});
