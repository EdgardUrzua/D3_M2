const pagesContainer = document.querySelector('.pages');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPage = 1;
const totalPages = 3; 

function renderPagination() {
  pagesContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const page = document.createElement('button');
    page.classList.add('page');
    page.textContent = i;
    if (i === currentPage) page.classList.add('active');
    page.addEventListener('click', () => {
      currentPage = i;
      renderPagination();
    });
    pagesContainer.appendChild(page);
  }
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPagination();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPagination();
  }
});

renderPagination();