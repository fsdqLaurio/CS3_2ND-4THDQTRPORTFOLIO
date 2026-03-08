let movieList = {};
const form = document.getElementById("movieForm"); // form submit 
form.addEventListener("submit", function(e) { 
  if (confirm("Are you sure with your submission")) {   
    writeLocalStorage(form);
    showMovieList();
  } else {
    e.preventDefault();
  }
});

// event handler for the reset button 
form.addEventListener("reset", function(e) { 
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); 
  }
});

function readLocalStorage(){
  let moviesString = localStorage.getItem("movieTitles");
  if (!moviesString) {
    movieList = {}; // if no entry, empty object
  } else {
    movieList = JSON.parse(moviesString); // if entry, string to object
  }
  return movieList;
}

// call readLocalStorage on page load
readLocalStorage();

// star
  let selectedRating = 0;

    document.querySelectorAll(".star").forEach(star => {
      star.addEventListener("click", function() {
        selectedRating = this.getAttribute("value");
        updateStars(selectedRating);
      });
    });

    function updateStars(rating) {
      document.querySelectorAll(".star").forEach(star => {
        star.classList.remove("selected");
        if (star.getAttribute("value") <= rating) {
          star.classList.add("selected");
        }
      });
    }

function writeLocalStorage(movieForm){
  let movieData = new FormData(movieForm);
  let title = movieData.get("movieTitle");
  let year = movieData.get("year");
  let genre = movieData.get("genre");
  let rating = movieData.get("rating");
  let starRating = selectedRating; // get the selected star rating

  // rating into stars
  
    for (let i = 0; i < Number(rating); i++) {
      starRating += '★';
    }


  // index as key
  let moviesArr = Object.values(movieList);
  let newMovie = {
    title: title,
    year: year,
    genre: genre,
    rating: starRating
  };
  moviesArr.push(newMovie);

  // movieList as object with keys
  movieList = {};
  moviesArr.forEach((movie, idx) => {
    movieList[idx] = movie;
  });

  localStorage.setItem("movieTitles", JSON.stringify(movieList));
  console.log(movieList);
}

function showMovieList() {
  let container = document.getElementById("movieListContainer");
  if (!container) return;
  let movies = Object.values(movieList);
  
  let html = '<ul>';
  movies.forEach((movie, idx) => {
    html += `<li><strong>${movie.title}</strong> (${movie.year}) - ${movie.genre}, Rating: ${movie.rating}</li>`;
  });
  html += '</ul>';
  container.innerHTML = html;
}
showMovieList();