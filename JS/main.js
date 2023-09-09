AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
let p = document.querySelectorAll(".p_more");
console.log(p);
function readmore() {
  if (p[0].classList.contains("visually-hidden")) {
    p[0].classList.remove("visually-hidden");
    console.log(p);
  } else {
    p.classList.add("visually-hidden");
  }
}

const toggleButtons = document.querySelectorAll(".link-custom");

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const content = document.getElementById(targetId);

    if (content.classList.contains("visually-hidden")) {
      content.classList.remove("visually-hidden");
    } else {
      content.classList.add("visually-hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    fetch("submit.php", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully.");
          form.reset(); // Clear the form fields after submission
        } else {
          alert("Form submission failed.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting the form.");
      });
  });
});
