// // Select elements
// const audio = document.getElementById("background-audio");
// const playButton = document.getElementById("play-audio-btn");
// const contentContainer = document.querySelector(".content-container");
// const waterContainer = document.querySelector(".water-container");
// const leftButton = document.getElementById("left");
// const rightButton = document.getElementById("right");
// const infoContainer = document.querySelector(".info-container");
// const infoFrame = document.querySelector(".info-frame");

// // Initialize translateX value
// let translateX = 0;

// // Define the maximum translateX value for 10 sections
// const maxTranslateX = -900; // 10 sections * -100vw each

// // Array to hold information for islands
// const islandInfo = [
//   "This is information about Island 1.",
//   "This is information about Island 2.",
//   "This is information about Island 3.",
//   "This is information about Island 4.",
//   "This is information about Island 5.",
//   "This is information about Island 6.",
//   "This is information about Island 7.",
//   "This is information about Island 8.",
//   "This is information about Island 9.",
//   "This is information about Island 10.",
// ];

// // Function to move content
// function moveContent(direction) {
//   const step = 100; // 100vw per section

//   // Adjust translateX based on direction
//   if (direction === "right") {
//     translateX -= step;
//   } else if (direction === "left") {
//     translateX += step;
//   }

//   // Cap the translateX value to prevent over-scrolling
//   translateX = Math.max(Math.min(translateX, 0), maxTranslateX);

//   // Apply the translateX value to both containers
//   const translateValue = `${translateX}vw`;
//   contentContainer.style.transform = `translateX(${translateValue})`;
//   waterContainer.style.transform = `translateX(${translateValue})`;
// }

// // Event listeners for buttons
// rightButton.addEventListener("click", () => moveContent("right"));
// leftButton.addEventListener("click", () => moveContent("left"));

// // Play Audio
// playButton.addEventListener("click", () => {
//   audio
//     .play()
//     .then(() => {
//       console.log("Audio is playing!");
//       playButton.textContent = "Audio Enabled";
//       playButton.disabled = true; // Disable button after enabling audio
//     })
//     .catch((error) => {
//       console.error("Error playing audio:", error);
//       alert("Could not play audio. Please check your browser settings.");
//     });
// });

// // Function to show information
// function showInfo(index) {
//   // Update the text inside the info-frame based on the island index
//   infoFrame.textContent = islandInfo[index];

//   // Display the info-container
//   infoContainer.style.display = "flex"; // Make it visible
// }

// // Add click event listeners for islands
// document.querySelectorAll(".island").forEach((island, index) => {
//   island.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent default link behavior
//     showInfo(index); // Pass the index to fetch the corresponding info
//   });
// });

// Select elements
const audio = document.getElementById("background-audio");
const playButton = document.getElementById("play-audio-btn");
const contentContainer = document.querySelector(".content-container");
const waterContainer = document.querySelector(".water-container");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const infoContainer = document.querySelector(".info-container");
const infoFrame = document.querySelector(".info-frame");

// Initialize translateX value
let translateX = 0;

// Define the maximum translateX value for 10 sections
const maxTranslateX = -900; // 10 sections * -100vw each

// Array of information for each island
const islandInfo = [
  null, // No info for area-1
  "This is information about Island 1.",
  "This is information about Island 2.",
  "This is information about Island 3.",
  "This is information about Island 4.",
  "This is information about Island 5.",
  "This is information about Island 6.",
  "This is information about Island 7.",
  "This is information about Island 8.",
  "This is information about Island 9.",
];

// Function to move content
function moveContent(direction) {
  const step = 100; // 100vw per section

  // Adjust translateX based on direction
  if (direction === "right") {
    translateX -= step;
  } else if (direction === "left") {
    translateX += step;
  }

  // Cap the translateX value to prevent over-scrolling
  translateX = Math.max(Math.min(translateX, 0), maxTranslateX);

  // Apply the translateX value to both containers
  const translateValue = `${translateX}vw`;
  contentContainer.style.transform = `translateX(${translateValue})`;
  waterContainer.style.transform = `translateX(${translateValue})`;
}

// Event listeners for buttons
rightButton.addEventListener("click", () => moveContent("right"));
leftButton.addEventListener("click", () => moveContent("left"));

// Play Audio
playButton.addEventListener("click", () => {
  audio
    .play()
    .then(() => {
      console.log("Audio is playing!");
      playButton.textContent = "Audio Enabled";
      playButton.disabled = true; // Disable button after enabling audio
    })
    .catch((error) => {
      console.error("Error playing audio:", error);
      alert("Could not play audio. Please check your browser settings.");
    });
});

// Function to show information
function showInfo(index) {
  const info = islandInfo[index];
  if (!info) return;

  // Populate the info frame with island-specific information
  infoFrame.textContent = info;

  // Show the info container
  infoContainer.style.display = "flex";
}

// Add click event listeners for islands
document.querySelectorAll(".island").forEach((island) => {
  island.addEventListener("click", (event) => {
    const index = event.target.closest(".island").dataset.index;
    showInfo(Number(index));
  });
});

// Add event listener to hide the info container when clicked outside
infoContainer.addEventListener("click", (event) => {
  if (event.target === infoContainer) {
    infoContainer.style.display = "none";
  }
});

// Debugging: Log click events to ensure correct index
document.querySelectorAll(".island").forEach((island) => {
  island.addEventListener("click", (event) => {
    const index = event.target.closest(".island").dataset.index;
    console.log("Island clicked:", index); // Debugging
    showInfo(Number(index));
  });
});
