console.log("working");
aboutButton.addEventListener("mouseenter", () => {
    aboutButton.innerHTML = "about";
    console.log("in");
});
aboutButton.addEventListener("mouseleave", () => {
    aboutButton.innerHTML = "";
});

moreButton.addEventListener("mouseenter", () => {
    moreButton.innerHTML = "learn more";
});
moreButton.addEventListener("mouseleave", () => {
    moreButton.innerHTML = "";
});