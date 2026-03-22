
const form = document.getElementById("movieForm"); // form submit 
form.addEventListener("submit", function(e) { 
  if (confirm("Are you sure with your submission")) {   
    writeLocalStorage(form);
    showMovieList();
  } else {
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
        selectedRating = this.getAttribute("value"); // gets the value of the chosen star
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

function writeLocalStorage(movieForm) { // gets the data from the user input 
  let movieData = new FormData(movieForm);
  let title = movieData.get("movieTitle");
  let year = movieData.get("year");
  let genre = movieData.get("genre");
  let newRating = Number(selectedRating);

  let movies = JSON.parse(localStorage.getItem("movieTitles") || "[]"); // gets existing movies OR makes an empty array if none
  let existing = movies.find(m => m.title.toLowerCase() === title.toLowerCase()); // gets movies that have the same titles

    if (existing) { // if there is an existing movie,
      let count = existing.ratingCount + 1;
      existing.rating = Math.round(((existing.rating * existing.ratingCount) + newRating) / count * 10) / 10; // average rating + add a decimal place
      existing.ratingCount = count; // updates rating

  } 
  
  else { // if no existing, make a new movie
      movies.push({ 
        title, 
        year, genre, 
        rating: newRating, 
        ratingCount: 1 });
  }

  localStorage.setItem("movieTitles", JSON.stringify(movies)); 
}

function getStars(rating) {
  return "★".repeat(Math.floor(rating)) 
       + (rating % 1 >= 0.5 ? "½" : "") 
       + "☆".repeat(5 - Math.ceil(rating));
}

function deleteMovie(title) {
  if (!confirm(`Delete movie "${title}"?`)) return;
  let movies = JSON.parse(localStorage.getItem("movieTitles") || "[]");
  movies = movies.filter(m => m.title !== title);
  localStorage.setItem("movieTitles", JSON.stringify(movies));
  
  showMovieList();
}

function showMovieList() {

  let movies = JSON.parse(localStorage.getItem("movieTitles") || "[]");
  document.getElementById("movieListContainer").innerHTML = 
    `<ul>${movies.map(m => {
      let stars = getStars(m.rating);
  
      return `<li><strong>${m.title}</strong> (${m.year}) - ${m.genre}, Rating: <span style="color:#FFD700;">${stars}</span></li>`;
    }).join("")}</ul>`;
}

showMovieList();