// Small progressive-enhancement script.
// The navigation itself uses the native Popover API, so no menu library is needed.

document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile popover after selecting a navigation link.
const mobileMenu = document.getElementById("site-menu");

if (mobileMenu) {
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (typeof mobileMenu.hidePopover === "function") {
        mobileMenu.hidePopover();
      }
    });
  });
}
