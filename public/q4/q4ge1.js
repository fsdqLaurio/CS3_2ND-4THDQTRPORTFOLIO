
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

function writeLocalStorage(movieForm){
  let movieData = new FormData(movieForm); // gets form data
  let title = movieData.get("movieTitle");
  let year = movieData.get("year"); // gets year
  let genre = movieData.get("genre"); // gets genre
  let rating = movieData.get("rating"); // gets rating
  let starRating = selectedRating; // get the selected star rating


  // sets index/numeric values as key
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

function deleteMovie(idx) {
  if (confirm("Are you sure you want to delete this movie?")) {
    delete movieList[idx]; //deletes movie 

    // reindex the remaining movies
    let moviesArr = Object.values(movieList);
    movieList = {};
    moviesArr.forEach((movie, newIdx) => {
      movieList[newIdx] = movie;
    });
    localStorage.setItem("movieTitles", JSON.stringify(movieList));
    showMovieList();
  }
}

function showMovieList() {
  let container = document.getElementById("movieListContainer"); // 
  let movies = Object.values(movieList); // setting movies to the array of values 

  // let sum = movie.ratings.reduce((a,b)=>a+b,0);
  // let avg = Math.round(sum / movie.ratings.length);
  
  let html = '<ul>'; // starts list
  // createst list items for the elements in the array
  movies.forEach((movie, idx) => { 
    
    let ratingDisplay = movie.rating;
    ratingDisplay = '★'.repeat(Number(ratingDisplay)); // repeats stars corresponding to rating value
    
    html += `<li><strong>${movie.title}</strong> (${movie.year}) - ${movie.genre}, Rating: <span style="color:#FFD700;">${ratingDisplay}</span>
    <button onclick="deleteMovie(${idx})">Delete</button></li>`;
  });

  html += '</ul>';
  container.innerHTML = html;
  
  }
showMovieList();