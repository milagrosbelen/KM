/**
 * KM - Perfumes Premium
 * JavaScript para renderizado dinámico y animaciones
 */

// ============================================
// DATOS DE PERFUMES
// ============================================

const perfumesMenor = [
    {
        id: 1,
        nombre: "Élégance Noire",
        descripcion: "Fragancia sofisticada con notas de bergamota, jazmín y sándalo. Una experiencia sensorial única.",
        contenido: "100ml",
        precio: "$89.900",
        imagen: "img/perfume1.jpg"
    },
    {
        id: 2,
        nombre: "Azur Royal",
        descripcion: "Frescura mediterránea con acordes cítricos, lavanda y maderas nobles. Elegancia atemporal.",
        contenido: "100ml",
        precio: "$94.900",
        imagen: "img/perfume2.jpg"
    },
    {
        id: 3,
        nombre: "Nuit Étoilée",
        descripcion: "Misterio y seducción con notas de rosa negra, pachulí y ámbar. Para ocasiones especiales.",
        contenido: "100ml",
        precio: "$99.900",
        imagen: "img/perfume3.jpg"
    },
    {
        id: 4,
        nombre: "Luxe Essence",
        descripcion: "Refinamiento absoluto con extractos de vainilla, iris y cuero. La esencia del lujo.",
        contenido: "100ml",
        precio: "$109.900",
        imagen: "img/perfume4.jpg"
    },
    {
        id: 5,
        nombre: "Privé Collection",
        descripcion: "Exclusividad en cada gota. Notas de oud, azafrán y rosa damascena. Edición limitada.",
        contenido: "100ml",
        precio: "$119.900",
        imagen: "img/perfume5.jpg"
    },
    {
        id: 6,
        nombre: "Royal Essence",
        descripcion: "Majestuosidad en cada nota. Una combinación única de especias exóticas y maderas preciosas.",
        contenido: "100ml",
        precio: "$124.900",
        imagen: "img/perfume6.jpg"
    }
];

const perfumesMayor = [
    {
        id: 7,
        nombre: "Élégance Noire",
        descripcion: "Fragancia sofisticada con notas de bergamota, jazmín y sándalo. Ideal para revendedores.",
        contenido: "100ml",
        precio: "$65.900",
        precioMenor: "$89.900",
        cantidadMinima: "12 unidades",
        imagen: "img/perfume1.jpg"
    },
    {
        id: 8,
        nombre: "Azur Royal",
        descripcion: "Frescura mediterránea con acordes cítricos, lavanda y maderas nobles. Precio mayorista.",
        contenido: "100ml",
        precio: "$69.900",
        precioMenor: "$94.900",
        cantidadMinima: "12 unidades",
        imagen: "img/perfume2.jpg"
    },
    {
        id: 9,
        nombre: "Nuit Étoilée",
        descripcion: "Misterio y seducción con notas de rosa negra, pachulí y ámbar. Oportunidad exclusiva.",
        contenido: "100ml",
        precio: "$74.900",
        precioMenor: "$99.900",
        cantidadMinima: "12 unidades",
        imagen: "img/perfume3.jpg"
    },
    {
        id: 10,
        nombre: "Luxe Essence",
        descripcion: "Refinamiento absoluto con extractos de vainilla, iris y cuero. Venta por mayor.",
        contenido: "100ml",
        precio: "$79.900",
        precioMenor: "$109.900",
        cantidadMinima: "12 unidades",
        imagen: "img/perfume4.jpg"
    },
    {
        id: 11,
        nombre: "Privé Collection",
        descripcion: "Exclusividad en cada gota. Notas de oud, azafrán y rosa damascena. Precio especial mayorista.",
        contenido: "100ml",
        precio: "$84.900",
        precioMenor: "$119.900",
        cantidadMinima: "12 unidades",
        imagen: "img/perfume5.jpg"
    },
    {
        id: 12,
        nombre: "Royal Essence",
        descripcion: "Majestuosidad en cada nota. Una combinación única de especias exóticas y maderas preciosas.",
        contenido: "100ml",
        precio: "$89.900",
        precioMenor: "$124.900",
        cantidadMinima: "12 unidades",
        imagen: "img/perfume6.jpg"
    }
];

// ============================================
// FUNCIONES DE RENDERIZADO
// ============================================

/**
 * Crea una card de perfume para venta por menor
 * @param {Object} perfume - Objeto con datos del perfume
 * @returns {string} HTML de la card
 */
