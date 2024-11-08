// Prices for each option
const prices = {
  1: 10.0, // 1 Unit price
  2: 18.0, // 2 Unit price
  3: 24.0, // 3 Unit price
};

// Select all offer options and radio buttons
const offerOptions = document.querySelectorAll(".offer-option");
const radioButtons = document.querySelectorAll(
  '.offer-option input[type="radio"]'
);
const totalPriceElement = document.getElementById("total-price");

// Function to remove 'expanded' class and deactivate other radio buttons
function resetOptions() {
  offerOptions.forEach((option) => option.classList.remove("expanded"));
}

// Add event listeners to each offer option
offerOptions.forEach((option) => {
  option.addEventListener("click", function () {
    // Reset all options and radios
    resetOptions();

    // Expand the clicked option and activate its radio button
    this.classList.add("expanded");
    const radio = this.querySelector('input[type="radio"]');
    radio.checked = true;

    // Get the selected unit price based on the data-units attribute
    const selectedUnits = this.getAttribute("data-units");
    const selectedPrice = prices[selectedUnits];

    // Update the total price element
    totalPriceElement.textContent = `Total: $${selectedPrice} USD`;
  });
});
