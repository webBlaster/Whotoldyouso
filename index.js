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

//fadeshow for the different chapters
//element
const element = document.querySelector("#chapterslide");

const chapter = ["The Awakening", "Dethroned", "Embracing"];
let count = 0;
const switcher = () => {
  element.innerHTML = chapter[count];
  if (count == 2) {
    count = -1;
  }
  count++;
};

setInterval(switcher, 3000);
