const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

// Function to handle scrolling logic for different screen sizes
function handleMovieScroll() {
  arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const movieList = movieLists[i];
    const movieItems = movieList.querySelectorAll("img");

    const itemWidth = 270; // Fixed width of each movie item
    const totalItems = movieItems.length;
    const totalWidth = totalItems * itemWidth; // Total width of all movie items

    const movieListWrapper = movieList.parentElement; // The visible container of the movie list
    const visibleWidth = movieListWrapper.offsetWidth; // Width of the visible area

    // Event listener for arrow clicks
    arrow.addEventListener("click", () => {
      const screenWidth = window.innerWidth;
      let maxTranslateX, scrollAmount, maxClicks;

      if (screenWidth <= 768) {
        // Mobile screen logic (<= 768px)
        scrollAmount = itemWidth; // Scroll one movie width at a time
        maxTranslateX = totalWidth - visibleWidth; // Max scrollable distance
        maxClicks = Math.ceil(totalItems) - 1 + 1; // Allow for one additional click
      } else {
        // Desktop screen logic (> 768px)
        scrollAmount = visibleWidth / 2; // Scroll by half of the visible area
        maxTranslateX = totalWidth - visibleWidth; // Max scrollable distance
        maxClicks = Math.ceil(maxTranslateX / scrollAmount); // Limit scrolls based on reduced scroll amount
      }

      // Perform scrolling logic
      if (clickCounter < maxClicks) {
        clickCounter++;
        movieList.style.transform = `translateX(${
          -scrollAmount * clickCounter
        }px)`;
      } else {
        // Reset to the beginning when reaching the end
        movieList.style.transform = `translateX(0)`;
        clickCounter = 0;
      }
    });
  });
}

// Run the function initially
handleMovieScroll();

// Optional: Recalculate when window is resized
window.addEventListener("resize", handleMovieScroll);

// Run the function initially
handleMovieScroll();

// Optional: Add a resize event listener to recalculate when the screen is resized
window.addEventListener("resize", handleMovieScroll);

// Run the function initially
handleMovieScroll();

// Optional: Add a resize event listener to recalculate when the screen is resized
window.addEventListener("resize", handleMovieScroll);

function slideMovieList(index) {
  const ratio = Math.floor(window.innerWidth / 270);
  movieLists[index].style.transform = `translateX(${-300 * clickCounter}px)`;
}

// Function to slide movie list
function slideMovieList(index) {
  const ratio = Math.floor(window.innerWidth / 270);
  movieLists[index].style.transform = `translateX(${-300 * clickCounter}px)`;
}

document.addEventListener("DOMContentLoaded", function () {
  var watchButtons = document.querySelectorAll(".movie-list-item-button");
  var playerContainer = document.getElementById("player");
  var modal = document.getElementById("videoModal");
  var closeModal = modal.querySelector(".close");

  var player; // Variable to store the YouTube player instance

  function showModal(videoId) {
    // Check if the modal is already open
    if (modal.style.display === "block") {
      // If modal is open, close it first
      closeModalHandler();
    }

    // Create the iframe element
    var iframe = document.createElement("iframe");
    iframe.setAttribute("class", "youtube-video");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" +
        videoId +
        "?autoplay=1&rel=0&modestbranding=1&origin=http://127.0.0.1:5501"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");

    // Append the iframe to the player container
    playerContainer.appendChild(iframe);

    // Show the modal
    modal.style.display = "block";
  }

  // Function to close modal and pause video
  function closeModalHandler() {
    modal.style.display = "none";
    // Pause the video
    if (player) {
      player.pauseVideo();
    }
    // Clear the player container
    playerContainer.innerHTML = "";
  }

  // Close the modal when clicking outside of it or on the overlay
  window.addEventListener("click", function (event) {
    if (event.target == modal || event.target.classList.contains("overlay")) {
      closeModalHandler();
    }
  });

  // Add event listener to close button
  closeModal.addEventListener("click", closeModalHandler);

  // Close the modal when pressing Esc key
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModalHandler();
    }
  });

  // Add event listener to each "Watch" button
  watchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var videoId = button.getAttribute("data-video-id");
      showModal(videoId);
    });
  });
});

// Grab the ball (toggle button) and the elements that should change color
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".page, .container, .navbar-container, .toggle, .movie-list-title, .movie-list-container, .menu-list-item, .movie-list-item-title, .movie-list-item-desc"
);

// Check localStorage to apply the saved theme (dark or light)
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    applyDarkMode(); // If the saved theme is dark, apply it
  } else {
    removeDarkMode(); // If no theme or light, apply light mode
  }
});

// Function to toggle the dark mode
ball.addEventListener("click", () => {
  if (ball.classList.contains("active")) {
    removeDarkMode(); // Remove dark mode
  } else {
    applyDarkMode(); // Apply dark mode
  }
});

// Apply dark mode
function applyDarkMode() {
  items.forEach((item) => item.classList.add("active"));
  ball.classList.add("active");

  // Save the theme in localStorage
  localStorage.setItem("theme", "dark");
}

// Remove dark mode
function removeDarkMode() {
  items.forEach((item) => item.classList.remove("active"));
  ball.classList.remove("active");

  // Save the theme in localStorage
  localStorage.setItem("theme", "light");
}

// Hamburger button active
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".display");
  const menu = document.querySelector(".menu-container");
  const close = document.querySelector(".exit");
  const menuItems = document.querySelectorAll(".menu-list-item");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});
