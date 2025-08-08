
  async function loadMovies() {
    const response = await fetch('data.json');
    const movies = await response.json();

    const container = document.getElementById('movieContainer');
    container.innerHTML = '';

    movies.forEach(movie => {
      const genres = movie.genres.map(g => `<a href="#">${g}</a>`).join(', ');
      const movieBox = document.createElement('div');
      movieBox.classList.add('post-box');
      movieBox.innerHTML = `
        <a href="movie.html?title=${encodeURIComponent(movie.title)}" class="movie-post">
          <div class="post-img">
            <img src="${movie.image}" alt="${movie.title}">
          </div>
          <div class="main-slider-text">
            <span class="quality">${movie.quality}</span>
            <div class="bottom-text">
              <div class="movie-name">
                <span>${movie.year}</span>
                <span>${movie.title}</span>
              </div>
              <div class="category-rating">
                <div class="category">${genres}</div>
                <div class="rating">${movie.rating} <img src="images/IMDb-icon.png" alt="IMDb"></div>
              </div>
            </div>
          </div>
        </a>
      `;
      container.appendChild(movieBox);
    });
  }

  function searching() {
    const searchValue = document.getElementById("search-system").value.toLowerCase();
    document.querySelectorAll('.post-box').forEach(post => {
      post.style.display = post.textContent.toLowerCase().includes(searchValue) ? 'flex' : 'none';
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    loadMovies().then(() => {
      document.querySelector('.fa-solid fa-search').addEventListener('submit', e => {
        e.preventDefault(); // stop page reload
        searching();
      });
    });
  });

