function showCityTimezones() {
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let showSingaporeTimezone = moment().tz("Asia/Singapore");

    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");

    singaporeDateElement.innerHTML =
      showSingaporeTimezone.format("DD MMM YYYY");
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
      showVancouverTimezone.format("DD MMM YYYY");
    vancouverTimeElement.innerHTML = showVancouverTimezone.format(
      "h:mm:ss [<small]>A[</small>]"
    );
  }

  //Oslo

  let osloElement = document.querySelector("#oslo");

  if (osloElement) {
    let showOsloTimezone = moment().tz("Europe/Oslo");

    let osloDateElement = osloElement.querySelector(".date");
    let osloTimeElement = osloElement.querySelector(".time");

    osloDateElement.innerHTML = showOsloTimezone.format("DD MMM YYYY");
    osloTimeElement.innerHTML = showOsloTimezone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // cairo

  let cairoElement = document.querySelector("#cairo");

  if (cairoElement) {
    let cairoTimezone = moment().tz("Africa/Cairo");

    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");

    cairoDateElement.innerHTML = cairoTimezone.format("DD MMM YYYY");
    cairoTimeElement.innerHTML = cairoTimezone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
showCityTimezones();
setInterval(showCityTimezones, 1000);

function handleShowCity(event) {
  setInterval(function () {
    let homepage = document.querySelector(".homepage");
    homepage.innerHTML = ` <i class="fa-solid fa-chevron-left"></i>Back to All Cities`;
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector(".cities");
    (citiesElement.innerHTML = `
    <div class="city alternate-dark individual-city">
      <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("DD MMM YYYY")}</div>
      </div>
      <div class="time">
      ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
  </div>`),
      1000;
  });
}

let cityElement = document.querySelector("#listCity");
cityElement.addEventListener("change", handleShowCity);

function handleChangeDisplayTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let changeDisplayTheme = document.querySelector(".dark-theme-btn");
changeDisplayTheme.addEventListener("click", handleChangeDisplayTheme);
