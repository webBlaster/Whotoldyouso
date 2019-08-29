//all sections
const sections = document.querySelectorAll(".restless");

//new intersection observer

//Intersection observer options
const options = {};

//callback function
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("animated", "fadeInDown");
    console.log(entry.target);
    observer.unobserve(entry.target);
  });
};
const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => {
  observer.observe(section);
});
