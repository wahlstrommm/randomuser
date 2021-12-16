root = document.getElementById("root");
inputDiv = document.getElementById("inputDiv");
btn = document.getElementById("btn");
svarDiv = document.getElementById("svarDiv");

btn.addEventListener("click", function () {
  console.log("hej");
  fetch("https://randomuser.me/api/")
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json.results[0].name);
      fName = json.results[0].name.first;
      lName = json.results[0].name.last;
      street = json.results[0].location.street.name;
      streetNumber = json.results[0].location.street.number;
      pic = json.results[0].picture.large;
      pic.src = json.results[0].picture.large;
      svarDiv.innerHTML = fName + " " + lName + " " + street + " " + streetNumber + " " + pic;
      console.log(json.results[0].location.street.number);
      console.log(json.results[0].picture.large);
    });
});
let fName;
let lName;
let pic = document.createElement("img");
let street;
let streetNumber;

//skapa knapp
//
//hämta data med knapp
//omvandla datan
//visa datan
//hämta ny data
