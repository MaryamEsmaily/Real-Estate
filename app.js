const sidebar = document.querySelector(".sidebar");
const closeing = document.querySelector(".close-tag");
const opening = document.querySelector(".nav-icon");

closeing.addEventListener("click", () => {
  closeing.classList.add("deactive");
  sidebar.classList.add("deactive");
  // opening.classList.toggle("deactive");
});

opening.addEventListener("click", () => {
  closeing.classList.remove("deactive");
  sidebar.classList.remove("deactive");
});
