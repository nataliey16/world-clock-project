function showCityTimezones() {
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  let showSingaporeTimezone = moment().tz("Asia/Singapore");

  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");

  singaporeDateElement.innerHTML =
    showSingaporeTimezone.format("MMMM Do, YYYY");
  singaporeTimeElement.innerHTML = showSingaporeTimezone.format(
    "h:mm:ss [<small]>A[</small>]"
  );

  //Rome

  let romeElement = document.querySelector("#rome");
  let showRomeTimezone = moment().tz("Europe/Rome");

  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");

  romeDateElement.innerHTML = showRomeTimezone.format("MMMM Do, YYYY");
  romeTimeElement.innerHTML = showRomeTimezone.format(
    "h:mm:ss [<small]>A[</small>]"
  );
}

setInterval(showCityTimezones, 1000);
