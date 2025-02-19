let data = {
    image: "",
    name: "Welcome India",
    item: "Rafale and jets",
    likes: 0
}

// Select elements
const likeBtn = document.getElementById("likeBtn") as HTMLButtonElement;
const likeCountSpan = document.getElementById("likeCount") as HTMLElement;

// Initialize like count
let likeCount: number = 0;

// Function to handle like button click
function handleLikeClick(): void {
    likeCount++;
    likeCountSpan.textContent = likeCount.toString();
}

// Add event listener to the button
if (likeBtn) {
    likeBtn.addEventListener("click", handleLikeClick);
} else {
    console.error("Like button not found");
}
