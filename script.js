//your JS code here. If required.
// Select elements
const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when clicking the close button
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

