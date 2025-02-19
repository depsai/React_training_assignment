"use strict";
let data = {
    image: "",
    name: "Welcome India",
    item: "Rafale and jets",
    likes: 0
};
// Select elements
const likeBtn = document.getElementById("likeBtn");
const likeCountSpan = document.getElementById("likeCount");
// Initialize like count
let likeCount = 0;
// Function to handle like button click
function handleLikeClick() {
    likeCount++;
    likeCountSpan.textContent = likeCount.toString();
}
// Add event listener to the button
if (likeBtn) {
    likeBtn.addEventListener("click", handleLikeClick);
}
else {
    console.error("Like button not found in the DOM!");
}
