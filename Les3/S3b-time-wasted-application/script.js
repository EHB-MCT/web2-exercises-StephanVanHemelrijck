// API KEY &apikey=c9331a62
// API URL http://www.omdbapi.com/?
const APIKey = "&apikey=c9331a62";
const APIUrl = "http://www.omdbapi.com/?";

window.onload = function () {
  document.getElementById("searchBtn").addEventListener("click", (e) => {
    let title = getTitle();
    fetch(`${APIUrl}${APIKey}&t=${title}`).then((res) =>
      res.json().then((data) => {
        document.getElementById("container").innerHTML = printCard(data);
      })
    );
  });
};

// getData(`${APIUrl}${APIKey}&t=parasite&y=2019`);
// For re-use purposes isn't being used yet
async function getData(url) {
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
  } else {
    alert("HTTP-Error:" + response.status);
  }
}

function getTitle() {
  return document.getElementById("inputTitle").value;
}

function printCard(data) {
  return `
    <div class="col-md-4">
      <img src="${data.Poster}" class="card-img" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.Title}</h5>
        <p class="card-text">
          ${data.Plot}
        </p>
        <p class="card-text">
          <small class="text-muted">${data.Runtime}</small>
        </p>
      </div>
    </div>
  `;
}
