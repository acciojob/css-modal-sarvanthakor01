document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("show");
});

document.querySelector(".close-modal").addEventListener("click", function () {
    document.getElementById("modal").classList.remove("show");
});

document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target === this) {
        this.classList.remove("show");
    }
});
