swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  speed: 1000,
  centeredSlides: true,
  freeMode: true,
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

const wrapperCards = document.querySelector(".repair-section__cards-no-swiper");
const cards = wrapperCards.querySelectorAll(".card");
const btnShowMore = document.querySelector(".show-more");
const btnShowMoreCut = document.querySelector(".show-more--cut");
let widthWindow = window.innerWidth;

window.addEventListener("resize", () => {
  widthWindow = window.innerWidth;
  btnShowMoreCut.classList.add("show-more--hidden");
  numberCards(widthWindow);
});

function numberCards() {
  if (widthWindow > 767) {
    addCards(6);
  }
  if (widthWindow > 1119) {
    addCards(8);
  }
}
numberCards(widthWindow);

function addCards(numbersCards) {
  cards.forEach((card, i) => {
    card.classList.add("card--hidden");
    if (i + 1 <= numbersCards) {
      card.classList.remove("card--hidden");
    } else if (i + 1 > numbersCards) {
      btnShowMore.classList.remove("show-more--hidden");
    }
  });
}

btnShowMore.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("card--hidden");
    btnShowMore.classList.add("show-more--hidden");
    btnShowMoreCut.classList.remove("show-more--hidden");
  });
});

btnShowMoreCut.addEventListener("click", () => {
  numberCards();
  btnShowMoreCut.classList.add("show-more--hidden");
});
