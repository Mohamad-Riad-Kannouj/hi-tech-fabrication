// Easy on scroll event listener
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

let navBarLinks = document.querySelectorAll("#navbar .scrollto");

const navbarlinksActive = () => {
  let position = window.scrollY + 350;

  navBarLinks.forEach(navbarlink => {
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);

    if (!section) return;

    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};

// window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);

// Close navbar on click
function hideNav() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    let btn = document.querySelector("#header button");
    let div = document.getElementById("navbarSupportedContent");

    btn.classList.toggle("collapsed");
    btn.setAttribute("aria-expanded", "false");
    div.classList.toggle("show");
  }

  return;
}

// Play/pause video
let vid = document.getElementById("video");
function openModel() {
  vid.play();
  vid.muted = true;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  vid.pause();
  document.getElementById("myModal").style.display = "none";
}

// Initialize and add the map
// function initMap() {
// The location of hiTech 34.45296659107084, 35.84108906795691
//   const hiTech = { lat: 34.45296659107084, lng: 35.84108906795691 };
// The map, centered at hiTech
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//     center: hiTech
//   });
// The marker, positioned at hiTech
//   const marker = new google.maps.Marker({
//     position: hiTech,
//     map: map
//   });
// }
// window.initMap = initMap;