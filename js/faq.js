function toggleFaq(id) {
  var answer = document.getElementById(id);
  var faqQuestion = answer.previousElementSibling;

  if (answer.classList.contains("active")) {
    answer.classList.remove("active");
    faqQuestion.setAttribute("aria-expanded", "false");
  } else {
    answer.classList.add("active");
    faqQuestion.setAttribute("aria-expanded", "true");
  }
}
