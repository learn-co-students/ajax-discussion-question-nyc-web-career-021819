// const fullname = document.getElementById("fullname");
// const email = document.getElementById("email");
// const street = document.getElementById("street");
// const city = document.getElementById("city");
// const state = document.getElementById("state");
//

// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button")
  const people_container = document.getElementById("people_container")
  console.log("CONTENT LOADED!");
  button.addEventListener("click", (e) => {
    console.log(e)
    fetch("https://randomuser.me/api")
      .then(res => res.json())
      .then(data  => {

        let name = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
        let email = `${data.results[0].email}`
        let street_address = `${data.results[0].location.street}`
        let city = `${data.results[0].location.city}`
        let state = `${data.results[0].location.state}`
        let post_code = `${data.results[0].location.postcode}`
        let cell = `${data.results[0].cell}`
        let phone = `${data.results[0].phone}`
        let dob = `${data.results[0].dob.date}`
        let img_url = `${data.results[0].picture.thumbnail}`
        let person_div = document.createElement("div")
        // let person_div = document.querySelector(".container")
        person_div.innerHTML =
        `
          <div class="row align-items-start">
            <div class="col">
              <img src="${img_url}" alt="" id="profile_picture"/>
            </div>
            <div class="col">
              <label for="fullname"> <!-- Include first name, last name AND title -->
                Name:
              </label>
              <h3 id="fullname">${name}</h3>
            </div>
            <div class="col">
              <label for="email">
                Email:
              </label>
              <h4 id="email">${email}</h4>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col">
              <label for="street">Street:</label>
              <h4 id="street">${street_address}</h4>
              <label for="city">City:</label>
              <h4 id="city">${city}</h4>
              <label for="state">State:</label>
              <h4 id="state">${state}</h4>
              <label for="postcode">Post Code:</label>
              <h4 id="postcode">${post_code}</h4>
            </div>
            <div class="col">
              <label for="phone">Phone:</label>
              <h4 id="phone">${phone}</h4>
              <label for="cell">Cell:</label>
              <h4 id="cell">${cell}</h4>
            </div>
            <div class="col">
              <label for="date_of_birth">Date of Birth:</label>
              <h4 id="date_of_birth">${dob}</h4>
            </div>
            `


            people_container.prepend(person_div)
  })

});



    })
