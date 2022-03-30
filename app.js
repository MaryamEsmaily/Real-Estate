const sidebar = document.querySelector(".sidebar");
const closeing = document.querySelector(".close-tag");
const opening = document.querySelector(".nav-icon");
const activeLink = Array.from(document.querySelectorAll(".nav__link"));
const houseImages = document.querySelector(".house-images");
const delasItems = Array.from(document.querySelectorAll(".delas__items"));
const arrow = Array.from(document.querySelectorAll(".arrow"));
//
closeing.addEventListener("click", () => {
  closeing.classList.add("deactive");
  sidebar.classList.add("deactive");
});

opening.addEventListener("click", () => {
  closeing.classList.remove("deactive");
  sidebar.classList.remove("deactive");
});

activeLink.map((i) =>
  i.addEventListener("click", () => {
    activeLink.forEach((element) => {
      element.classList.remove("active");
    });
    delasItems.map((j) => {
      i.classList.add("active");
      if (i.classList[1] === j.classList[3]) {
        j.classList.add("d-flex");
      } else j.classList.remove("d-flex");
    });
  })
);

arrow.map((i) => {
  activeLink.map((item, index) => {
    i.addEventListener("click", () => {
      if (
        i.classList.contains("arrow-left") &&
        item.classList.contains("active") &&
        index > 0
      ) {
        activeLink.forEach((e) => {
          e.classList.remove("active");
        });
        delasItems.map((j) => {
          let activeTag = activeLink[index - 1];
          activeTag.classList.add("active");
          if (activeTag.classList[1] === j.classList[3]) {
            j.classList.add("d-flex");
          } else j.classList.remove("d-flex");
        });
      }
    });

    if (
      i.classList.contains("arrow-right") &&
      item.classList.contains("active") &&
      index <= 4
    ) {
      i.addEventListener("click", () => {
        activeLink.forEach((e) => {
          e.classList.remove("active");
        });
        index += 1;
        delasItems.map((j) => {
          let activeTag = activeLink[index];
          activeTag.classList.add("active");
          if (activeTag.classList[1] === j.classList[3]) {
            j.classList.add("d-flex");
          } else j.classList.remove("d-flex");
        });
      });
    }
  });
});
