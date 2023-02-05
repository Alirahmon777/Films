const userList = document.querySelector(".film__cards");
const elBtns = document.querySelectorAll(".button");
const filterWrapper = document.querySelector(".filter__wrapper");
const elSearch = document.querySelector(".film__search");
const elGenresBtn = document.querySelector(".filter__genres");

alert("uchinchi masala alert va console logda");

function renderPlan(plan) {
  userList.innerHTML = "";
  for (let i = 0; i < plan.length; i++) {
    const newItem = document.createElement("li");
    const resultTime = getUserTime(plan[i].releasDate * 1000);

    newItem.className = "film__items col-4 align-items-center d-flex ";

    newItem.innerHTML = `
  <div class="film__imgs position-relative">
    <img
      src="${plan[i].poster}"
      width="180"
      class="rounded-2"
      alt="Shazam film"
    />
    <button class="btn btn-danger opacity-50 position-absolute delete-btn w-100" data-id="${
      plan[i].id
    }" style="bottom: 0; left: 0;">Delete</button>
  </div>
  <div class="film__about d-flex flex-column gap-3">
  <h3 class="film__title m-0">${plan[i].title}</h3>
  <p class="film__text m-0">${plan[i].overview}</p>
  <p class="film__date m-0">${resultTime}</p>
  <p class="film__genre">${plan[i].genres.join(" / ")}</p>
  </div>`;

    userList.appendChild(newItem);
  }
}

renderPlan(films);

function addZero(z) {
  return z < 10 ? "0" + z : z;
}

function getUserTime(time) {
  const date = new Date(time);
  let Y = date.getFullYear();
  let M = addZero(date.getMonth() + 1);
  let D = addZero(date.getDate());

  return `${Y}.${M}.${D}`;
}

elSearch.addEventListener("input", () => {
  const inputvalue = elSearch.value;
  console.log(inputvalue);
  let searchArray = films.filter((todo) => {
    if (todo.title.toLowerCase().includes(inputvalue.toLowerCase())) {
      return todo;
    }
  });
  renderPlan(searchArray);
});

userList.addEventListener("click", (event) => {
  const btn = event.target;
  if (btn.className.includes("delete-btn")) {
    const id = +btn.dataset.id;
    const result = [];
    for (let i = 0; i < films.length; i++) {
      const arr = films[i];
      if (arr.id != id) {
        result.push(arr);
        console.log("delet");
      }
    }
    films = result;
    renderPlan(films);
  }
});

elGenresBtn.addEventListener("click", () => {
  if (filterWrapper.className.includes("visually-hidden")) {
    document.querySelector(".bi").className = "bi bi-arrow-up";
    filterWrapper.className =
      "filter__wrapper row gap-3 justify-content-center";
  } else {
    document.querySelector(".bi").className = "bi bi-arrow-down";
    filterWrapper.className =
      "filter__wrapper row gap-3 justify-content-center visually-hidden";
  }
});
