const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");

const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thank-you-card");

const selectedValue = document.getElementById("selected-value");

let selectedRating = 0;

ratingButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // usuwanie active ze wszystkich
    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // dodanie active do klikniętego
    button.classList.add("active");

    // zapis oceny
    selectedRating = button.textContent;
  });

});

submitBtn.addEventListener("click", () => {

  if (selectedRating === 0) {
    alert("Please select a rating!");
    return;
  }

  // pokazanie oceny
  selectedValue.textContent = selectedRating;

  // zmiana widoku
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");

});