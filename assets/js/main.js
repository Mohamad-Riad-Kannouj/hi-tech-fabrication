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

onscroll(document, navbarlinksActive);

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