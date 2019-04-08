document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn.btn-primary')
  const fullname = document.getElementById('fullname')//what will fullname evaluate to?
  const email = document.getElementById('email')//what will fullname evaluate to?
  const street = document.getElementById('street') //what will fullname evaluate to?
  const city = document.getElementById('city') //what will fullname evaluate to?
  const state = document.getElementById('state') //what will fullname evaluate to?
  const postcode = document.getElementById('postcode') //what will fullname evaluate to?
  const phone = document.getElementById('phone') //what will fullname evaluate to?
  const cell = document.getElementById('cell') //what will fullname evaluate to?
  const dateOfBirth = document.getElementById('date_of_birth') //what will fullname evaluate to?
  const profilePic = document.getElementById('profile_picture') //what will fullname evaluate to?
  
  btn.addEventListener('click', function (ev) {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(function (res) {
        const info = res.results['0']
        fullname.innerText = `${info.name.title}.${info.name.first} ${info.name.last}`
        email.innerText = info.email
        street.innerText = info.location.street
        city.innerText = info.location.city
        state.innerText = info.location.state
        postcode.innerText = info.location.postcode
        phone.innerText = info.phone
        cell.innerText = info.cell
        dateOfBirth.innerText = info.dob.date.slice(0, 10)
        profilePic.src = info.picture.large
      })
  })
})
