const emailAddress = "markjiggervm@gmail.com";
const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");
const menuToggle = document.querySelector(".menu-toggle");
const navigationMenu = document.querySelector("#primary-navigation");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      copyStatus.textContent = "Email copied.";
    } catch (error) {
      copyStatus.textContent = `Please copy this address: ${emailAddress}`;
    }
  });
}

if (menuToggle && navigationMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigationMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navigationMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navigationMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
