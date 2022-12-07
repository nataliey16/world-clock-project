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

  //Vancouver

  let vancouverElement = document.querySelector("#vancouver");

  if (vancouverElement) {
    let showVancouverTimezone = moment().tz("America/Vancouver");

    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");

    vancouverDateElement.innerHTML =
      showVancouverTimezone.format("MMMM Do, YYYY");
    vancouverTimeElement.innerHTML = showVancouverTimezone.format(
      "h:mm:ss [<small]>A[</small>]"
    );
  }
}
showCityTimezones();
setInterval(showCityTimezones, 1000);

function handleShowCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    currentTimezone = moment.tz.guess();
  }
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
