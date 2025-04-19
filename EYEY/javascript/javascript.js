// 🟦 Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("open");
});

// 🟦 Portfolio Grid Setup
const itemsPerPage = 6;
let currentPage = 1;
let currentCategory = 'all';

const filterButtons = document.querySelectorAll('.filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const paginationDots = document.getElementById('pagination-dots');
const imageModal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

// 🟨 Display Logic
function updatePortfolioDisplay() {
  const filteredItems = Array.from(portfolioItems).filter(item =>
    currentCategory === 'all' || item.dataset.category === currentCategory
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;

  portfolioItems.forEach(item => item.style.display = 'none'); // Hide all first

  filteredItems.slice(start, end).forEach(item => {
    item.style.display = 'block';
  });

  updatePaginationDots(totalPages);
  applyUniformSize(filteredItems);
}

// 🟨 Pagination Dots
function updatePaginationDots(totalPages) {
  paginationDots.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentPage) dot.classList.add('active');

    dot.addEventListener('click', () => {
      currentPage = i;
      updatePortfolioDisplay();
    });

    paginationDots.appendChild(dot);
  }
}

// 🟨 Uniform Item Sizing
function applyUniformSize(items) {
  items.forEach(item => {
    item.style.width = '300px';
    item.style.height = '300px';
    const img = item.querySelector('img');
    if (img) img.style.objectFit = 'cover';
  });
}

// 🟨 Category Filters
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    currentCategory = button.getAttribute('data-category');
    currentPage = 1;
    updatePortfolioDisplay();
  });
});

// 🟨 Modal Logic
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (img) {
      modalImg.src = img.src;
      imageModal.style.display = 'flex';
    }
  });
});

closeModal.addEventListener('click', () => {
  imageModal.style.display = 'none';
});

imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = 'none';
  }
});

// 🟩 Initial Load
updatePortfolioDisplay();
