// Highlight active nav link
(function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
})();

// FAQ accordion (used on faqs.html)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-faq-q]");
  if (!btn) return;

  const answer = btn.parentElement.querySelector("[data-faq-a]");
  const isOpen = answer.classList.contains("open");
  document.querySelectorAll("[data-faq-a]").forEach(a => a.classList.remove("open"));
  if (!isOpen) answer.classList.add("open");
});
