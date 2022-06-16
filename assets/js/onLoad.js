let mediaQueryList = window.matchMedia("(max-width: 600px)");

function checkScreen(event) {
  if (event.matches) {
    let carousel_indicators = document.getElementsByClassName(
      "carousel-indicators"
    )[0];
    carousel_indicators.classList.toggle("d-none");

    for (let i = 0; i < 12; i++) {
      let btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("data-bs-target", "#carouselExampleIndicators");
      btn.setAttribute("data-bs-slide-to", `${i}`);
      if (i === 0) {
        btn.setAttribute("class", "active");
        btn.setAttribute("aria-current", "true");
      }
      btn.setAttribute("aria-label", `Slide ${i + 1}`);

      carousel_indicators.appendChild(btn);
    }

    let btns = document.querySelectorAll(".carousel-btn");
    btns.forEach(e => {
      e.classList.toggle("d-none");
    });

    let carousel = document.querySelector("#products .container-fluid");
    carousel.setAttribute("id", "carouselExampleIndicators");
    carousel.classList.toggle("container-fluid");
    carousel.classList.toggle("carousel");
    carousel.classList.toggle("slide");
    carousel.setAttribute("data-bs-ride", "carousel");

    let products_row = document.getElementById("products_row");
    products_row.removeAttribute("class");
    products_row.setAttribute("class", "carousel-inner");

    for (let i = 1; i < 13; i++) {
      let col = document.createElement("div");
      if (i != 1) {
        col.setAttribute("class", "carousel-item");
      } else {
        col.setAttribute("class", "carousel-item active");
      }

      let img = document.createElement("img");
      img.src = `assets/img/img_${i}.png`;
      img.alt = "";
      img.classList.add("d-block", "w-100");

      col.appendChild(img);
      products_row.appendChild(col);
    }
  } else {
    let products_row = document.getElementById("products_row");

    for (let i = 1; i < 13; i++) {
      let col = document.createElement("div");
      col.classList.add("col-lg-3", "col-md-4", "product-item");

      let img = document.createElement("img");
      img.src = `assets/img/img_${i}.png`;
      img.alt = "";
      img.classList.add("img-fluid", "product-lightbox");

      col.appendChild(img);
      products_row.appendChild(col);
    }
  }
}

checkScreen(mediaQueryList);