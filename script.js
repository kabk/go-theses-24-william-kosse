const hoverableElems = document.querySelectorAll(".is-hoverable-text");
const imagePopup = document.getElementById("image-popup");

hoverableElems.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    let target = elem.dataset.target;
    let image = document.querySelector('[data-id="' + target + '"]');
    image.style.display = "block";
  });
  elem.addEventListener("mouseout", () => {
    let target = elem.dataset.target;
    let image = document.querySelector('[data-id="' + target + '"]');
    image.style.display = "none";
  });
});

// FOOTNOTE HOVER
function markText(elementId) {
  // Remove the 'active' class from all elements with class 'marked-element'
  var allElements = document.querySelectorAll(".marked-element");
  allElements.forEach(function (element) {
    element.classList.remove("active");
  });

  // Add the 'active' class to the specific element with the given ID
  var targetElement = document.getElementById(elementId);
  targetElement.classList.add("active");
}
