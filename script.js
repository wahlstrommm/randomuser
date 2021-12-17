root = document.getElementById("root");
inputDiv = document.getElementById("inputDiv");
btn = document.getElementById("btn");
svarDiv = document.getElementById("svarDiv");

btn.addEventListener("click", function () {
  svarDiv.innerHTML = "";
  fetch("https://randomuser.me/api/")
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
      console.log(json.results[0].name);
      fName = json.results[0].name.first;
      lName = json.results[0].name.last;
      street = json.results[0].location.street.name;
      streetNumber = json.results[0].location.street.number;

      let img = document.createElement("img");
      img.src = json.results[0].picture.large;
      svarDiv.append(img);
      svarDiv.innerHTML += fName + " " + lName + " " + street + " " + streetNumber + " ";
      console.log(json.results[0].location.street.number);
      console.log(json.results[0].picture.large);
    });
});
let fName;
let lName;
let img = document.createElement("img");
let street;
let streetNumber;

//skapa knapp
//
//hämta data med knapp
//omvandla datan
//visa datan
//hämta ny data
