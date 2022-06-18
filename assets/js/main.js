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
function openVideo() {
  vid.currentTime = 0;
  vid.play();
  vid.muted = true;
  document.getElementById("myVideo").style.display = "block";
}

function closeVideo() {
  vid.pause();
  document.getElementById("myVideo").style.display = "none";
}

let backtotop = document.getElementById("back-to-top");
setInterval(() => {
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }
}, 300);

// let mediaQueryList = window.matchMedia("(max-width: 600px)");
