let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const a = document.querySelectorAll(".navigation .nav-button a");

function showSlide(index) {
  slideIndex = index;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;

  // Loại bỏ lớp 'active' khỏi tất cả các nút và 'active-btn' khỏi tất cả các div chứa nút
  a.forEach((button) => {
    button.classList.remove("active");
    button.parentElement.classList.remove("active-btn");
  });

  // Thêm lớp 'active' cho nút hiện tại và 'active-btn' cho div chứa nút
  a[slideIndex].classList.add("active");
  a[slideIndex].parentElement.classList.add("active-btn");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

let slideInterval = setInterval(nextSlide, 5000);

function currentSlide(index) {
  clearInterval(slideInterval);
  showSlide(index);
  slideInterval = setInterval(nextSlide, 5000);
}

showSlide(slideIndex);


// =============================


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".feedback-slider ul");
  const slides = Array.from(slider.children);
  const slideCount = slides.length;
  const slideWidth = 103 / 3; // Hiển thị 3 ảnh mỗi lần
  let currentIndex = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function updateSlides() {
    slider.style.transform = `translateX(${-currentIndex * slideWidth}%)`;
  }

  function prev() {
    currentIndex = currentIndex === 0 ? slideCount - 3 : currentIndex - 1;
    updateSlides();
  }

  function next() {
    currentIndex = (currentIndex + 1) % (slideCount - 2);
    updateSlides();
  }

  function handleDragStart(e) {
    startX = e.pageX || e.touches[0].pageX;
    isDragging = true;
    slider.style.transition = "none"; // Disable transition during drag
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    currentX = (e.pageX || e.touches[0].pageX) - startX;
    slider.style.transform = `translateX(${
      currentX - currentIndex * slideWidth
    }px)`;
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = "transform 0.5s ease"; // Re-enable transition
    const endX = e.pageX || e.changedTouches[0].pageX;
    const diffX = endX - startX;

    if (diffX < -50) {
      // Swipe left
      next();
    } else if (diffX > 50) {
      // Swipe right
      prev();
    } else {
      updateSlides(); // Reset position if swipe distance is not sufficient
    }
  }

  // Event listeners for drag
  slider.addEventListener("mousedown", handleDragStart);
  slider.addEventListener("mousemove", handleDragMove);
  slider.addEventListener("mouseup", handleDragEnd);
  slider.addEventListener("mouseleave", handleDragEnd);

  slider.addEventListener("touchstart", handleDragStart);
  slider.addEventListener("touchmove", handleDragMove);
  slider.addEventListener("touchend", handleDragEnd);

  // Add event listeners to navigation buttons
  document.querySelector(".feedback-prev").addEventListener("click", () => {
    slider.classList.add("transition", "right");
    setTimeout(() => {
      prev();
      slider.classList.remove("transition", "right");
    }, 600); // Duration should match the CSS transition
  });

  document.querySelector(".feedback-next").addEventListener("click", () => {
    slider.classList.add("transition", "left");
    setTimeout(() => {
      next();
      slider.classList.remove("transition", "left");
    }, 600); // Duration should match the CSS transition
  });

  // Initialize slider position
  updateSlides();
});

$(document).ready(function () {
  function reorderElements(divOrder, buttonOrder) {
    const $container = $("#container"); // Assuming #container exists and holds divs to be reordered
    const $buttonContainer = $(".reasons-to-choose-nav-contain");

    // Reset all divs' className to "side-box"
    $(".side-box, .main-box").each(function () {
      $(this).removeClass("main-box").addClass("side-box");
    });

    // Reorder divs
    divOrder.forEach((id) => {
      const $div = $(`#${id}`);
      $container.append($div);
    });

    // Set the target div to main-box
    const $targetDiv = $(`#${divOrder[1]}`);
    $targetDiv.removeClass("side-box").addClass("main-box");

    // Reorder buttons
    buttonOrder.forEach((id) => $buttonContainer.append($(`#${id}`)));

    // Remove active class from all buttons
    $buttonContainer.find(".active-btn").removeClass("active-btn");
  }

  // Event handlers for buttons
  $("#1").click(function () {
    reorderElements(["box3", "box1", "box2"], ["2", "1", "3"]);
    $(this).addClass("active-btn"); // Add active class to the clicked button
  });

  $("#2").click(function () {
    reorderElements(["box1", "box2", "box3"], ["2", "1", "3"]);
    $(this).addClass("active-btn"); // Add active class to the clicked button
  });

  $("#3").click(function () {
    reorderElements(["box2", "box3", "box1"], ["2", "1", "3"]);
    $(this).addClass("active-btn"); // Add active class to the clicked button
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".our-partner-slider ul");
  const slides = Array.from(slider.children);
  const slideCount = slides.length;
  const slideWidth = 103 / 4; // Hiển thị 3 ảnh mỗi lần
  let currentIndex = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function updateSlides() {
    slider.style.transform = `translateX(${-currentIndex * slideWidth}%)`;
  }

  function prev() {
    currentIndex = currentIndex === 0 ? slideCount - 3 : currentIndex - 1;
    updateSlides();
  }

  function next() {
    currentIndex = (currentIndex + 1) % (slideCount - 2);
    updateSlides();
  }

  function handleDragStart(e) {
    startX = e.pageX || e.touches[0].pageX;
    isDragging = true;
    slider.style.transition = "none"; // Disable transition during drag
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    currentX = (e.pageX || e.touches[0].pageX) - startX;
    slider.style.transform = `translateX(${
      currentX - currentIndex * slideWidth
    }px)`;
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = "transform 0.5s ease"; // Re-enable transition
    const endX = e.pageX || e.changedTouches[0].pageX;
    const diffX = endX - startX;

    if (diffX < -50) {
      // Swipe left
      next();
    } else if (diffX > 50) {
      // Swipe right
      prev();
    } else {
      updateSlides(); // Reset position if swipe distance is not sufficient
    }
  }

  // Event listeners for drag
  slider.addEventListener("mousedown", handleDragStart);
  slider.addEventListener("mousemove", handleDragMove);
  slider.addEventListener("mouseup", handleDragEnd);
  slider.addEventListener("mouseleave", handleDragEnd);

  slider.addEventListener("touchstart", handleDragStart);
  slider.addEventListener("touchmove", handleDragMove);
  slider.addEventListener("touchend", handleDragEnd);

  // Add event listeners to navigation buttons
  document.querySelector(".our-partner-prev").addEventListener("click", () => {
    slider.classList.add("transition", "right");
    setTimeout(() => {
      prev();
      slider.classList.remove("transition", "right");
    }, 600); // Duration should match the CSS transition
  });

  document.querySelector(".our-partner-next").addEventListener("click", () => {
    slider.classList.add("transition", "left");
    setTimeout(() => {
      next();
      slider.classList.remove("transition", "left");
    }, 600); // Duration should match the CSS transition
  });

  // Initialize slider position
  updateSlides();
});
