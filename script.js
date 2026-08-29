const languageSwitch = document.getElementById("languageSwitch");
let currentLanguage = "de";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-de][data-en]").forEach(element => {
    element.textContent = element.dataset[language];
  });

  document.getElementById("de-about").classList.toggle("active", language === "de");
  document.getElementById("en-about").classList.toggle("active", language === "en");

  document.getElementById("langDe").classList.toggle("active", language === "de");
  document.getElementById("langEn").classList.toggle("active", language === "en");
}

languageSwitch.addEventListener("click", () => {
  setLanguage(currentLanguage === "de" ? "en" : "de");
});

setLanguage("de");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();


// PROJEKT-FILTER
const projectFilters = document.querySelectorAll(".project-filter");
const projects = document.querySelectorAll(".project");

projectFilters.forEach(filter => {
  filter.addEventListener("click", function () {

    const selectedCategory = this.getAttribute("data-filter");

    projectFilters.forEach(button => {
      button.classList.remove("active");
    });

    this.classList.add("active");

    projects.forEach(project => {
      const projectCategory = project.getAttribute("data-category");

      if (selectedCategory === "all" || selectedCategory === projectCategory) {
        project.style.display = "";
      } else {
        project.style.display = "none";
      }
    });
  });
});
