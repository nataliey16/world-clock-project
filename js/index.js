function showCityTimezones() {
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let showSingaporeTimezone = moment().tz("Asia/Singapore");

    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");

    singaporeDateElement.innerHTML =
      showSingaporeTimezone.format("MMMM Do, YYYY");
    singaporeTimeElement.innerHTML = showSingaporeTimezone.format(
      "h:mm:ss [<small]>A[</small>]"
    );
  }

  //Rome

  let romeElement = document.querySelector("#rome");

  if (romeElement) {
    let showRomeTimezone = moment().tz("Europe/Rome");

    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");

    romeDateElement.innerHTML = showRomeTimezone.format("MMMM Do, YYYY");
    romeTimeElement.innerHTML = showRomeTimezone.format(
      "h:mm:ss [<small]>A[</small>]"
    );
  }
}

function handleShowCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">
    ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
    </div>
</div>`;
}

let cityElement = document.querySelector("#listCity");
cityElement.addEventListener("change", handleShowCity);

setInterval(showCityTimezones, 1000);
