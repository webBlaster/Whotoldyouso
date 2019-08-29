//all sections
const sections = document.querySelectorAll(".section");

//new intersection observer

//Intersection observer options
const options = {};

//callback function
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("animated", "fadeInLeft");
    console.log(entry.target);
    observer.unobserve(entry.target);
  });
};
const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => {
  observer.observe(section);
});
