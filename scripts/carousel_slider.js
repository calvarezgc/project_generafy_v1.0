/**
 * Slider de las 5 estrategias
 */

/**
 * Element selector.
 */
var leftArrow = document.getElementById("slideLeft");
var rightArrow = document.getElementById("slideRight");
var sliderContent = document.getElementById("sliderContent");
var sliderImgArr = document.getElementsByTagName("img");
var sliderImages = document.getElementById("sliderImages");
var imgArr = document.getElementsByClassName("slideImg");
var sliderIndicators = document.getElementById("sliderIndicators");
var indicator = document.getElementsByClassName("indicator");

/**
 * Variables setup.
 */
var stop = imgArr.length;
var slideNbr = 1;

/**
 * Enable/Disable auto slide for the slider with duration.
 */
autoSlide(true, 4000);

/**
 * Slide the slider to the previous img.
 */
leftArrow.addEventListener("click", function () {
  if (slideNbr !== 1 && slideNbr < stop) {
    var calc = slideNbr - 2;
    sliderImages.style.marginLeft = "-" + calc + "00%";
    document.getElementById("indicator#" + slideNbr).classList.remove("active");
    document
      .getElementById("indicator#" + (slideNbr - 1))
      .classList.add("active");
    slideNbr--;
  } else if (slideNbr === 1) {
    console.log(stop);
    sliderImages.style.marginLeft = "-" + (stop - 1) + "00%";
    document.getElementById("indicator#1").classList.remove("active");
    document.getElementById("indicator#" + stop).classList.add("active");
    slideNbr = stop;
  } else {
    var calc = slideNbr - 2;
    sliderImages.style.marginLeft = "-" + calc + "00%";
    document.getElementById("indicator#" + slideNbr).classList.remove("active");
    document
      .getElementById("indicator#" + (slideNbr - 1))
      .classList.add("active");
    slideNbr--;
  }
});

/**
 * Slide the slider to the next img.
 */
rightArrow.addEventListener("click", function () {
  if (slideNbr !== 1 && slideNbr < stop) {
    sliderImages.style.marginLeft = "-" + slideNbr + "00%";
    document.getElementById("indicator#" + slideNbr).classList.remove("active");
    document
      .getElementById("indicator#" + (slideNbr + 1))
      .classList.add("active");
    slideNbr++;
  } else if (slideNbr === 1) {
    sliderImages.style.marginLeft = "-100%";
    document.getElementById("indicator#" + slideNbr).classList.remove("active");
    document
      .getElementById("indicator#" + (slideNbr + 1))
      .classList.add("active");
    slideNbr++;
  } else {
    sliderImages.style.marginLeft = "0%";
    document.getElementById("indicator#" + slideNbr).classList.remove("active");
    document.getElementById("indicator#1").classList.add("active");
    slideNbr = 1;
  }
});

/**
 * Generate indicators.
 */

for (var i = 0; i < imgArr.length; i++) {
  if (i === 0) {
    var span = document.createElement("span");
    span.className = "indicator active";
    span.id = "indicator#" + (i + 1);
    span.dataset.number = i + 1;
    span.innerHTML = '<i class="fas fa-circle"></i>';
    span.addEventListener("click", gotoSlide);
    sliderIndicators.appendChild(span);
  } else {
    var span = document.createElement("span");
    span.className = "indicator";
    span.id = "indicator#" + (i + 1);
    span.dataset.number = i + 1;
    span.innerHTML = '<i class="fas fa-circle"></i>';
    span.addEventListener("click", gotoSlide);
    sliderIndicators.appendChild(span);
  }
}

/**
 * Function to make the slider auto slide with duration.
 * @param {*} active
 * @param {*} duration
 */
function autoSlide(active, duration) {
  if (active) {
    setInterval(() => {
      if (slideNbr !== 1 && slideNbr < stop) {
        sliderImages.style.marginLeft = "-" + slideNbr + "00%";
        document
          .getElementById("indicator#" + slideNbr)
          .classList.remove("active");
        document
          .getElementById("indicator#" + (slideNbr + 1))
          .classList.add("active");
        slideNbr++;
      } else if (slideNbr === 1) {
        sliderImages.style.marginLeft = "-100%";
        document
          .getElementById("indicator#" + slideNbr)
          .classList.remove("active");
        document
          .getElementById("indicator#" + (slideNbr + 1))
          .classList.add("active");
        slideNbr++;
      } else {
        sliderImages.style.marginLeft = "0";
        document
          .getElementById("indicator#" + slideNbr)
          .classList.remove("active");
        document.getElementById("indicator#1").classList.add("active");
        slideNbr = 1;
      }
    }, duration);
  }
}

/**
 * Function to go on the correct slide when click indicator.
 */

function gotoSlide() {
  sliderImages.style.marginLeft = "-" + (this.dataset.number - 1) + "00%";
  document.getElementById("indicator#" + slideNbr).classList.remove("active");
  document
    .getElementById("indicator#" + this.dataset.number)
    .classList.add("active");
  slideNbr = parseInt(this.dataset.number);
}
