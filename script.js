// Select the video player and all video links
const videoPlayer = document.getElementById("videoPlayer");
const videoLinks = document.querySelectorAll("#videoMenu a");

// Function to handle video link clicks
videoLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        const videoId = link.getAttribute("data-video-id"); // Get the YouTube video ID
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}`; // Update iframe src
    });
});
