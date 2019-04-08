const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  appendUser()
});

function fetchUser() {
  return fetch('https://randomuser.me/api/')
  .then(response => response.json())
}

function appendUser() {
  fetchUser()
  .then(data => {
    console.log(data.results)
  })
}
