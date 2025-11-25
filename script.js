function downloadPDF() {
    window.print();
}

// Convert rating (1-5) to bar width
document.querySelectorAll(".fill").forEach(bar => {
    const rating = bar.getAttribute("data-rating");
    const width = (rating / 5) * 100; // rating to %
    bar.style.width = width + "%";
});
