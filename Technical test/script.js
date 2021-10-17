"use strict";
// ACCESS TOKEN , CLIENT ID, CLIENT SECRET AND REFRESH TOKEN CAN ALL BE FOUND IN "strava.com/settings/api"

// If error 404 or 401 occurs it's most likely because the authorization code has expired. I haven't found a way yet to automatically obtain the new one yet

window.onload = function () {
  // This shows athlete
  fetch("https://www.strava.com/api/v3/athlete", options).then((res) =>
    res.json().then((data) => {
      console.log(data);
    })
  );
  fetch("https://www.strava.com/api/v3/athletes/65887372/routes", options).then(
    (res) =>
      res.json().then((data) => {
        console.log(data);
        const url = data[0].map_urls.url;
        console.log(url);

        document.getElementById("container-box").innerHTML = printData(data);
      })
  );
};

function printData(data) {
  return `<h1>Route</h1>
    <img src="${data[0].map_urls.url}" alt="" />`;
}

const options = {
  headers: {
    Authorization: "Bearer af97ee7dfe45920b29c1f8a84be60bbb69b92466 ",
  },
};
