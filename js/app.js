/* fetch("https://openapi.programming-hero.com/api/phones?search=samsung")
  .then((res) => res.json())
  .then((data) => console.log(data));
 */
const searchButton = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadPhone(data.data));
  searchField.value = "";
};

const loadPhone = (phones) => {
  const phoneResutl = document.getElementById("phone-result");
  phoneResutl.textContent = "";
  for (const phone of phones.slice(0, 20)) {
    // console.log(phone);
    const div = document.createElement("div");
    div.classList.add = "col";
    div.innerHTML = `
    <div class="card">
              <img src="${phone.image}" class="card-img-top img-size mx-auto mt-2" alt="..." width="142" />
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text text-primary">
                Versions : ${phone.slug}
                </p>
                <button onclick = moreDetails('${phone.slug}') class="btn btn-primary">More Details</button>
              </div>
            </div>
      `;
    phoneResutl.appendChild(div);
  }
};

const moreDetails = (details) => {
  // console.log(details);
  const url = `https://openapi.programming-hero.com/api/phone/${details}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
};

const displayPhone = (phoneDetails) => {
  console.log(phoneDetails);
  const phoneDisplay = document.getElementById("phone-details");
  phoneDisplay.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${phoneDetails.image}" class="card-img-top img-size mx-auto mt-2" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${phoneDetails.name}</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  phoneDisplay.appendChild(div);
};
