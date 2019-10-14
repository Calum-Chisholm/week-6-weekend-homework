document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit', handleFormSubmit);
  const manufacturer = document.querySelector("#manufacturer")
  manufacturer.addEventListener('change', handleManufacturerChange)
  // handleManufactuereChange function to be added in 
});

const handleFormSubmit = function(event){
  event.preventDefault();

  const divBoxThing = document.createElement("div")
  divBoxThing.classList.add('box');
  const divBox = document.querySelector('#car-list');
  divBox.appendChild(divBoxThing);

  const newBoxThing = document.createElement("h2")
  newBoxThing.classList.add('h2-box');
  newBoxThing.textContent = `${this.manufacturer.value}`;
  divBoxThing.appendChild(newBoxThing);

  const secondBoxThing = document.createElement("h3")
  secondBoxThing.classList.add('h3-box');
  secondBoxThing.textContent = `${this.model.value}`;
  divBoxThing.appendChild(secondBoxThing);

  const thirdBoxThing = document.createElement("p")
  thirdBoxThing.classList.add('p-box');
  thirdBoxThing.textContent = `${this.colour.value}`;
  divBoxThing.appendChild(thirdBoxThing);

  document.getElementById("new-item-form").reset();
}
