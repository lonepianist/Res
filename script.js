function downloadPDF() {
    window.print();
}

// STAR RATING LOGIC
document.querySelectorAll(".stars").forEach(star => {
    const rating = star.getAttribute("data-rating");
    const percent = (rating / 5) * 100;
    star.style.setProperty("--percent", percent + "%");
});
