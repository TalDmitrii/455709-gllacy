var feedbackOpen = document.querySelector(".feedback-form-open");
var feedbackForm = document.querySelector(".feedback-form");
var overlay = document.querySelector(".feedback-overlay");
var feedbackClose = document.querySelector(".close-form");
var login = feedbackForm.querySelector(".name-field");
var mail = feedbackForm.querySelector(".mail-field");

feedbackOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackForm.classList.add("feedback-form-show");
  overlay.classList.add("feedback-overlay-open");
  login.focus();
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("feedback-form-show");
  overlay.classList.remove("feedback-overlay-open");
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackForm.classList.contains("feedback-form-show")) {
      feedbackForm.classList.remove("feedback-form-show");
      overlay.classList.remove("feedback-overlay-open");
    }
  }
});
