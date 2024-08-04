// for scroll navber style
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 500) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
// for about section video play
document.getElementById("videoBtn").addEventListener("click", function () {
  var videoContainer = document.getElementById("videoContainer");
  var iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/hV7ZU67DO1o?si=hMVq6d0nQou4hsD1";
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  videoContainer.innerHTML = "";

  videoContainer.appendChild(iframe);
});
// ================================================for offer show & hide
const tabProduct = document.getElementById("tab_product");
const tabExpertise = document.getElementById("tab_expertise");
const tabServices = document.getElementById("tab_services");
const tabTechnology = document.getElementById("tab_technology");

tabProduct.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullProduct = document.getElementById("product");
  fullProduct.style.display = "grid";
});

tabExpertise.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullExpertise = document.getElementById("expertise");
  fullExpertise.style.display = "grid";
});

tabServices.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullServices = document.getElementById("services");
  fullServices.style.display = "grid";
});
tabTechnology.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullTechnology = document.getElementById("technology");
  fullTechnology.style.display = "grid";
});
