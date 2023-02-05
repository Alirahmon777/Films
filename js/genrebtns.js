let actionArr = [];
let dramaArr = [];
let adventureArr = [];
let animationArr = [];
let horrorArr = [];
let scienceArr = [];
let familyArr = [];
let MusicArr = [];
let documentaryArr = [];
let tvmovieArr = [];
let fantasyArr = [];
let comedyArr = [];
let crimeArr = [];
let mysteryArr = [];
let thrillerArr = [];
let romanceArr = [];
let historyArr = [];

for (let i = 0; i < films.length; i++) {
  elBtns.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.value.includes("all")) {
        renderPlan(films);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("action")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("action") === true) {
            actionArr.push(films[i]);
          }
        });
        renderPlan(actionArr);
      }
    });

    e.addEventListener("click", () => {
      if (e.value.includes("drama")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("drama") === true) {
            dramaArr.push(films[i]);
          }
        });
        renderPlan(dramaArr);
      }
    });

    e.addEventListener("click", () => {
      if (e.value.includes("adventure")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("adventure") === true) {
            adventureArr.push(films[i]);
          }
        });
        renderPlan(adventureArr);
      }
    });

    e.addEventListener("click", () => {
      if (e.value.includes("animation")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("animation") === true) {
            animationArr.push(films[i]);
          }
        });
        renderPlan(animationArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("documentary")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("documentary") === true) {
            documentaryArr.push(films[i]);
          }
        });
        renderPlan(documentaryArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("music")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("music") === true) {
            MusicArr.push(films[i]);
          }
        });
        renderPlan(MusicArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("fantasy")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("fantasy") === true) {
            fantasyArr.push(films[i]);
          }
        });
        renderPlan(fantasyArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("comedy")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("comedy") === true) {
            comedyArr.push(films[i]);
          }
        });
        renderPlan(comedyArr);
      }
    });

    e.addEventListener("click", () => {
      if (e.value.includes("crime")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("crime") === true) {
            crimeArr.push(films[i]);
          }
        });
        renderPlan(crimeArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("family")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("family") === true) {
            familyArr.push(films[i]);
          }
        });
        renderPlan(familyArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("mystery")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("mystery") === true) {
            mysteryArr.push(films[i]);
          }
        });
        renderPlan(mysteryArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("thriller")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("thriller") === true) {
            thrillerArr.push(films[i]);
          }
        });
        renderPlan(thrillerArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("science")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("science") === true) {
            scienceArr.push(films[i]);
          }
        });
        renderPlan(scienceArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("romance")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("romance") === true) {
            romanceArr.push(films[i]);
          }
        });
        renderPlan(romanceArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("horror")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("horror") === true) {
            horrorArr.push(films[i]);
          }
        });
        renderPlan(horrorArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("tv movie")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("tv movie") === true) {
            tvmovieArr.push(films[i]);
          }
        });
        renderPlan(tvmovieArr);
      }
    });
    e.addEventListener("click", () => {
      if (e.value.includes("history")) {
        films[i].genres.filter((evt) => {
          if (evt.toLowerCase().includes("history") === true) {
            historyArr.push(films[i]);
          }
        });
        renderPlan(historyArr);
      }
    });
  });
}
