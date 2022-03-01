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
  for (const phone of phones) {
    console.log(phone);
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
                <button class="btn btn-primary">More Details</button>
              </div>
            </div>
      `;
    phoneResutl.appendChild(div);
  }
};
