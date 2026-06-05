const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const faqButtons = document.querySelectorAll(".faq-item button");

if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const toggleHeaderShadow = () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
};

toggleHeaderShadow();
window.addEventListener("scroll", toggleHeaderShadow, { passive: true });

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.setAttribute("aria-expanded", "false");
        const otherPanel = otherButton.nextElementSibling;
        if (otherPanel) {
          otherPanel.hidden = true;
        }
      }
    });

    button.setAttribute("aria-expanded", String(!isExpanded));
    if (panel) {
      panel.hidden = isExpanded;
    }
  });
});
