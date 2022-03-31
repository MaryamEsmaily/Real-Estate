(function () {
  function configureSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const closeing = document.querySelector(".close-tag");
    const opening = document.querySelector(".nav-icon");

    closeing.addEventListener("click", () => {
      closeing.classList.add("deactive");
      sidebar.classList.add("deactive");
    });

    opening.addEventListener("click", () => {
      closeing.classList.remove("deactive");
      sidebar.classList.remove("deactive");
    });
  }

  function removeActiveClassLinks() {
    const list = document.querySelectorAll(".nav__link");
    list.forEach((item) => item.classList.remove("active"));
  }
  function removeActiveClassDealsItems() {
    const list = document.querySelectorAll(".delas__items");
    list.forEach((item) => item.classList.remove("active"));
  }
  function addActiveClassDealsItems(targetClass) {
    const list = document.querySelectorAll(".delas__items");
    list.forEach((item) => {
      if (item.classList.contains(targetClass)) item.classList.add("active");
    });
  }
  function addActiveClassLinks(value) {
    const list = document.querySelectorAll(".nav__link");
    list.forEach((item) => {
      if (item.dataset.value === value) item.classList.add("active");
    });
  }

  function activeByIndex(index) {
    const links = Array.prototype.slice.call(
      document.querySelectorAll(".nav__link")
    );
    const value = links.find((_, i) => i === index).dataset.value;
    removeActiveClassLinks();
    removeActiveClassDealsItems();
    addActiveClassDealsItems(value);
    addActiveClassLinks(value);
    //
  }

  function handleClickArrows(dir, links) {
    const list = Array.prototype.slice.call(links);
    const activeTag = list.findIndex((link) =>
      link.classList.contains("active")
    );
    const period = list.length;
    //
    const condition = dir === "right" ? activeTag < period - 1 : activeTag > 0;

    if (condition) {
      const nextActiveTag = dir === "right" ? activeTag + 1 : activeTag - 1;
      removeActiveClassLinks();
      list[nextActiveTag].classList.add("active");
      activeByIndex(nextActiveTag);
    }
  }

  function configureDeals() {
    const links = document.querySelectorAll(".nav__link");
    const dealsItems = document.querySelectorAll(".delas__items");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");
    //
    links.forEach((link, i) => {
      link.addEventListener("click", () => {
        activeByIndex(i);
      });
    });

    leftArrow.addEventListener("click", () => handleClickArrows("left", links));

    rightArrow.addEventListener("click", () =>
      handleClickArrows("right", links)
    );
  }

  function ratingStars() {
    const stars = Array.prototype.slice.call(
      document.querySelectorAll(".rating-star")
    );
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        let targetStarIndex = stars.indexOf(star);
        let starLength = stars.length - 1;

        if (star.classList.contains("bi-star")) {
          for (targetStarIndex; targetStarIndex >= 0; targetStarIndex--) {
            stars[targetStarIndex].classList.add("bi-star-fill");
            stars[targetStarIndex].classList.remove("bi-star");
          }
        } else
          for (
            targetStarIndex;
            targetStarIndex <= starLength;
            targetStarIndex++
          ) {
            stars[targetStarIndex].classList.remove("bi-star-fill");
            stars[targetStarIndex].classList.add("bi-star");
          }
      });
    });
  }

  configureDeals();
  configureSidebar();
  ratingStars();
})();