function crearCardMenor(perfume) {
    return `
        <div class="perfume-card scroll-animate">
            <div class="perfume-image-container">
                <img src="${perfume.imagen}" alt="${perfume.nombre}" class="perfume-image" loading="lazy">
            </div>
            <div class="perfume-info">
                <h3 class="perfume-name">${perfume.nombre}</h3>
                <p class="perfume-content">${perfume.contenido}</p>
                <div class="perfume-price-wrapper">
                    <button class="perfume-price" type="button">${perfume.precio}</button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Crea una card de perfume para venta por mayor
 * @param {Object} perfume - Objeto con datos del perfume
 * @returns {string} HTML de la card
 */
function crearCardMayor(perfume) {
    return `
        <div class="perfume-card scroll-animate">
            <div class="perfume-image-container">
                <img src="${perfume.imagen}" alt="${perfume.nombre}" class="perfume-image" loading="lazy">
            </div>
            <div class="perfume-info">
                <h3 class="perfume-name">${perfume.nombre}</h3>
                <p class="perfume-content">${perfume.contenido}</p>
                <p class="mayor-text">Venta por mayor</p>
                <div class="perfume-price-wrapper">
                    <button class="perfume-price" type="button">${perfume.precio}</button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderiza todas las cards de perfumes por menor
 */
function renderizarPerfumesMenor() {
    const grid = document.getElementById('perfumesMenorGrid');
    if (!grid) return;
    
    grid.innerHTML = perfumesMenor.map(perfume => crearCardMenor(perfume)).join('');
}

/**
 * Renderiza todas las cards de perfumes por mayor
 */
function renderizarPerfumesMayor() {
    const grid = document.getElementById('perfumesMayorGrid');
    if (!grid) return;
    
    grid.innerHTML = perfumesMayor.map(perfume => crearCardMayor(perfume)).join('');
}

// ============================================
// ANIMACIONES AL SCROLL - ELEGANTE Y PROFESIONAL
// ============================================

/**
 * Inicializa animaciones suaves al hacer scroll usando Intersection Observer
 * Aplica efecto "fade up" elegante a elementos cuando entran en viewport
 */
function initScrollAnimations() {
    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        // Si prefiere movimiento reducido, no aplicar animaciones
        return;
    }

    // Configuración del observer - activa cuando el 15% del elemento es visible
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Crear observer que activa animaciones cuando elementos entran en viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Agregar clase 'active' para activar la animación
                entry.target.classList.add('active');
                
                // Una vez animado, dejar de observar para mejor performance
                // Esto evita que se repita la animación al scrollear hacia arriba
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Función helper para observar elementos
    const observeElements = () => {
        // Agregar clase scroll-animate y observar títulos de sección
        const sectionHeaders = document.querySelectorAll('.section-header:not(.scroll-animate)');
        sectionHeaders.forEach(header => {
            header.classList.add('scroll-animate');
            observer.observe(header);
        });

        // Observar cards de perfumes (ya tienen la clase scroll-animate desde su creación)
        const perfumeCards = document.querySelectorAll('.perfume-card.scroll-animate:not(.active)');
        perfumeCards.forEach(card => {
            observer.observe(card);
        });

        // Agregar clase scroll-animate y observar sección WhatsApp
        const whatsappSection = document.querySelector('.whatsapp-section:not(.scroll-animate)');
        if (whatsappSection) {
            whatsappSection.classList.add('scroll-animate');
            observer.observe(whatsappSection);
        }

        // Agregar clase scroll-animate y observar footer
        const footer = document.querySelector('.footer:not(.scroll-animate)');
        if (footer) {
            footer.classList.add('scroll-animate');
            observer.observe(footer);
        }
    };

    // Observar elementos inicialmente
    observeElements();
}

// ============================================
// MENÚ MÓVIL
// ============================================

/**
 * Inicializa el menú móvil
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navbar) return;

    // Toggle del menú
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

/**
 * Mejora el smooth scroll para navegación
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Ignorar si es solo #
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

/**
 * Añade efecto al header cuando se hace scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// COLAPSAR/EXPANDIR SECCIONES
// ============================================

/**
 * Inicializa la funcionalidad de colapsar/expandir secciones
 */
function initCollapseSections() {
    const toggleMenor = document.getElementById('toggleMenor');
    const toggleMayor = document.getElementById('toggleMayor');
    const gridMenor = document.getElementById('perfumesMenorGrid');
    const gridMayor = document.getElementById('perfumesMayorGrid');
    const sectionMenor = document.getElementById('menor');
    const sectionMayor = document.getElementById('mayor');

    // Toggle sección por menor
    if (toggleMenor && gridMenor && sectionMenor) {
        toggleMenor.addEventListener('click', () => {
            const isCollapsed = gridMenor.classList.toggle('collapsed');
            sectionMenor.classList.toggle('collapsed', isCollapsed);
            toggleMenor.classList.toggle('active');
            // Cambiar el ícono
            const icon = toggleMenor.querySelector('.collapse-icon');
            if (icon) {
                icon.textContent = isCollapsed ? '+' : '−';
            }
        });
    }

    // Toggle sección por mayor
    if (toggleMayor && gridMayor && sectionMayor) {
        toggleMayor.addEventListener('click', () => {
            const isCollapsed = gridMayor.classList.toggle('collapsed');
            sectionMayor.classList.toggle('collapsed', isCollapsed);
            toggleMayor.classList.toggle('active');
            // Cambiar el ícono
            const icon = toggleMayor.querySelector('.collapse-icon');
            if (icon) {
                icon.textContent = isCollapsed ? '+' : '−';
            }
        });
    }
}

// ============================================
// BOTÓN VOLVER ARRIBA
// ============================================

/**
 * Inicializa el botón "Volver arriba"
 */
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (!scrollTopBtn) return;

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll suave al hacer click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// MANEJO DE ERRORES DE IMÁGENES
// ============================================

/**
 * Maneja errores de carga de imágenes
 */
function initImageErrorHandling() {
    const images = document.querySelectorAll('.perfume-image');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Si falla la imagen, usar una imagen placeholder o mantener el fondo
            this.style.display = 'none';
            this.parentElement.style.background = 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)';
        });
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Inicializa toda la aplicación cuando el DOM está listo
 */
function init() {
    // Renderizar perfumes
    renderizarPerfumesMenor();
    renderizarPerfumesMayor();
    
    // Inicializar funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initCollapseSections();
    initScrollTop();
    initImageErrorHandling();
    
    // Inicializar animaciones después de un pequeño delay
    // para asegurar que las cards estén renderizadas
    setTimeout(() => {
        initScrollAnimations();
    }, 150);
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

