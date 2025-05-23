import "./infobar.js";
import "./article_page.js";
import "./requests_page.js";
import "./new_request_page.js";

document.addEventListener("DOMContentLoaded", () => {
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const mobileDropdownButton = document.getElementById("mobile-dropdown-button");
  let windowWidth = window.innerWidth;
  let expandMobileDropdown = false;

  window.addEventListener("load", () => {
    if (window.location.hash) {
      const articleId = window.location.hash.split("#")[1];
      document.getElementById(`accordion-${articleId}`).setAttribute("checked", "checked");
      document.getElementById(articleId).scrollIntoView({ behavior: "smooth" });
    }
  });

  window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      if (expandMobileDropdown) {
        mobileDropdown.classList.remove("hidden");
        mobileDropdown.classList.add("flex");
      } else {
        mobileDropdown.classList.remove("flex");
        mobileDropdown.classList.add("hidden");
      }
    } else {
      mobileDropdown.classList.remove("flex");
      mobileDropdown.classList.add("hidden");
    }
  });

  const toggleMobileDropdown = () => {
    expandMobileDropdown = !expandMobileDropdown;
    if (windowWidth < 768) {
      if (expandMobileDropdown) {
        mobileDropdown.classList.remove("hidden");
        mobileDropdown.classList.add("flex");
      } else {
        mobileDropdown.classList.remove("flex");
        mobileDropdown.classList.add("hidden");
      }
    } else {
      mobileDropdown.classList.remove("flex");
      mobileDropdown.classList.add("hidden");
    }
  };

  mobileDropdownButton.addEventListener("click", () => {
    toggleMobileDropdown();
  });
});
