const ınputText = document.querySelector("#text");
const textLength = document.querySelector(".text-length");

ınputText.addEventListener("change", (e) => {
  // Remove the space with regex
  // let ınputValue = e.target.value.replace(/\s+/g, "").length;

  // Remove the space with Array's method
  let ınputValue = e.target.value.split(" ").join("").length;

  textLength.innerHTML = ınputValue;
});
