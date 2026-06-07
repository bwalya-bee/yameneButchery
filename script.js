const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach((link) => { link.style.animation = ''; });
            }
        });
    });
};

navSlide();

document.addEventListener('DOMContentLoaded', () => {
    const filterButtonsContainer = document.getElementById('filter-buttons-container');
    if (filterButtonsContainer) {
        filterButtonsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const filterValue = e.target.getAttribute('data-filter');
                filterMeat(filterValue);
            }
        });
    }
});


const customerFeedback = [
    {
        name: "Mary Chilufya",
        feedback: "The freshest beef I have found in Lusaka! The service is always friendly and professional. It really is the one."
    },
    {
        name: "Peter Banda",
        feedback: "Yamene Meat Products is my go-to for weekend braais. The hungarian sausages are incredible."
    },
    {
        name: "Sarah Mwape",
        feedback: "I love the hygiene standards at the butchery. It feels very clean and the full chicken was very fresh."
    },
    {
        name: "Kelvin Zulu",
        feedback: "Great prices and even better taste. Highly recommend their steak on bone cuts."
    },
    {
        name: "Grace Lungu",
        feedback: "Finally found a place that sells proper polony slices for school lunches. Will definitely be coming back!"
    }
];

function filterMeat(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[data-filter="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.animate([
                { opacity: 0, transform: 'scale(0.9) translateY(20px)' },
                { opacity: 1, transform: 'scale(1) translateY(0)' }
            ], { duration: 400, easing: 'ease-out' });
        } else {
            card.style.display = 'none';
        }
    });
}

let currentSlide = 0;
const slideDelay = 5000;

function showFeedback() {
    const displayElement = document.getElementById('testimonial-display');
    if (!displayElement) return;

    const data = customerFeedback[currentSlide];
    displayElement.innerHTML = '';

    const quoteSymbol = document.createElement('div');
    quoteSymbol.className = 'quote-symbol';
    quoteSymbol.textContent = '❝';

    const quoteText = document.createElement('p');
    quoteText.className = 'quote-text';
    quoteText.textContent = `"${data.feedback}"`;

    const customerName = document.createElement('p');
    customerName.className = 'customer-name';
    customerName.textContent = `- ${data.name}`;

    displayElement.appendChild(quoteSymbol);
    displayElement.appendChild(quoteText);
    displayElement.appendChild(customerName);

    displayElement.classList.remove('fade-anim');
    void displayElement.offsetWidth;
    displayElement.classList.add('fade-anim');

    currentSlide++;
    if (currentSlide >= customerFeedback.length) {
        currentSlide = 0;
    }
}

showFeedback();
setInterval(showFeedback, slideDelay);

window.addEventListener('load', () => {
    filterMeat('all');
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('scroll-animate-up');
        observer.observe(el);
    });

    document.querySelectorAll('.product-card').forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('scroll-animate-left');
        } else {
            el.classList.add('scroll-animate-right');
        }
        observer.observe(el);
    });

    document.querySelectorAll('.carousel-container').forEach(el => {
        el.classList.add('scroll-animate-up');
        observer.observe(el);
    });

    document.querySelectorAll('.footer-col').forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('scroll-animate-left');
        } else {
            el.classList.add('scroll-animate-right');
        }
        observer.observe(el);
    });
});

