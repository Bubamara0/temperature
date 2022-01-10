// require("dotenv").config();

const form = document.querySelector('form')

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let city = e.target.elements.city.value;
    console.log(city)

    // send a request to the back end
    axios(`/temperature/${city}`)
})
