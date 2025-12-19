function view(list) {
  let html = "";
  for(const row of list) {
    html += `<div class="col-sm-6">
              <a href="moviesub.html" class="link">
                <div class="image">
                  <img src="${row.Poster}" alt="Movie Poster"/>
                  <div class="type">${row.Type}</div>
                </div>
                <div class="p-2">
                  <p class="year">${row.Year}</p>
                  <h3>${row.Title}</h3>
                </div>
              </a>
            </div>`;
  }
  document.querySelector("#movies").innerHTML = html;
}
function movies(keyword) {
  const url = `https://www.omdbapi.com?apikey=2815efbb&s=${keyword}`;
  fetch(url)
  .then(x => x.json())
  .then(y => {
    if(y.Response === 'True') view(y.Search);
  });
}
function submit(e){
  e.preventDefault();
  const keyword = e.target.keyword.value;
  if(keyword) movies(keyword);
}
function load() {
  document.getElementById("movie-search").addEventListener("submit", submit);
}
