"use strict";
window.onload = function () {
  const parallax = document.querySelector(".page");
  if (parallax) {
    const item = document.querySelector(".parallax__item--1");
    const item2 = document.querySelector(".parallax__item--2");
    const item3 = document.querySelector(".parallax__item--3");
    const item4 = document.querySelector(".parallax__item--4");
    const forItem = 75;

    const speed = 0.1;
    let positionX = 0;
    let positionY = 0;
    let coordXprocent = 0;
    let coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      item.style.cssText = `transform: translate(${positionX / -forItem}%,${
        (positionY / -forItem) * 2
      }%);`;
      item2.style.cssText = `transform: translate(${positionX / forItem}%,${
        (positionY / forItem) * 2
      }%);`;
      item3.style.cssText = `transform: translate(${positionX / -forItem}%,${
        (positionY / -forItem) * 2
      }%);`;
      item4.style.cssText = `transform: translate(${positionX / forItem}%,${
        (positionY / forItem) * 2
      }%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });
  }
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

function addLoadedClass() {
  if (!document.documentElement.classList.contains("loading")) {
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    });
  }
}
addLoadedClass();
