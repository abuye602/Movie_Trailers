const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
let clickCounter = 0; // Declare clickCounter globally

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    slideMovieList(i);
  });
});

movieLists.forEach((list, i) => {
  const itemNum = list.querySelectorAll("img").length;

  list.addEventListener("wheel", (event) => {
    const deltaX = event.deltaX;
    const deltaY = event.deltaY;
    const ratio = Math.floor(window.innerWidth / 270);

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault();
      if (deltaX > 0 && itemNum - (3 + clickCounter) + (4 - ratio) > 0) {
        clickCounter++;
        slideMovieList(i);
      } else if (deltaX < 0 && clickCounter > 0) {
        clickCounter--;
        slideMovieList(i);
      }
    }
  });
});

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

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".page,.container,.navbar-container,.toggle,.movie-list-title,.menu-list-item,.movie-list-item-title,.movie-list-item-desc"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
