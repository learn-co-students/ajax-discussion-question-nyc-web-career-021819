const fullname = document.getElementById("fullname");

function selector(identifier) {
  return document.querySelector(identifier)
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('.btn-primary')
  button.addEventListener('click', e => {
    getPerson()
  })
});

function fillInPerson(person) {
  const fullName = selector('#fullname')
  const email = selector(`#email`)
  const street = selector('#street')
  const state = selector('#state')
  const city = selector('#city')
  const postcode = selector('#postcode')
  const phone = selector('#phone')
  const cell = selector('#cell')
  const dob = selector(`#date_of_birth`)
  const profilePic = selector('img')

  fullName.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
  email.innerText = person.email
  street.innerText = person.location.street
  city.innerText = person.location.city
  state.innerText = person.location.state
  postcode.innerText = person.location.postcode
  phone.innerText = person.phone
  cell.innerText = person.cell
  dob.innerText = person.dob.date.substring(0,10)
  profilePic.src = person.picture.large

}

function getPerson() {
  return fetch(`https://randomuser.me/api/`)
  .then(res => res.json())
  .then(function(person) {
    console.log(person.results["0"])
    fillInPerson(person.results["0"])
  })

}
