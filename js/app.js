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
  const errorDiv = document.getElementById("error-div");
  //error message show

  if (phones.length == 0) {
    console.log("no phone found");

    errorDiv.innerHTML = `
    <h3 class="text-center">No Phones are found</h3>
    `;
  }
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
    errorDiv.textContent = "";
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
  div.classList.add("mb-2");
  div.innerHTML = `
  <img src="${
    phoneDetails.image
  }" class="card-img-top img-size mx-auto mt-2 img-fluid single-phone-img" alt="..." />
  <div class="card-body">
    <h5 class="card-title"><span class="text-primary">Model Name : </span>${
      phoneDetails.name
    }</h5>
    <h3><span class="text-primary">Status : </span> ${
      phoneDetails.releaseDate
        ? phoneDetails.releaseDate
        : "<span class='text-danger'>Comming Soon</span>"
    }</h3>
    <p class="card-text"><span class="text-primary">Proccessor</span>  : ${
      phoneDetails.mainFeatures.chipSet
    }</p>
    <p class="card-text"><span class="text-primary">Display Size</span> : ${
      phoneDetails.mainFeatures.displaySize
    }</p>
    <p class="card-text"><span class="text-primary">Memory</span> : ${
      phoneDetails.mainFeatures.memory
    }</p>
    <p class="card-text"><span class="text-primary">Sensors</span> : ${
      phoneDetails.mainFeatures.sensors
    }</p>
    <p class="card-text"><span class="text-primary">Storage</span> : ${
      phoneDetails.mainFeatures.storage
    }</p>
    <p class="card-text"><span class="text-primary">Bluethooth</span> : ${
      phoneDetails.others.Bluetooth
    }</p>
    <p class="card-text"><span class="text-primary">Gps</span> : ${
      phoneDetails.others.GPS
    }</p>
    <p class="card-text"><span class="text-primary">NFC</span> : ${
      phoneDetails.others.NFC
    }</p>
    <p class="card-text"><span class="text-primary">Radio</span> : ${
      phoneDetails.others.Radio
    }</p>
    <p class="card-text"><span class="text-primary">USB</span> : ${
      phoneDetails.others.USB
    }</p>
    <p class="card-text"><span class="text-primary">WLAN</span> : ${
      phoneDetails.others.WLAN
    }</p>
  </div>
  `;
  phoneDisplay.appendChild(div);
};
